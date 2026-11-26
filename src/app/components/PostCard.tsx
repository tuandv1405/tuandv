"use client";

import Link from "next/link";
import type { Post } from "../data/posts";
import { useLanguage } from "../context/LanguageContext";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Deterministic (no Intl) so server and browser render the same string. */
export function formatDate(iso: string, lang: string) {
  const [y, m, d] = iso.split("-");
  return lang === "vi" ? `${d}/${m}/${y}` : `${d} ${MONTHS[Number(m) - 1]} ${y}`;
}

export default function PostCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const { t, pick, language } = useLanguage();
  return (
    <Link href={`/blog/${post.slug}`} className="post glass px" data-reveal style={{ transitionDelay: `${delay}ms` }} data-track="select_post" data-track-item-id={post.slug}>
      <div className="post-meta">
        <time dateTime={post.date}>{formatDate(post.date, language)}</time>
        <span>· {post.readMin} {t("min_read")}</span>
      </div>
      <h3>{pick(post.title)}</h3>
      <p>{pick(post.excerpt)}</p>
      <div className="post-foot">
        <ul className="chips">
          {post.tags.map((x) => (
            <li key={x}>#{x}</li>
          ))}
        </ul>
        <span className="pcard-more">{t("read_more")} →</span>
      </div>
    </Link>
  );
}
