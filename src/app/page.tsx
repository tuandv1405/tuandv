"use client";

import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import { jobs, marquee, profile, skillGroups } from "./data/profile";
import projects from "./data/projects";
import posts from "./data/posts";
import PixelSprite from "./components/PixelSprite";
import Section from "./components/Section";
import Typer from "./components/Typer";
import ProjectGrid from "./components/ProjectGrid";
import PostCard from "./components/PostCard";
import ContactForm from "./components/ContactForm";
import { AppleIcon, PlayIcon } from "./components/StoreIcon";
import { skillSprite } from "./components/sprites";

const ROLES = ["Android", "iOS", "Compose Multiplatform", "Flutter", "Android TV"];
const APPS_ON_STORES = 4; // TS IPTV, TS Podcast, TS Remote TV, Lịch Vạn Niên

export default function Home() {
  const { t, pick, language } = useLanguage();

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="badge" data-reveal>
              <span className="dot" /> {t("available")}
            </p>
            <p className="hero-hello" data-reveal>{t("hello")}</p>
            <h1 className="hero-name" data-reveal data-text={profile.name}>
              {profile.name}
            </h1>
            <p className="hero-role" data-reveal>
              <span className="prompt">&gt;</span> {pick(profile.role)} · <Typer words={ROLES} />
            </p>
            <p className="hero-tagline" data-reveal>{pick(profile.tagline)}</p>
            <div className="hero-cta" data-reveal>
              <Link href="/#projects" className="btn btn-primary">
                {t("cta_projects")}
              </Link>
              <Link href={profile.links.playStore} target="_blank" rel="noopener" className="btn btn-ghost">
                <PlayIcon size={16} /> Google Play
              </Link>
              <Link href={profile.links.appStore} target="_blank" rel="noopener" className="btn btn-ghost">
                <AppleIcon size={16} /> App Store
              </Link>
            </div>
            <dl className="stats" data-reveal>
              <div>
                <dt>{projects.length}</dt>
                <dd>{t("stat_projects")}</dd>
              </div>
              <div>
                <dt>{APPS_ON_STORES}</dt>
                <dd>{t("stat_apps")}</dd>
              </div>
              <div>
                <dt>{new Date().getFullYear() - 2019}+</dt>
                <dd>{t("stat_years")}</dd>
              </div>
            </dl>
          </div>

          <div className="hero-art" data-reveal>
            <div className="console glass px">
              <div className="console-bar">
                <i /><i /><i />
                <span>player_1.kt</span>
              </div>
              <div className="console-screen">
                <PixelSprite name="avatar" size={180} className="avatar" title={profile.name} />
                <p className="blink">{t("press_start")}</p>
              </div>
              <div className="console-hp">
                <span>LV.99</span>
                <div className="hp"><i style={{ width: "86%" }} /></div>
                <span>MOBILE</span>
              </div>
            </div>
            <PixelSprite name="tv" size={64} className="float f1" />
            <PixelSprite name="mic" size={46} className="float f2" />
            <PixelSprite name="antenna" size={52} className="float f3" />
            <PixelSprite name="grid" size={48} className="float f4" />
          </div>
        </div>
        <a href="#about" className="scroll-hint" aria-label="Scroll">
          <span />
        </a>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>
              {m} <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <Section id="about" index="01" title={t("sec_about")}>
        <div className="about-grid">
          <div className="about-text" data-reveal>
            {profile.about.map((p, i) => (
              <p key={i}>{pick(p)}</p>
            ))}
          </div>
          <pre className="terminal glass px" data-reveal>
            <code>
              <span className="c-dim">$ cat player.json</span>
              {"\n{\n"}
              {`  "name": "${profile.name}",\n`}
              {`  "role": "Android Developer @ Ahamove",\n`}
              {`  "since": "2019",\n`}
              {`  "platforms": ["Android", "iOS", "KMP", "Flutter"],\n`}
              {`  "side_quest": "TS Studio apps",\n`}
              {`  "status": "${language === "vi" ? "đang build" : "building"}"\n`}
              {"}"}
              {"\n"}
              <span className="c-dim">$ </span>
              <span className="caret">▌</span>
            </code>
          </pre>
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills" index="02" title={t("sec_skills")} lead={t("skills_lead")}>
        <div className="skills">
          {skillGroups.map((g, i) => (
            <article key={g.id} className="skill glass px" data-reveal style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <div className="skill-head">
                <PixelSprite name={skillSprite[g.id]} size={34} />
                <h3>{pick(g.title)}</h3>
              </div>
              <ul className="chips">
                {g.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ── WORK ── */}
      <Section id="work" index="03" title={t("sec_work")}>
        <ol className="timeline">
          {jobs.map((j) => (
            <li key={j.id} className="tl-item" data-reveal>
              <span className="tl-node" aria-hidden />
              <div className="tl-card glass px">
                <div className="tl-when">
                  {j.from} → {pick(j.to)}
                </div>
                <h3>
                  {pick(j.title)}{" "}
                  <span className="at">
                    @ {j.url ? <a href={j.url} target="_blank" rel="noopener">{pick(j.company)}</a> : pick(j.company)}
                  </span>
                </h3>
                <p>{pick(j.summary)}</p>
                {j.bullets.length > 0 && (
                  <ul className="bullets">
                    {j.bullets.map((b, i) => (
                      <li key={i}>{pick(b)}</li>
                    ))}
                  </ul>
                )}
                <ul className="chips">
                  {j.tags.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects" index="04" title={t("sec_projects")} lead={t("projects_lead")}>
        <ProjectGrid />
      </Section>

      {/* ── STORES ── */}
      <Section id="stores" index="05" title={t("sec_stores")} lead={t("stores_lead")}>
        <div className="stores">
          <a href={profile.links.playStore} target="_blank" rel="noopener" className="store glass px" data-reveal>
            <PlayIcon size={48} />
            <div>
              <strong>{t("play_store")}</strong>
              <span>{t("play_sub")}</span>
              <em>TS IPTV · TS Podcast</em>
            </div>
            <span className="store-go">{t("open_store")} ↗</span>
          </a>
          <a href={profile.links.appStore} target="_blank" rel="noopener" className="store glass px" data-reveal style={{ transitionDelay: "80ms" }}>
            <AppleIcon size={48} />
            <div>
              <strong>{t("app_store")}</strong>
              <span>{t("app_store_sub")}</span>
              <em>TS Remote TV · TS IPTV · TS Podcast · Lịch Vạn Niên</em>
            </div>
            <span className="store-go">{t("open_store")} ↗</span>
          </a>
        </div>
      </Section>

      {/* ── BLOG ── */}
      <Section id="blog" index="06" title={t("sec_blog")} lead={t("blog_lead")}>
        <div className="posts">
          {posts.slice(0, 3).map((p, i) => (
            <PostCard key={p.slug} post={p} delay={i * 80} />
          ))}
        </div>
        <div className="center" data-reveal>
          <Link href="/blog" className="btn btn-ghost">
            {t("all_posts")} →
          </Link>
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" index="07" title={t("sec_contact")}>
        <div className="contact glass px" data-reveal>
          <div className="contact-intro">
            <PixelSprite name="avatar" size={72} className="bob" />
            <h3>{t("contact_title")}</h3>
            <p>{t("contact_lead")}</p>
            <div className="contact-links">
              <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noopener">
                GitHub
              </a>
              <a className="btn btn-ghost" href={profile.links.playStore} target="_blank" rel="noopener">
                <PlayIcon size={16} /> Play
              </a>
              <a className="btn btn-ghost" href={profile.links.appStore} target="_blank" rel="noopener">
                <AppleIcon size={16} /> App Store
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
