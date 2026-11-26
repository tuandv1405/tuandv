export type L = { vi: string; en: string };

export const profile = {
  name: "Đỗ Văn Tuấn",
  handle: "tuandv",
  role: { vi: "Mobile Engineer", en: "Mobile Engineer" } as L,
  tagline: {
    vi: "Mình làm app Android, iOS, Compose Multiplatform và Flutter — từ app gọi xe, ví thanh toán cho tới launcher Android TV.",
    en: "I build Android, iOS, Compose Multiplatform and Flutter apps — from ride-hailing and payment wallets to Android TV launchers.",
  } as L,
  about: [
    {
      vi: "Mình là lập trình viên mobile, hiện làm Android developer tại Ahamove. Phần lớn thời gian mình làm Kotlin và Jetpack Compose, ngoài ra viết Swift/SwiftUI, Compose Multiplatform và Flutter khi dự án cần.",
      en: "I'm a mobile developer, currently an Android developer at Ahamove. Most of my time goes into Kotlin and Jetpack Compose; I also write Swift/SwiftUI, Compose Multiplatform and Flutter when a project calls for it.",
    },
    {
      vi: "Ngoài giờ mình phát hành app cá nhân dưới tên TS Studio: launcher và remote cho Android TV, trình phát IPTV, podcast. Trang này là portfolio và cũng là nơi mình ghi lại những gì học được.",
      en: "After hours I ship my own apps under the TS Studio name: an Android TV launcher and remote, an IPTV player, a podcast app. This site is my portfolio and the place I write down what I learn.",
    },
  ] as L[],
  links: {
    playStore: "https://play.google.com/store/apps/dev?id=6378699994924567589&hl=en",
    appStore: "https://apps.apple.com/vn/developer/do-van-tuan/id6833402756",
    github: "https://github.com/tuandv1405",
  },
};

export type SkillGroup = { id: string; title: L; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "android",
    title: { vi: "Android", en: "Android" },
    items: ["Kotlin", "Jetpack Compose", "Coroutines / Flow", "Hilt / Koin", "Room", "WorkManager", "Android TV / Leanback", "Media3 / ExoPlayer"],
  },
  {
    id: "ios",
    title: { vi: "iOS", en: "iOS" },
    items: ["Swift", "SwiftUI", "UIKit", "Combine", "async/await", "Core Data", "App Store Connect"],
  },
  {
    id: "kmp",
    title: { vi: "Compose Multiplatform", en: "Compose Multiplatform" },
    items: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "Koin", "expect / actual"],
  },
  {
    id: "flutter",
    title: { vi: "Flutter", en: "Flutter" },
    items: ["Dart", "Flutter", "Bloc / Riverpod", "Platform channels"],
  },
  {
    id: "arch",
    title: { vi: "Kiến trúc & công cụ", en: "Architecture & tools" },
    items: ["Clean Architecture", "MVVM / MVI", "Modularization", "Gradle", "CI/CD", "Firebase", "Unit / UI test", "Git"],
  },
  {
    id: "hw",
    title: { vi: "Phần cứng & kết nối", en: "Hardware & connectivity" },
    items: ["NFC", "Bluetooth / BLE", "Maps & Location", "Voice / Speech", "Payment SDK"],
  },
];

export const marquee = ["ANDROID", "IOS", "KOTLIN", "SWIFT", "COMPOSE", "KMP", "FLUTTER", "ANDROID TV", "SWIFTUI", "MEDIA3"];

export type Job = {
  id: string;
  from: string;
  to: L;
  title: L;
  company: L;
  url?: string;
  summary: L;
  bullets: L[];
  tags: string[];
};

export const jobs: Job[] = [
  {
    id: "ahamove",
    from: "07/2024",
    to: { vi: "Hiện tại", en: "Now" },
    title: { vi: "Android Developer", en: "Android Developer" },
    company: { vi: "Ahamove", en: "Ahamove" },
    url: "https://www.ahamove.com",
    summary: {
      vi: "Phát triển app Ahamove User (đặt giao hàng) và Ahamove Driver (tài xế) — hai app giao hàng theo yêu cầu với lượng người dùng lớn.",
      en: "Building Ahamove User (booking deliveries) and Ahamove Driver — two on-demand delivery apps with a large user base.",
    },
    bullets: [
      { vi: "Xây tính năng mới bằng Kotlin + Jetpack Compose trên codebase nhiều module.", en: "Ship new features with Kotlin + Jetpack Compose on a multi-module codebase." },
      { vi: "Luồng đặt đơn, theo dõi đơn realtime, bản đồ và định vị tài xế.", en: "Order booking, real-time order tracking, maps and driver location." },
      { vi: "Tối ưu hiệu năng, giảm crash, viết unit test và review code cho team.", en: "Performance work, crash reduction, unit tests and code review for the team." },
    ],
    tags: ["Kotlin", "Compose", "Coroutines", "Maps", "Multi-module"],
  },
  {
    id: "vng",
    from: "04/2022",
    to: { vi: "07/2024", en: "07/2024" },
    title: { vi: "Mobile Developer", en: "Mobile Developer" },
    company: { vi: "VNG (Zalo)", en: "VNG (Zalo)" },
    url: "https://vng.com.vn",
    summary: {
      vi: "Phát triển sản phẩm mobile trong hệ sinh thái Zalo tại VNG.",
      en: "Built mobile products in the Zalo ecosystem at VNG.",
    },
    bullets: [],
    tags: ["Android", "iOS", "Kotlin", "Swift"],
  },
  {
    id: "freelance",
    from: "11/2020",
    to: { vi: "03/2022", en: "03/2022" },
    title: { vi: "Mobile Leader (Android / iOS)", en: "Mobile Leader (Android / iOS)" },
    company: { vi: "Freelance", en: "Freelance" },
    summary: {
      vi: "Full-time, on-site tại Cầu Giấy, Hà Nội. Dẫn dắt phát triển sản phẩm mobile trên cả Android và iOS.",
      en: "Full-time, on-site in Cau Giay, Hanoi. Led mobile product development across Android and iOS.",
    },
    bullets: [],
    tags: ["Product Development", "Android", "iOS Development", "Team lead"],
  },
  {
    id: "roxwin",
    from: "10/2019",
    to: { vi: "02/2021", en: "02/2021" },
    title: { vi: "Android Developer", en: "Android Developer" },
    company: { vi: "Roxwin", en: "Roxwin" },
    summary: {
      vi: "Full-time, on-site tại Nam Từ Liêm, Hà Nội. Phát triển sản phẩm Android bằng Kotlin.",
      en: "Full-time, on-site in Nam Tu Liem, Hanoi. Android product development in Kotlin.",
    },
    bullets: [],
    tags: ["Kotlin", "Android", "Product Development"],
  },
  {
    id: "fpt",
    from: "07/2019",
    to: { vi: "10/2019", en: "10/2019" },
    title: { vi: "Android Intern", en: "Android Intern" },
    company: { vi: "FPT Software", en: "FPT Software" },
    url: "https://fptsoftware.com",
    summary: {
      vi: "Thực tập Android tại Nam Từ Liêm, Hà Nội: phát triển Android và test automation.",
      en: "Android internship in Nam Tu Liem, Hanoi: Android development and test automation.",
    },
    bullets: [],
    tags: ["Android", "Test Automation"],
  },
];
