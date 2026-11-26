# Deploy & hạ tầng

> Repo này public: địa chỉ IP gốc của VPS, tài khoản và mọi secret **không** ghi ở đây. IP gốc đang được Cloudflare che — đừng commit nó.
> Trong các lệnh dưới, `$VPS` là host SSH của máy chủ (đặt trong `~/.ssh/config` hoặc biến môi trường trên máy dev).

## Sơ đồ

```
Trình duyệt ──HTTPS──▶ Cloudflare (proxy, DNSSEC, Always Use HTTPS)
                          │  SSL mode: Full (strict)
                          ▼
                 VPS :443  nginx  (/etc/nginx/sites-enabled/zz-tuandv.conf, cert Let's Encrypt "tuandv")
                          │  proxy_pass
                          ▼
                 127.0.0.1:18600 → container tuandv-web (node server.js, user node)
```

- Firewall (ufw) trên VPS chỉ mở 80/443 cho dải IP của Cloudflare → không gọi thẳng được vào origin.
- Container chỉ nghe trên `127.0.0.1:18600`. Cổng nằm trong khối `18600-18699`, mạng Docker `172.30.60.0/24`, đã đăng ký trong sổ cổng `/opt/ports.md` của VPS (VPS dùng chung với các site khác — đăng ký trước khi dùng cổng mới).

## Build & deploy

VPS không đủ RAM để chạy `next build` cạnh các site khác, nên **build trên máy dev**, chỉ copy bản standalone lên.

```bash
npm ci
npm run build

# đóng gói: standalone + static + public
D=$(mktemp -d)
mkdir -p $D/bundle
cp -R .next/standalone/. $D/bundle/
rm -rf $D/bundle/.next/static $D/bundle/public
cp -R .next/static $D/bundle/.next/static
cp -R public $D/bundle/public
rm -rf $D/bundle/node_modules/@img          # sharp bản macOS, không dùng trên Linux
COPYFILE_DISABLE=1 tar -C $D -czf /tmp/tuandv-bundle.tgz bundle

# upload + chạy lại
scp /tmp/tuandv-bundle.tgz $VPS:/tmp/
ssh $VPS 'cd /opt/tuandv && rm -rf bundle && tar -xzf /tmp/tuandv-bundle.tgz && rm /tmp/tuandv-bundle.tgz \
  && docker compose up -d --build && docker compose ps'
```

Kiểm tra sau deploy:

```bash
curl -sI https://tuandv.me/ | grep -iE "^HTTP|content-security|strict-transport"
curl -s -w " %{http_code}\n" -H 'Content-Type: application/json' \
  -d '{"name":"x","email":"bad","message":"hi","elapsed":5000}' https://tuandv.me/api/contact   # mong đợi 422
```

**Rollback:** build lại commit cũ (`git checkout <commit> && npm ci && npm run build`) rồi deploy như trên.

### Thư mục trên VPS: `/opt/tuandv`

| File | Nội dung |
|---|---|
| `Dockerfile` | image runtime `node:24-alpine`, copy `bundle/`, chạy `node server.js` với user `node` |
| `docker-compose.yml` | project `tuandv-web`, cổng `127.0.0.1:18600:3000`, `mem_limit: 256m`, `env_file: .env`, healthcheck |
| `.env` | biến môi trường (quyền `600`, **không** nằm trong git) |
| `bundle/` | bản build đang chạy |
| `issue-cert.sh` | cấp / gắn cert Let's Encrypt cho `tuandv.me` (webroot) |

## Biến môi trường

Đặt trong `/opt/tuandv/.env` trên VPS, sau khi sửa chạy `docker compose up -d`.

| Biến | Bắt buộc | Ý nghĩa |
|---|---|---|
| `SMTP_HOST` | có | `smtp.hostinger.com` |
| `SMTP_PORT` | | `465` (TLS) — mặc định 465 |
| `SMTP_USER` | có | hộp mail dùng để đăng nhập SMTP |
| `SMTP_PASS` | có | mật khẩu của chính hộp mail đó (secret) |
| `CONTACT_FROM` | | địa chỉ người gửi hiển thị; mặc định = `SMTP_USER` |
| `CONTACT_TO` | | hộp nhận tin liên hệ mới; mặc định = `SMTP_USER` |
| `CONTACT_FROM_NAME` | | tên hiển thị trong mail xác nhận |
| `TURNSTILE_SECRET` | nên có | secret key của widget Turnstile "tuandv.me contact form" (secret). Để trống = bỏ qua kiểm tra captcha, log cảnh báo một lần |

