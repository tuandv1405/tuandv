import type { Metadata } from "next";
import { notFound } from "next/navigation";
import posts, { getPost } from "../../data/posts";
import PostView from "./PostView";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  return p ? { title: p.title.vi, description: p.excerpt.vi } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getPost(slug)) notFound();
  return <PostView slug={slug} />;
}
