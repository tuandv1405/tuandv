"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col footer-logo-col">
          <Link href="/" className="logo">T.Studio</Link>
          <p>&copy; {new Date().getFullYear()} T.Studio, Inc. <br /> {t('all_rights_reserved')}</p>
        </div>
        <div className="footer-col">
          <h4>{t('quick_links')}</h4>
          <ul>
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/about">{t('about')}</Link></li>
            <li><Link href="/services">{t('products')}</Link></li>
            <li><Link href="/contact">{t('contact')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t('resources')}</h4>
          <ul>
            <li><Link href="/blog">{t('blog')}</Link></li>
            <li><Link href="/faqs">{t('faqs')}</Link></li>
            <li><Link href="/careers">{t('careers')}</Link></li>
            <li><Link href="/support">{t('support')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{t('connect_with_us')}</h4>
          <ul>
            <li><Link href="https://facebook.com" target="_blank">Facebook</Link></li>
            <li><Link href="https://twitter.com" target="_blank">Twitter</Link></li>
            <li><Link href="https://linkedin.com" target="_blank">LinkedIn</Link></li>
            <li><Link href="https://instagram.com" target="_blank">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
