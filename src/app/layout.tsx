import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Silkscreen, VT323 } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import PixelBackground from "./components/PixelBackground";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { LanguageProvider } from "./context/LanguageContext";

const pixel = Silkscreen({ weight: ["400", "700"], subsets: ["latin"], variable: "--f-pixel", display: "swap" });
const vt = VT323({ weight: "400", subsets: ["latin", "vietnamese"], variable: "--f-vt", display: "swap" });
const body = Be_Vietnam_Pro({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin", "vietnamese"], variable: "--f-body", display: "swap" });
const mono = JetBrains_Mono({ weight: ["400", "500"], subsets: ["latin", "vietnamese"], variable: "--f-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Đỗ Văn Tuấn — Mobile Engineer", template: "%s · tuandv" },
  description:
    "Portfolio & blog của Đỗ Văn Tuấn — Android developer tại Ahamove. Android, iOS, Compose Multiplatform, Flutter. TS Launcher TV, TS Remote TV, TS IPTV, TS Podcast.",
  openGraph: {
    title: "Đỗ Văn Tuấn — Mobile Engineer",
    description: "Android · iOS · Compose Multiplatform · Flutter",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#03060e" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${pixel.variable} ${vt.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <LanguageProvider>
          <PixelBackground />
          <SmoothScroll />
          <AnalyticsTracker />
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
