"use client";

import Link from "next/link";
import posts from "../data/posts";
import { useLanguage } from "../context/LanguageContext";
import PostCard from "../components/PostCard";

export default function BlogPage() {
  const { t } = useLanguage();
  return (
    <section className="section page-top">
      <div className="container">
        <Link href="/" className="back" data-reveal>← {t("back_home")}</Link>
        <header className="section-head" data-reveal>
          <span className="section-index">06</span>
          <h1 className="section-title">{t("sec_blog")}</h1>
          <p className="section-lead">{t("blog_lead")}</p>
        </header>
        <div className="posts">
          {posts.map((p, i) => <PostCard key={p.slug} post={p} delay={(i % 3) * 80} />)}
        </div>
      </div>
    </section>
  );
}
