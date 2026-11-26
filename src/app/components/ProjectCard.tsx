"use client";

import Link from "next/link";
import type { Project } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import PixelSprite from "./PixelSprite";

export default function ProjectCard({ p, delay = 0 }: { p: Project; delay?: number }) {
  const { t, pick } = useLanguage();
  return (
    <Link href={`/projects/${p.slug}`} className={`pcard glass px kind-${p.kind}`} data-reveal style={{ transitionDelay: `${delay}ms` }} data-track="select_project" data-track-item-id={p.slug} data-track-kind={p.kind}>
      <div className="pcard-art">
        <PixelSprite name={p.sprite} size={84} className="bob" />
        <span className="pcard-kind">{p.kind === "personal" ? t("tab_personal") : t("tab_company")}</span>
      </div>
      <div className="pcard-body">
        <h3>{p.title}</h3>
        <p>{pick(p.short)}</p>
        <ul className="chips">
          {p.platforms.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <span className="pcard-more">
        {t("view_detail")} <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
