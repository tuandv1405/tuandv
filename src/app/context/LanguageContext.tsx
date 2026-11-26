"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import type { L } from "../data/profile";

export type Language = "vi" | "en";

const ui = {
  vi: {
    nav_about: "Giới thiệu",
    nav_skills: "Kỹ năng",
    nav_work: "Kinh nghiệm",
    nav_projects: "Dự án",
    nav_blog: "Blog",
    nav_contact: "Liên hệ",
    hello: "Xin chào, mình là",
    available: "Đang làm việc tại Ahamove",
    cta_projects: "Xem dự án",
    cta_contact: "Liên hệ",
    stat_projects: "dự án",
    stat_apps: "app trên store",
    stat_years: "năm kinh nghiệm",
    sec_about: "Giới thiệu",
    sec_skills: "Kỹ năng",
    skills_lead: "Native khi cần hiệu năng, multiplatform khi cần tốc độ.",
    sec_work: "Kinh nghiệm",
    sec_projects: "Dự án",
    projects_lead: "App cá nhân phát hành trên store và các sản phẩm đã làm cho công ty.",
    tab_all: "Tất cả",
    tab_personal: "Cá nhân",
    tab_company: "Công ty",
    personal: "Dự án cá nhân",
    company: "Dự án công ty",
    view_detail: "Chi tiết",
    all_projects: "Tất cả dự án",
    sec_stores: "Trên store",
    stores_lead: "App cá nhân phát hành dưới tên T.Software Studio / Do Van Tuan.",
    play_store: "Google Play",
    play_sub: "T.Software Studio",
    app_store: "App Store",
    app_store_sub: "Do Van Tuan",
    open_store: "Mở trang nhà phát triển",
    sec_blog: "Blog",
    blog_lead: "Ghi chép về Android, iOS và Kotlin Multiplatform.",
    read_more: "Đọc tiếp",
    all_posts: "Tất cả bài viết",
    min_read: "phút đọc",
    sec_contact: "Liên hệ",
    contact_title: "Cùng làm một app?",
    contact_lead: "Mình nhận trao đổi về dự án mobile, Android TV và Kotlin Multiplatform.",
    role: "Vai trò",
    features: "Tính năng",
    stack: "Công nghệ",
    platforms: "Nền tảng",
    apps_in_suite: "Các app trong cụm",
    back: "Quay lại",
    back_home: "Về trang chủ",
    links: "Liên kết",
    no_links: "Dự án nội bộ / cho khách hàng — không có link công khai.",
    now: "Hiện tại",
    press_start: "NHẤN ĐỂ BẮT ĐẦU",
    not_found: "Không tìm thấy trang",
    form_name: "Tên của bạn",
    form_message: "Nội dung",
    form_send: "Gửi tin nhắn",
    form_sending: "Đang gửi…",
    form_sent: "Đã gửi! Mình vừa gửi email xác nhận vào hộp thư của bạn và sẽ phản hồi sớm.",
    form_again: "Gửi tin khác",
    form_note: "Bạn sẽ nhận được email xác nhận ngay sau khi gửi.",
    form_invalid: "Vui lòng nhập tên, email hợp lệ và nội dung ít nhất 10 ký tự.",
    form_rate: "Bạn gửi hơi nhiều — thử lại sau ít phút nhé.",
    form_error: "Chưa gửi được, bạn thử lại sau hoặc liên hệ qua GitHub nhé.",
    form_captcha: "Xác minh chống bot chưa qua — bạn đợi ô xác minh hiện dấu tích rồi gửi lại nhé.",
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_work: "Work",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_contact: "Contact",
    hello: "Hi, I'm",
    available: "Currently at Ahamove",
    cta_projects: "See projects",
    cta_contact: "Get in touch",
    stat_projects: "projects",
    stat_apps: "apps on the stores",
    stat_years: "years of experience",
    sec_about: "About",
    sec_skills: "Skills",
    skills_lead: "Native when performance matters, multiplatform when speed does.",
    sec_work: "Experience",
    sec_projects: "Projects",
    projects_lead: "Personal apps live on the stores, and products built for companies.",
    tab_all: "All",
    tab_personal: "Personal",
    tab_company: "Company",
    personal: "Personal projects",
    company: "Company projects",
    view_detail: "Details",
    all_projects: "All projects",
    sec_stores: "On the stores",
    stores_lead: "Personal apps published as T.Software Studio / Do Van Tuan.",
    play_store: "Google Play",
    play_sub: "T.Software Studio",
    app_store: "App Store",
    app_store_sub: "Do Van Tuan",
    open_store: "Open developer page",
    sec_blog: "Blog",
    blog_lead: "Notes on Android, iOS and Kotlin Multiplatform.",
    read_more: "Read",
    all_posts: "All posts",
    min_read: "min read",
    sec_contact: "Contact",
    contact_title: "Building an app?",
    contact_lead: "Happy to talk about mobile, Android TV and Kotlin Multiplatform projects.",
    role: "Role",
    features: "Features",
    stack: "Stack",
    platforms: "Platforms",
    apps_in_suite: "Apps in the suite",
    back: "Back",
    back_home: "Back home",
    links: "Links",
    no_links: "Internal / client project — no public link.",
    now: "Now",
    press_start: "PRESS START",
    not_found: "Page not found",
    form_name: "Your name",
    form_message: "Message",
    form_send: "Send message",
    form_sending: "Sending…",
    form_sent: "Sent! A confirmation email is on its way to your inbox — I'll reply soon.",
    form_again: "Send another",
    form_note: "You'll get a confirmation email right after sending.",
    form_invalid: "Please enter your name, a valid email and at least 10 characters.",
    form_rate: "That's a lot of messages — please try again in a few minutes.",
    form_error: "Couldn't send right now — please try again later or reach me on GitHub.",
    form_captcha: "The anti-bot check didn't pass — wait for the checkmark, then send again.",
  },
} as const;

export type UiKey = keyof (typeof ui)["vi"];

interface Ctx {
  language: Language;
  setLanguage: (l: Language) => void;
  t: (key: UiKey) => string;
  pick: (l: L) => string;
}

const LanguageContext = createContext<Ctx | undefined>(undefined);
const STORAGE_KEY = "tuandv.lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLang] = useState<Language>("vi");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "vi" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((l: Language) => {
    setLang(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((key: UiKey) => ui[language][key] ?? key, [language]);
  const pick = useCallback((l: L) => l[language], [language]);

  return <LanguageContext.Provider value={{ language, setLanguage, t, pick }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
