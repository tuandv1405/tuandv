"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import PixelSprite from "./components/PixelSprite";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <section className="section page-top">
      <div className="container nf">
        <PixelSprite name="tv" size={120} className="bob" />
        <h1 className="nf-code">404</h1>
        <p>{t("not_found")}</p>
        <Link href="/" className="btn btn-primary">{t("back_home")}</Link>
      </div>
    </section>
  );
}
