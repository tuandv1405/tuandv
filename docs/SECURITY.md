# Bảo mật

Tình trạng tại 26/11/2026.

## Đang có

**Kết nối & hạ tầng**
- HTTPS hai chặng: Cloudflare **Full (strict)** + cert Let's Encrypt ở origin; Always Use HTTPS; DNSSEC bật.
- Firewall VPS chỉ cho dải IP Cloudflare vào 80/443 — không gọi thẳng được origin. IP gốc không công khai (đừng commit nó, repo này public).
- Container chạy user `node` (không root), chỉ nghe `127.0.0.1`, giới hạn RAM 256 MB.
- Secret (`SMTP_PASS`, `TURNSTILE_SECRET`) chỉ nằm trong `/opt/tuandv/.env` (quyền `600`), không có trong git.

**Ứng dụng**
- Next.js 15.5.29 / React 19.3.1 — đã vá lỗ hổng chạy mã từ xa qua React Server Components (GHSA-9qr9-h5gf-34mp) và các lỗi DoS liên quan.
- `npm audit`: **0 lỗ hổng**. Các gói phụ thuộc gián tiếp được ép lên bản đã vá bằng `overrides` trong `package.json` (`@grpc/grpc-js`, `postcss`, `nanoid`, `source-map-js`) — khi nâng Next.js/Firebase, chạy lại `npm audit` và gỡ override nào không còn cần.
- Header trên mọi route (`next.config.js`):
  - `Content-Security-Policy` — script chỉ từ chính site, Google Tag Manager và Cloudflare Turnstile; kết nối chỉ tới Google Analytics / Firebase / Turnstile; `frame-ancestors 'none'`, `object-src 'none'`.
  - `Strict-Transport-Security: max-age=31536000`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.
  - CSP còn `'unsafe-inline'` cho script vì Next.js chèn script inline trên trang tĩnh (không có nonce).
- Thêm dịch vụ bên ngoài mới (script, iframe, API) → phải thêm host vào CSP trong `next.config.js`, nếu không trình duyệt sẽ chặn.

**Form liên hệ** (`/api/contact`)
- Cloudflare Turnstile kiểm tra phía server (đúng action + hostname).
- Trường honeypot ẩn + thời gian điền tối thiểu.
- Giới hạn 3 lần / 10 phút theo IP và theo email nhận.
- Escape HTML trong mail, bỏ xuống dòng trong tên (chặn chèn header), mail xác nhận không chép nội dung tin nhắn và lọc link — khó bị dùng làm công cụ spam.
- Khoá Firebase trong code là cấu hình web công khai theo thiết kế, không phải secret.

## Việc còn lại

| Việc | Vì sao | Ai làm |
|---|---|---|
| Điền `TURNSTILE_SECRET` vào `.env` trên VPS | Chưa có thì server bỏ qua kiểm tra captcha | chủ site (secret) |
| Tạo `noreply@tuandv.me`, chuyển `SMTP_USER`/`CONTACT_FROM` sang đó | Để mật khẩu hộp mail chính không nằm trên server | chủ site |
| Nâng DMARC `p=none` → `p=quarantine` sau vài tuần mail chạy ổn | Chặn giả mạo địa chỉ @tuandv.me | Cloudflare DNS |
| Banner xin đồng ý trước khi bật Analytics | Nghị định 13/2023 về bảo vệ dữ liệu cá nhân | code |
| Giới hạn API key Firebase theo HTTP referrer `tuandv.me` | Hạn chế dùng key ở site khác | Google Cloud Console |
| Bộ đếm rate limit bền (Redis/file) | Hiện restart container là về 0 | code, khi cần |
