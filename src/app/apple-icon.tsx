import { ImageResponse } from "next/og";
import { SpriteImage } from "./components/spriteImage";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(<SpriteImage name="avatar" size={180} padding={0.14} frame={false} />, size);
}
