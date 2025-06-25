"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="language-switcher"
      aria-label="Switch language"
    >
      {language === 'vi' ? 'EN' : 'VI'}
    </button>
  );
};

export default LanguageSwitcher;
