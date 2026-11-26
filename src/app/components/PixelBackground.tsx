"use client";

import { useEffect, useRef } from "react";

/** Deep-sea starfield of square "pixels" drifting upward, with slow parallax. */
export default function PixelBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const colors = ["#3a86ff", "#4cc9f0", "#a9d8ff", "#9b7bff", "#2ee6a8"];
    let w = 0, h = 0, dpr = 1, raf = 0;
    type P = { x: number; y: number; s: number; v: number; c: string; a: number; tw: number };
    let ps: P[] = [];

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(140, (w * h) / 11000));
      ps = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: [2, 2, 3, 4][Math.floor(Math.random() * 4)],
        v: 0.05 + Math.random() * 0.25,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: 0.25 + Math.random() * 0.6,
        tw: Math.random() * Math.PI * 2,
      }));
    };

    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(50, now - last) / 16.67;
      last = now;
      const scroll = window.scrollY;
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        if (!reduce) {
          p.y -= p.v * dt;
          p.tw += 0.03 * dt;
          if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        }
        // bigger pixels sit "closer" → stronger parallax
        let y = (p.y - scroll * p.s * 0.04) % (h + 20);
        if (y < -10) y += h + 20;
        ctx.globalAlpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
        ctx.fillStyle = p.c;
        ctx.fillRect(Math.round(p.x), Math.round(y), p.s, p.s);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="bg" aria-hidden>
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-grid" />
      <canvas ref={ref} className="bg-canvas" />
      <div className="bg-scan" />
    </div>
  );
}
