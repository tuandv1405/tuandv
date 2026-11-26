"use client";

import { useState } from "react";
import projects, { type ProjectKind } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import ProjectCard from "./ProjectCard";

type Tab = "all" | ProjectKind;

export default function ProjectGrid({ limit }: { limit?: number }) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("all");
  const list = projects.filter((p) => tab === "all" || p.kind === tab);
  const shown = limit ? list.slice(0, limit) : list;

  return (
    <>
      <div className="tabs" role="tablist" data-reveal>
        {(["all", "personal", "company"] as Tab[]).map((k) => (
          <button key={k} role="tab" aria-selected={tab === k} className={tab === k ? "on" : ""} onClick={() => setTab(k)} data-track="project_filter" data-track-tab={k}>
            {t(k === "all" ? "tab_all" : k === "personal" ? "tab_personal" : "tab_company")}
            <span className="count">{k === "all" ? projects.length : projects.filter((p) => p.kind === k).length}</span>
          </button>
        ))}
      </div>
      <div className="pgrid">
        {shown.map((p, i) => (
          <ProjectCard key={`${tab}-${p.slug}`} p={p} delay={(i % 3) * 80} />
        ))}
      </div>
    </>
  );
}
