"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    // Header
    'about': 'Giới thiệu',
    'services': 'Dịch vụ',
    'experience': 'Kinh nghiệm',
    'contact': 'Liên hệ',
    'learn_more': 'Tìm hiểu thêm',

    // Home page
    'about_tstudio': 'Về T.Studio',
    'about_description': 'T.Studio là công ty phần mềm hàng đầu cung cấp các giải pháp sáng tạo cho doanh nghiệp thuộc mọi quy mô từ năm 2010.',
    'explore_our_work': 'Khám phá dự án',
    'meet_the_team': 'Gặp đội ngũ',
    'our_expertise': 'Chuyên môn',
    'our_approach': 'Phương pháp',
    'get_in_touch': 'Liên lạc',
    'innovative_software': 'Giải pháp phần mềm sáng tạo cho doanh nghiệp của bạn',
    'innovative_description': 'Tại T.Studio, chúng tôi hiểu rằng mỗi doanh nghiệp đều độc đáo. Đội ngũ chuyên gia của chúng tôi làm việc chặt chẽ với bạn để hiểu các vấn đề và phát triển phần mềm tùy chỉnh giúp hợp lý hóa hoạt động, tăng năng suất và thúc đẩy tăng trưởng.',
    'get_a_demo': 'Nhận bản demo',
    'experience_power': 'Trải nghiệm sức mạnh của phần mềm T.Studio',
    'customization': 'Tùy chỉnh',
    'customization_desc': 'Giải pháp được thiết kế riêng cho nhu cầu và thách thức kinh doanh độc đáo của bạn.',
    'performance': 'Hiệu suất',
    'performance_desc': 'Giải pháp phần mềm hiệu suất cao giúp doanh nghiệp của bạn hoạt động hiệu quả hơn.',
    'security': 'Bảo mật',
    'security_desc': 'Các biện pháp bảo mật mạnh mẽ để bảo vệ dữ liệu của bạn và đảm bảo tuân thủ các tiêu chuẩn ngành.',
    'connect_with_tstudio': 'Kết nối với T.Studio',
    'connect_description': 'Sẵn sàng bắt đầu một dự án hoặc chỉ muốn chào hỏi? Chúng tôi rất muốn nghe từ bạn.',
    'call_us': 'Gọi cho chúng tôi',
    'follow_us': 'Theo dõi chúng tôi',
    'email_us': 'Gửi email cho chúng tôi',
    'visit_us': 'Ghé thăm chúng tôi',
    'contact_us': 'Liên hệ với chúng tôi',
    'stay_connected': 'Giữ liên lạc',

    // Footer
    'all_rights_reserved': 'Đã đăng ký Bản quyền.',
    'quick_links': 'Liên kết nhanh',
    'home': 'Trang chủ',
    'products': 'Sản phẩm',
    'resources': 'Tài nguyên',
    'blog': 'Blog',
    'faqs': 'Câu hỏi thường gặp',
    'careers': 'Tuyển dụng',
    'support': 'Hỗ trợ',
    'connect_with_us': 'Kết nối với chúng tôi'
  },
  en: {
    // Header
    'about': 'About',
    'services': 'Services',
    'experience': 'Experience',
    'contact': 'Contact',
    'learn_more': 'Learn More',

    // Home page
    'about_tstudio': 'About T.Studio',
    'about_description': 'T.Studio is a leading software company that has been providing innovative solutions for businesses of all sizes since 2010.',
    'explore_our_work': 'Explore Our Work',
    'meet_the_team': 'Meet The Team',
    'our_expertise': 'Our Expertise',
    'our_approach': 'Our Approach',
    'get_in_touch': 'Get in Touch',
    'innovative_software': 'Innovative Software Solutions for Your Business',
    'innovative_description': 'At T.Studio, we understand that every business is unique. Our team of experts works closely with you to understand your pain points and develop customized software that streamlines your operations, boosts productivity, and drives growth.',
    'get_a_demo': 'Get a Demo',
    'experience_power': 'Experience the Power of T.Studio Software',
    'customization': 'Customization',
    'customization_desc': 'Tailored solutions designed specifically for your unique business needs and challenges.',
    'performance': 'Performance',
    'performance_desc': 'High-performance software solutions that help your business operate more efficiently.',
    'security': 'Security',
    'security_desc': 'Robust security measures to protect your data and ensure compliance with industry standards.',
    'connect_with_tstudio': 'Connect with T.Studio',
    'connect_description': 'Ready to start a project or just want to say hi? We\'d love to hear from you.',
    'call_us': 'Call Us',
    'follow_us': 'Follow Us',
    'email_us': 'Email Us',
    'visit_us': 'Visit Us',
    'contact_us': 'Contact Us',
    'stay_connected': 'Stay Connected',

    // Footer
    'all_rights_reserved': 'All rights reserved.',
    'quick_links': 'Quick Links',
    'home': 'Home',
    'products': 'Products',
    'resources': 'Resources',
    'blog': 'Blog',
    'faqs': 'FAQs',
    'careers': 'Careers',
    'support': 'Support',
    'connect_with_us': 'Connect with Us'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi'); // Default to Vietnamese

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
