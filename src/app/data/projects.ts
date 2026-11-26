import type { L } from "./profile";

export type ProjectKind = "personal" | "company";
export type StoreLink = { label: string; href: string; kind: "play" | "appstore" | "web" };

export interface Project {
  slug: string;
  kind: ProjectKind;
  title: string;
  /** Key of the pixel sprite in components/sprites.ts */
  sprite: string;
  year: string;
  platforms: string[];
  short: L;
  detail: L[];
  role: L;
  features: L[];
  stack: string[];
  links: StoreLink[];
  image?: string;
  /** Group of related apps, shown as one card ("cụm dự án") */
  apps?: { name: string; note: L }[];
}

const projects: Project[] = [
  // ───────────── Personal ─────────────
  {
    slug: "ts-launcher-tv",
    kind: "personal",
    title: "TS Launcher TV + TS Remote TV",
    sprite: "tv",
    year: "2024 —",
    platforms: ["Android TV", "Android", "iOS"],
    short: {
      vi: "Cụm app cho TV: launcher thay màn hình chính Android TV và app remote điều khiển TV từ điện thoại.",
      en: "A TV app suite: a home-screen launcher for Android TV plus a phone app that remote-controls the TV.",
    },
    detail: [
      {
        vi: "TS Launcher TV thay launcher mặc định của Android TV/TV box bằng giao diện gọn, nhanh, điều hướng tốt bằng D-pad: hàng app, widget, ảnh nền, sắp xếp lại app.",
        en: "TS Launcher TV replaces the stock Android TV / TV box launcher with a lean, fast, D-pad-friendly home: app rows, widgets, wallpapers, re-ordering.",
      },
      {
        vi: "TS Remote TV biến điện thoại thành remote: bàn phím, nhập giọng nói, khoá trẻ em, kết nối với TV trong cùng mạng Wi-Fi.",
        en: "TS Remote TV turns a phone into a remote: keyboard, voice input, parental lock, connecting to the TV over the same Wi-Fi network.",
      },
    ],
    role: { vi: "Một mình làm từ thiết kế, code tới phát hành.", en: "Solo — design, code and release." },
    features: [
      { vi: "Điều hướng D-pad / focus tối ưu cho TV", en: "D-pad focus navigation tuned for TV" },
      { vi: "Bàn phím & giọng nói từ điện thoại", en: "Keyboard & voice from the phone" },
      { vi: "Khoá trẻ em", en: "Parental lock" },
      { vi: "Tìm TV trong mạng LAN", en: "LAN discovery of the TV" },
    ],
    stack: ["Kotlin", "Compose for TV", "SwiftUI", "NSD / mDNS", "Sockets"],
    apps: [
      { name: "TS Launcher TV", note: { vi: "Launcher Android TV", en: "Android TV launcher" } },
      { name: "TS Remote TV", note: { vi: "Remote trên điện thoại", en: "Phone remote" } },
    ],
    links: [{ label: "TS Remote TV · App Store", href: "https://apps.apple.com/vn/app/ts-remote-tv-remote-control/id6833402754", kind: "appstore" }],
  },
  {
    slug: "lich-van-nien",
    kind: "personal",
    title: "Lịch Vạn Niên",
    sprite: "calendar",
    year: "2026 —",
    platforms: ["iOS", "Web"],
    short: {
      vi: "Lịch âm dương Việt Nam 1900–2100: ngày âm, can chi, tiết khí, giờ hoàng đạo, ngày lễ Tết và Lịch AI hỏi ngày tốt.",
      en: "Vietnamese lunar–solar calendar 1900–2100: lunar dates, can chi, solar terms, auspicious hours, holidays and an AI assistant for picking good days.",
    },
    detail: [
      {
        vi: "Xem âm lịch hôm nay, can chi, tiết khí, giờ hoàng đạo và các ngày lễ Tết từ năm 1900 tới 2100. Lịch AI giúp hỏi ngày tốt và lập kế hoạch.",
        en: "Today's lunar date, can chi, solar terms, auspicious hours and holidays from 1900 to 2100. The AI calendar helps you ask for good days and plan ahead.",
      },
      {
        vi: "App iOS có widget màn hình chính, nhắc việc chạy cả khi offline, thông báo ngày lễ; bản web lichvannienapp.com hỗ trợ 10 ngôn ngữ. Bản Google Play sắp ra mắt.",
        en: "The iOS app has home-screen widgets, offline reminders and holiday notifications; the web version at lichvannienapp.com speaks 10 languages. Google Play is coming soon.",
      },
    ],
    role: { vi: "Một mình làm app, web và backend.", en: "Solo — app, web and backend." },
    features: [
      { vi: "Âm lịch 1900–2100", en: "Lunar calendar 1900–2100" },
      { vi: "Giờ hoàng đạo, tiết khí", en: "Auspicious hours, solar terms" },
      { vi: "Lịch AI chọn ngày tốt", en: "AI good-day picker" },
      { vi: "Widget & nhắc việc offline", en: "Widgets & offline reminders" },
      { vi: "Đếm ngược ngày lễ", en: "Holiday countdowns" },
      { vi: "10 ngôn ngữ", en: "10 languages" },
    ],
    stack: ["iOS", "Widgets", "Next.js", "PostgreSQL", "Docker"],
    links: [
      { label: "lichvannienapp.com", href: "https://lichvannienapp.com", kind: "web" },
      { label: "App Store", href: "https://apps.apple.com/vn/app/l%E1%BB%8Bch-v%E1%BA%A1n-ni%C3%AAn-l%E1%BB%8Bch-%C3%A2m-d%C6%B0%C6%A1ng/id6837055820", kind: "appstore" },
    ],
  },
  {
    slug: "ts-podcast",
    kind: "personal",
    title: "TS Podcast",
    sprite: "mic",
    year: "2025 —",
    platforms: ["Android", "iOS"],
    short: {
      vi: "App nghe podcast & radio: khám phá show thịnh hành, đăng ký kênh, hẹn giờ tắt.",
      en: "A podcast & radio player: discover trending shows, subscribe, sleep timer.",
    },
    detail: [
      {
        vi: "Nghe podcast và radio với trình phát chạy nền, điều khiển từ màn hình khoá và tai nghe, nhớ vị trí đang nghe.",
        en: "Podcasts and radio with background playback, lock-screen and headset controls, and resume where you left off.",
      },
      {
        vi: "Có mục show thịnh hành, tìm kiếm, danh sách đăng ký và hẹn giờ tắt khi đi ngủ.",
        en: "Trending shows, search, a subscription list and a sleep timer.",
      },
    ],
    role: { vi: "Một mình làm cả Android và iOS.", en: "Solo, both Android and iOS." },
    features: [
      { vi: "Phát nền + MediaSession", en: "Background playback + MediaSession" },
      { vi: "Show thịnh hành & tìm kiếm", en: "Trending & search" },
      { vi: "Hẹn giờ tắt", en: "Sleep timer" },
      { vi: "Radio trực tuyến", en: "Online radio" },
    ],
    stack: ["Kotlin", "Compose", "Media3", "SwiftUI", "AVFoundation"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=tss.t.podcast", kind: "play" },
      { label: "App Store", href: "https://apps.apple.com/vn/app/tspodcast-podcast-player/id6834456695", kind: "appstore" },
    ],
  },
  {
    slug: "ts-iptv",
    kind: "personal",
    title: "TS IPTV",
    sprite: "antenna",
    year: "2024 —",
    platforms: ["Android TV", "Android", "iOS"],
    short: {
      vi: "Trình phát IPTV / M3U cho TV và điện thoại: kênh truyền hình, phim, lịch phát sóng EPG.",
      en: "An IPTV / M3U player for TV and phone: live channels, movies, EPG guide.",
    },
    detail: [
      {
        vi: "Nhập playlist M3U/M3U8, tự phân tích nhóm kênh, logo và lịch phát sóng (EPG). Có bản cho Android TV (điều khiển bằng remote) và cho điện thoại.",
        en: "Import M3U/M3U8 playlists; channel groups, logos and the EPG are parsed automatically. Ships for Android TV (remote-driven) and phones.",
      },
      {
        vi: "Phát lại mượt bằng Media3/ExoPlayer với HLS, gửi playlist từ điện thoại sang TV.",
        en: "Smooth HLS playback on Media3/ExoPlayer, and sending playlists from the phone to the TV.",
      },
    ],
    role: { vi: "Main developer, phát triển tiếp từ dự án iMedia.", en: "Main developer, evolved from the earlier iMedia project." },
    features: [
      { vi: "Playlist M3U / M3U8", en: "M3U / M3U8 playlists" },
      { vi: "Lịch phát sóng EPG", en: "EPG guide" },
      { vi: "Gửi playlist sang TV", en: "Send playlist to TV" },
      { vi: "Yêu thích & lịch sử", en: "Favourites & history" },
    ],
    stack: ["Kotlin", "Leanback / Compose TV", "Media3 / ExoPlayer", "SwiftUI", "Room"],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=tss.t.tsiptv", kind: "play" },
      { label: "App Store", href: "https://apps.apple.com/vn/app/ts-iptv-playlist-player-m3u/id6833576799", kind: "appstore" },
    ],
  },
  {
    slug: "ti-launcher-os",
    kind: "personal",
    title: "TI Launcher OS",
    sprite: "grid",
    year: "2025 —",
    platforms: ["Android"],
    short: {
      vi: "Launcher kiểu hệ điều hành cho Android: màn hình chính, ngăn kéo app, widget và theme riêng.",
      en: "An OS-style launcher for Android: home screen, app drawer, widgets and its own theming.",
    },
    detail: [
      {
        vi: "Một launcher hoàn chỉnh thay màn hình chính của máy: lưới app tuỳ chỉnh, ngăn kéo app có tìm kiếm, thư mục, widget và hệ theme.",
        en: "A full home-screen replacement: a customisable app grid, a searchable app drawer, folders, widgets and a theme system.",
      },
    ],
    role: { vi: "Một mình làm.", en: "Solo." },
    features: [
      { vi: "Lưới app & thư mục", en: "App grid & folders" },
      { vi: "Ngăn kéo app có tìm kiếm", en: "Searchable app drawer" },
      { vi: "Widget host", en: "Widget host" },
      { vi: "Theme & icon pack", en: "Themes & icon packs" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "AppWidgetHost", "DataStore"],
    links: [],
  },

  // ───────────── Company ─────────────
  {
    slug: "ahamove-user",
    kind: "company",
    title: "Ahamove User",
    sprite: "box",
    year: "07/2024 —",
    platforms: ["Android"],
    short: {
      vi: "App đặt giao hàng theo yêu cầu của Ahamove: giao siêu tốc, giao trong ngày, xe tải, theo dõi đơn realtime.",
      en: "Ahamove's on-demand delivery booking app: express, same-day, truck services, real-time order tracking.",
    },
    detail: [
      {
        vi: "Khách hàng và shop đặt đơn giao hàng, chọn dịch vụ, nhiều điểm giao, thanh toán và theo dõi tài xế trên bản đồ theo thời gian thực.",
        en: "Customers and shops book deliveries, pick a service, add multiple drop-offs, pay, and follow the driver on a live map.",
      },
    ],
    role: { vi: "Android developer trong team mobile.", en: "Android developer on the mobile team." },
    features: [
      { vi: "Đặt đơn nhiều điểm", en: "Multi-stop booking" },
      { vi: "Theo dõi tài xế realtime", en: "Live driver tracking" },
      { vi: "Ví & thanh toán", en: "Wallet & payments" },
      { vi: "Tài khoản doanh nghiệp", en: "Business accounts" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Coroutines / Flow", "Google Maps", "Multi-module"],
    links: [{ label: "ahamove.com", href: "https://www.ahamove.com", kind: "web" }],
  },
  {
    slug: "ahamove-driver",
    kind: "company",
    title: "Ahamove Driver",
    sprite: "bike",
    year: "07/2024 —",
    platforms: ["Android"],
    short: {
      vi: "App cho tài xế Ahamove: nhận đơn, dẫn đường, lấy & giao hàng, thu hộ COD, ví tài xế.",
      en: "The Ahamove driver app: accept orders, navigate, pick up & drop off, COD collection, driver wallet.",
    },
    detail: [
      {
        vi: "Tài xế nhận đơn được điều phối, đi theo lộ trình, xác nhận lấy/giao từng điểm, thu hộ COD và quản lý thu nhập trong ví.",
        en: "Drivers receive dispatched orders, follow the route, confirm each pickup and drop-off, collect COD and manage earnings in their wallet.",
      },
    ],
    role: { vi: "Android developer trong team mobile.", en: "Android developer on the mobile team." },
    features: [
      { vi: "Nhận đơn & điều phối", en: "Order dispatch & accept" },
      { vi: "Định vị nền", en: "Background location" },
      { vi: "Lấy / giao từng điểm", en: "Per-stop pickup / drop-off" },
      { vi: "Ví tài xế & COD", en: "Driver wallet & COD" },
    ],
    stack: ["Kotlin", "Jetpack Compose", "Location services", "Foreground services", "Maps"],
    links: [{ label: "ahamove.com", href: "https://www.ahamove.com", kind: "web" }],
  },
  {
    slug: "hotel-services",
    kind: "company",
    title: "Hotel Services",
    sprite: "key",
    year: "",
    platforms: ["Android"],
    image: "/projects/hotel.webp",
    short: {
      vi: "Nền tảng dịch vụ khách sạn: đặt phòng, check-in/out, thanh toán, mở khoá phòng bằng điện thoại; app quản trị minibar, phòng, kiosk.",
      en: "A hotel services platform: booking, check-in/out, payment, unlocking the room with the phone; admin apps for minibar, rooms and kiosks.",
    },
    detail: [
      {
        vi: "Gồm ba app. App khách: đặt phòng, check-in, check-out, mở khoá cửa, gọi đồ ăn/đồ uống, minibar và thanh toán.",
        en: "Three apps. The guest app: booking, check-in, check-out, door unlock, ordering food and drinks, minibar and payment.",
      },
      {
        vi: "App quản trị: quản lý minibar, phòng, kiosk và nhân viên dọn phòng.",
        en: "The admin app: managing minibar, rooms, kiosks and housekeeping staff.",
      },
    ],
    role: {
      vi: "Android developer app khách (team 2 người); main developer app quản trị (1 người).",
      en: "Android developer on the guest app (team of 2); main developer of the admin app (solo).",
    },
    features: [
      { vi: "Mở khoá phòng bằng điện thoại", en: "Mobile key / door unlock" },
      { vi: "Check-in / check-out", en: "Check-in / check-out" },
      { vi: "Gọi dịch vụ phòng", en: "Room service ordering" },
      { vi: "Quản lý minibar & kiosk", en: "Minibar & kiosk management" },
    ],
    stack: ["Kotlin", "Java", "Bluetooth", "REST", "MVVM"],
    links: [],
  },
  {
    slug: "assistant-for-car",
    kind: "company",
    title: "Assistant for Car",
    sprite: "car",
    year: "",
    platforms: ["Android Automotive"],
    short: {
      vi: "Trợ lý giọng nói cho ô tô kiểu Google Assistant: ra lệnh mở nhạc, dẫn đường, gọi điện.",
      en: "A Google-Assistant-style voice assistant for cars: voice commands for music, navigation, calls.",
    },
    detail: [
      {
        vi: "Chạy trên đầu Android của ô tô, nhận lệnh giọng nói để mở nhạc, dẫn đường và điều khiển các chức năng trên xe mà không cần chạm màn hình.",
        en: "Runs on the car's Android head unit and takes voice commands to play music, start navigation and control in-car functions hands-free.",
      },
    ],
    role: { vi: "Lead / main developer (team 2 người).", en: "Lead / main developer (team of 2)." },
    features: [
      { vi: "Nhận dạng giọng nói", en: "Speech recognition" },
      { vi: "Mở nhạc, dẫn đường", en: "Music & navigation intents" },
      { vi: "Đánh thức bằng từ khoá", en: "Wake word" },
    ],
    stack: ["Kotlin", "Speech", "Android services", "Intents"],
    links: [],
  },
  {
    slug: "payment-for-fuel",
    kind: "company",
    title: "Payment for Fuel",
    sprite: "fuel",
    year: "",
    platforms: ["Android", "iOS"],
    short: {
      vi: "Ví thanh toán tự động khi đổ xăng: thẻ NFC trên xe + NFC ở trạm xăng tự tính tiền và trừ ví.",
      en: "A wallet that pays automatically at the pump: an NFC tag on the vehicle and NFC at the station compute and charge the amount.",
    },
    detail: [
      {
        vi: "Sau khi đổ xăng cho ô tô/xe máy, trạm đọc thẻ NFC gắn trên xe, tự tính số tiền và trừ vào ví — người dùng không cần trả tiền mặt hay quẹt thẻ.",
        en: "After refuelling a car or motorbike, the station reads the NFC tag on the vehicle, computes the amount and charges the wallet — no cash, no card swipe.",
      },
    ],
    role: { vi: "Android lead (team 3 người) và iOS developer (Swift, UIKit).", en: "Android lead (team of 3) and iOS developer (Swift, UIKit)." },
    features: [
      { vi: "Thanh toán NFC tự động", en: "Automatic NFC payment" },
      { vi: "Ví & lịch sử giao dịch", en: "Wallet & transaction history" },
      { vi: "Quản lý phương tiện", en: "Vehicle management" },
    ],
    stack: ["Kotlin", "NFC", "Swift", "UIKit", "Payment SDK"],
    links: [],
  },
];

export default projects;

export const personalProjects = projects.filter((p) => p.kind === "personal");
export const companyProjects = projects.filter((p) => p.kind === "company");
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
