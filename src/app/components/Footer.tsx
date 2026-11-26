"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { profile } from "../data/profile";
import PixelSprite from "./PixelSprite";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <PixelSprite name="avatar" size={28} />
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
        <div className="footer-links">
          <Link href={profile.links.playStore} target="_blank" rel="noopener">Google Play</Link>
          <Link href={profile.links.appStore} target="_blank" rel="noopener">App Store</Link>
          <Link href={profile.links.github} target="_blank" rel="noopener">GitHub</Link>
        </div>
        <p className="footer-note">
          {t("built_with")} <PixelSprite name="heart" size={12} />
        </p>
      </div>
    </footer>
  );
}
