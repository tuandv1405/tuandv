"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import ProjectGrid from "../components/ProjectGrid";

export default function ProjectsPage() {
  const { t } = useLanguage();
  return (
    <section className="section page-top">
      <div className="container">
        <Link href="/" className="back" data-reveal>← {t("back_home")}</Link>
        <header className="section-head" data-reveal>
          <span className="section-index">04</span>
          <h1 className="section-title">{t("all_projects")}</h1>
          <p className="section-lead">{t("projects_lead")}</p>
        </header>
        <ProjectGrid />
      </div>
    </section>
  );
}
