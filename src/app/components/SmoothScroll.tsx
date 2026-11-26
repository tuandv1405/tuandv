"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth scroll + scroll-driven CSS variables:
 *  --scroll    px scrolled (for parallax)
 *  --progress  0..1 page progress (for the progress bar)
 * Also reveals [data-reveal] elements as they enter the viewport.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const lenis = reduce ? null : new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -72 } });

    const onScroll = () => {
      const y = window.scrollY;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll", `${y}`);
      root.style.setProperty("--progress", `${Math.min(1, y / max)}`);
      root.classList.toggle("scrolled", y > 24);
    };

    let raf = 0;
    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    lenis?.on("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      lenis?.destroy();
    };
  }, []);

  // Reveal-on-scroll. A MutationObserver picks up elements added later
  // (route changes, filters, language switches).
  useEffect(() => {
    const reveal = (el: Element) => el.classList.add("in");
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              for (const e of entries) {
                if (e.isIntersecting) {
                  reveal(e.target);
                  io?.unobserve(e.target);
                }
              }
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
          )
        : null;
    const scan = () =>
      document.querySelectorAll("[data-reveal]:not(.in):not([data-watched])").forEach((el) => {
        el.setAttribute("data-watched", "");
        if (io) io.observe(el);
        else reveal(el);
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, []);

  return <div className="progress" aria-hidden />;
}
