import type { ReactNode } from "react";

export default function Section({
  id, index, title, lead, children, className = "",
}: { id?: string; index: string; title: string; lead?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section-head" data-reveal>
          <span className="section-index">{index}</span>
          <h2 className="section-title">{title}</h2>
          {lead && <p className="section-lead">{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
