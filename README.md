# tuandv.me — portfolio & blog

Portfolio và blog cá nhân của Đỗ Văn Tuấn (Mobile Engineer — Android, iOS, Compose Multiplatform, Flutter), chạy tại **https://tuandv.me**.

Giao diện pixel tông xanh-đen, khung kính bán trong suốt, cuộn mượt (Lenis), song ngữ VI/EN.

## Công nghệ

| Phần | Dùng |
|---|---|
| Framework | Next.js 15 (App Router, `output: "standalone"`), React 19, TypeScript |
| Giao diện | CSS thuần (`src/app/globals.css`), pixel art vẽ bằng SVG từ ma trận ký tự |
| Font | Silkscreen, VT323, Be Vietnam Pro, JetBrains Mono (`next/font`, tự host) |
| Cuộn / animation | Lenis + IntersectionObserver (`data-reveal`) |
| Form liên hệ | API route `/api/contact` → SMTP (nodemailer) + Cloudflare Turnstile |
| Analytics | Firebase Analytics (GA4), tải lười |
| Hạ tầng | Docker trên VPS, nginx, Cloudflare (proxy + DNS), Let's Encrypt |

## Chạy local

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build production (standalone)
npm run lint
```

Ở local, form liên hệ dùng site key thử nghiệm của Turnstile (luôn đạt). Muốn gửi mail thật thì đặt biến SMTP như trong [docs/DEPLOY.md](docs/DEPLOY.md#biến-môi-trường); không có biến SMTP thì API trả `503 unavailable`.

## Cấu trúc

```
src/
  app/
    page.tsx                 trang chủ one-page: hero, giới thiệu, kỹ năng, kinh nghiệm, dự án, store, blog, liên hệ
    projects/                danh sách + trang chi tiết dự án (/projects/[slug])
    blog/                    danh sách + bài viết (/blog/[slug])
    api/contact/route.ts     API form liên hệ (Turnstile → rate limit → gửi 2 mail)
    icon.tsx, apple-icon.tsx favicon pixel sinh từ sprite avatar
    components/              Header, Footer, ContactForm, Turnstile, PixelSprite, sprites.ts, ...
    context/LanguageContext  chuỗi giao diện VI/EN + hàm pick() cho nội dung song ngữ
    data/                    NỘI DUNG: profile.ts, projects.ts, posts.ts
  lib/
    mailer.ts                cấu hình SMTP từ biến môi trường
    analytics.ts             Firebase Analytics + hàng đợi event
docs/
  DEPLOY.md                  build, deploy, hạ tầng, biến môi trường
  SECURITY.md                các lớp bảo mật đang có và việc còn lại
```

## Sửa nội dung

Toàn bộ nội dung nằm trong `src/app/data/`, mỗi chuỗi có hai bản `{ vi, en }`:

- **`profile.ts`** — tên, giới thiệu, link store/GitHub, nhóm kỹ năng, kinh nghiệm làm việc (`jobs`).
- **`projects.ts`** — dự án cá nhân (`kind: "personal"`) và công ty (`kind: "company"`). Mỗi dự án tự có trang chi tiết.
- **`posts.ts`** — bài blog, thân bài là danh sách block `p` / `h` / `list` / `code`.

Icon dự án là sprite pixel trong `src/app/components/sprites.ts` (mỗi chuỗi là một hàng, mỗi ký tự một pixel, `.` là trong suốt, màu lấy từ `palette`). Các hàng của một sprite phải dài bằng nhau.

Chuỗi giao diện (nút, tiêu đề mục…) nằm trong `src/app/context/LanguageContext.tsx`.

## Analytics

Firebase project `portfolio-4a138`. Event đang ghi: `page_view` (mỗi lần đổi trang), `select_project`, `select_post`, `project_filter`, `language_change`, `store_click`, `outbound_click`, `generate_lead` (gửi form thành công), `contact_error`.

Thêm event cho một phần tử bất kỳ: gắn `data-track="ten_event"` và tham số `data-track-ten-tham-so="gia-tri"`.

## Deploy

Xem [docs/DEPLOY.md](docs/DEPLOY.md). Tóm tắt: build standalone trên máy dev → đóng gói `bundle/` → upload lên VPS → `docker compose up -d --build`.
