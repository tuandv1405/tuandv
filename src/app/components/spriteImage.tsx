import { palette, sprites } from "./sprites";

/** Renders a sprite as absolutely-positioned blocks for next/og ImageResponse (Satori has no SVG rect merging). */
export function SpriteImage({ name, size, bg = "#03060e", padding = 0.12, frame = true }: { name: string; size: number; bg?: string; padding?: number; frame?: boolean }) {
  const rows = sprites[name];
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  const inner = size * (1 - padding * 2);
  const px = Math.floor(inner / Math.max(w, h));
  const ox = Math.round((size - px * w) / 2);
  const oy = Math.round((size - px * h) / 2);
  const blocks: React.ReactElement[] = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run++;
      const fill = palette[ch];
      if (fill)
        blocks.push(
          <div key={`${x}-${y}`} style={{ position: "absolute", left: ox + x * px, top: oy + y * px, width: run * px, height: px, background: fill }} />
        );
      x += run;
    }
  });
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        position: "relative",
        background: `radial-gradient(circle at 50% 40%, #13306b 0%, ${bg} 75%)`,
        ...(frame ? { boxShadow: `inset 0 0 0 ${Math.max(1, Math.round(size / 32))}px #4cc9f0` } : {}),
      }}
    >
      {blocks}
    </div>
  );
}
