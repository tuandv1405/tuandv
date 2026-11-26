import { palette, sprites } from "./sprites";

type Props = {
  name: string;
  size?: number | string;
  className?: string;
  title?: string;
};

/** Renders a sprite as crisp SVG rects, merging same-colour runs per row. */
export default function PixelSprite({ name, size = 64, className, title }: Props) {
  const rows = sprites[name];
  if (!rows) return null;
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  const rects: React.ReactElement[] = [];

  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === ch) run++;
      const fill = palette[ch];
      if (fill) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={fill} />);
      x += run;
    }
  });

  return (
    <svg
      className={className}
      viewBox={`0 0 ${w} ${h}`}
      width={size}
      height={typeof size === "number" ? (size * h) / w : undefined}
      shapeRendering="crispEdges"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {rects}
    </svg>
  );
}
