"use client";

import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" className="logo">T.Studio</Link>
          <div className="nav-links">
            <Link href="/about">{t('about')}</Link>
            <Link href="/services">{t('services')}</Link>
            <Link href="/experience">{t('experience')}</Link>
            <Link href="/contact">{t('contact')}</Link>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <LanguageSwitcher />
            <Link href="/contact" className="btn">{t('learn_more')}</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
