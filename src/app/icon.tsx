import { ImageResponse } from "next/og";
import { SpriteImage } from "./components/spriteImage";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<SpriteImage name="avatar" size={64} padding={0.06} />, size);
}
