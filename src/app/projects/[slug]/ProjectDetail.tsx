"use client";

import Image from "next/image";
import Link from "next/link";
import projects, { getProject } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import PixelSprite from "../../components/PixelSprite";
import { AppleIcon, PlayIcon, WebIcon } from "../../components/StoreIcon";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t, pick } = useLanguage();
  const p = getProject(slug)!;
  const idx = projects.findIndex((x) => x.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="section page-top">
      <div className="container detail">
        <Link href="/projects" className="back" data-reveal>← {t("all_projects")}</Link>

        <header className="detail-hero glass px" data-reveal>
          <div className="detail-art">
            <PixelSprite name={p.sprite} size={140} className="bob" />
          </div>
          <div>
            <span className="section-index">{p.kind === "personal" ? t("personal") : t("company")}{p.year && ` · ${p.year}`}</span>
            <h1 className="detail-title">{p.title}</h1>
            <p className="detail-short">{pick(p.short)}</p>
            <ul className="chips">
              {p.platforms.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        </header>

        {p.image && (
          <div className="detail-shot glass px" data-reveal>
            <Image src={p.image} alt={p.title} width={1200} height={675} sizes="(max-width: 900px) 100vw, 900px" />
          </div>
        )}

        <div className="detail-grid">
          <div className="detail-main" data-reveal>
            {p.detail.map((d, i) => <p key={i}>{pick(d)}</p>)}

            {p.apps && (
              <>
                <h2 className="h-sub">{t("apps_in_suite")}</h2>
                <ul className="suite">
                  {p.apps.map((a) => (
                    <li key={a.name} className="glass px">
                      <strong>{a.name}</strong>
                      <span>{pick(a.note)}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="h-sub">{t("features")}</h2>
            <ul className="features">
              {p.features.map((f, i) => <li key={i}>{pick(f)}</li>)}
            </ul>
          </div>

          <aside className="detail-side" data-reveal>
            <div className="glass px side-box">
              <h3>{t("role")}</h3>
              <p>{pick(p.role)}</p>
            </div>
            <div className="glass px side-box">
              <h3>{t("stack")}</h3>
              <ul className="chips">{p.stack.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="glass px side-box">
              <h3>{t("links")}</h3>
              {p.links.length ? (
                <div className="side-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener" className="btn btn-ghost">
                      {l.kind === "play" ? <PlayIcon size={16} /> : l.kind === "appstore" ? <AppleIcon size={16} /> : <WebIcon size={16} />}
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="muted">{t("no_links")}</p>
              )}
            </div>
          </aside>
        </div>

        <Link href={`/projects/${next.slug}`} className="next glass px" data-reveal>
          <span className="muted">NEXT ▸</span>
          <strong>{next.title}</strong>
          <PixelSprite name={next.sprite} size={40} />
        </Link>
      </div>
    </article>
  );
}
