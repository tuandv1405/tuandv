"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage, type UiKey } from "../context/LanguageContext";

const items: { href: string; key: UiKey }[] = [
  { href: "/#about", key: "nav_about" },
  { href: "/#skills", key: "nav_skills" },
  { href: "/#work", key: "nav_work" },
  { href: "/projects", key: "nav_projects" },
  { href: "/blog", key: "nav_blog" },
  { href: "/#contact", key: "nav_contact" },
];

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner glass">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden>▚</span>
          <span>TUANDV</span>
          <span className="caret" aria-hidden>_</span>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {items.map((it) => {
            const active = !it.href.includes("#") && pathname.startsWith(it.href);
            return (
              <Link key={it.href} href={it.href} className={active ? "active" : ""} onClick={() => setOpen(false)}>
                {t(it.key)}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <div className="lang" role="group" aria-label="Language">
            {(["vi", "en"] as const).map((l) => (
              <button key={l} className={language === l ? "on" : ""} onClick={() => setLanguage(l)} data-track="language_change" data-track-language={l} aria-pressed={language === l}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