Thiếu `SMTP_HOST`/`SMTP_USER`/`SMTP_PASS` → API liên hệ trả `503` và log `[contact] SMTP is not configured`.

Khuyến nghị: dùng một hộp riêng chỉ để gửi (`noreply@tuandv.me`) cho `SMTP_USER`/`CONTACT_FROM`, giữ `CONTACT_TO` là hộp chính — để mật khẩu hộp chính không nằm trên server.

## Form liên hệ — luồng xử lý

`POST /api/contact` (`src/app/api/contact/route.ts`):

1. Trường ẩn `website` có giá trị hoặc thời gian điền form < 2,5 giây → trả `ok` giả, không gửi gì (bot).
2. Kiểm tra dữ liệu: tên, email hợp lệ, nội dung ≥ 10 ký tự → sai thì `422`.
3. Kiểm tra token Turnstile qua `siteverify` (phải đúng `action: "contact"` và `hostname: "tuandv.me"`) → sai thì `403`.
4. Giới hạn 3 lần / 10 phút cho mỗi IP và mỗi email nhận → vượt thì `429` (bộ đếm trong bộ nhớ, restart container là về 0).
5. Gửi mail báo cho `CONTACT_TO` (Reply-To = người gửi), rồi gửi mail xác nhận cho người gửi (không chép lại nội dung tin nhắn, lọc link trong tên).

Tin nhắn **không lưu vào database** — nơi lưu duy nhất là hộp mail `CONTACT_TO`.

## Tên miền & DNS

- **Nhà đăng ký:** Squarespace Domains. Nameserver đã trỏ sang Cloudflare. DNSSEC: bật trên Cloudflare, DS record đã thêm ở Squarespace.
- **Cloudflare (zone `tuandv.me`, gói Free):**
  - `A @` → IP VPS, **Proxied**; `CNAME www` → `tuandv.me`, **Proxied** (nginx redirect `www` → apex).
  - Bản ghi mail Hostinger để **DNS only** (không bật proxy, nếu không mail sẽ hỏng): `MX` mx1/mx2.hostinger.com, `TXT` SPF, `CNAME hostingermail-{a,b,c}._domainkey`, `CNAME autodiscover`, `CNAME autoconfig`, `TXT _dmarc`.
  - SSL/TLS: **Full (strict)**, Always Use HTTPS: bật.
  - Turnstile: widget "tuandv.me contact form" (hostname `tuandv.me`, chế độ Managed). Site key (công khai) nằm trong `src/app/components/Turnstile.tsx`.

## Chứng chỉ origin

Let's Encrypt, cert name `tuandv`, cấp bằng webroot (`/var/www/tuandv-acme`) — HTTP-01 vẫn chạy qua proxy Cloudflare. Certbot tự gia hạn và reload nginx (deploy hook).

Cấp lại thủ công:

```bash
ssh $VPS /opt/tuandv/issue-cert.sh
```

Script backup vhost, cấp cert, thay đường dẫn cert giữa hai dấu `#CERT_START` / `#CERT_END` trong `zz-tuandv.conf`, chạy `nginx -t` rồi reload.

## Nginx

`/etc/nginx/sites-enabled/zz-tuandv.conf` (tiền tố `zz-` để không bao giờ thành default server):

- `:80` — `tuandv.me`, `www.tuandv.me`: phục vụ `/.well-known/acme-challenge/`, còn lại 301 → `https://tuandv.me`.
- `:443` — `www` 301 → apex; `/_next/static/` cache 1 năm; còn lại `proxy_pass http://127.0.0.1:18600`.

Sau khi sửa: `nginx -t && systemctl reload nginx`. VPS dùng chung — luôn chạy `nginx -t` trước khi reload.
