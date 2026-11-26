"use client";

import Link from "next/link";
import { getPost } from "../../data/posts";
import { useLanguage } from "../../context/LanguageContext";
import { formatDate } from "../../components/PostCard";

export default function PostView({ slug }: { slug: string }) {
  const { t, pick, language } = useLanguage();
  const post = getPost(slug)!;

  return (
    <article className="section page-top">
      <div className="container article">
        <Link href="/blog" className="back" data-reveal>← {t("sec_blog")}</Link>
        <header className="article-head" data-reveal>
          <div className="post-meta">
            <time dateTime={post.date}>{formatDate(post.date, language)}</time>
            <span>· {post.readMin} {t("min_read")}</span>
          </div>
          <h1>{pick(post.title)}</h1>
          <ul className="chips">{post.tags.map((x) => <li key={x}>#{x}</li>)}</ul>
        </header>
        <div className="prose glass px" data-reveal>
          {post.body.map((b, i) => {
            switch (b.type) {
              case "h":
                return <h2 key={i}>{pick(b.text)}</h2>;
              case "p":
                return <p key={i}>{pick(b.text)}</p>;
              case "list":
                return <ul key={i}>{b.items.map((it, j) => <li key={j}>{pick(it)}</li>)}</ul>;
              case "code":
                return (
                  <pre key={i} className="code">
                    <span className="code-lang">{b.lang}</span>
                    <code>{b.code}</code>
                  </pre>
                );
            }
          })}
        </div>
      </div>
    </article>
  );
}
