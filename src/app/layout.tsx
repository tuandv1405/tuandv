import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AosInitializer from "./components/AosInitializer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "T.Studio - Software Solutions",
  description: "T.Studio is a leading software company that has been providing innovative solutions for businesses of all sizes since 2010.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* AOS (Animate On Scroll) Library CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head>
      <body className={`${plusJakartaSans.variable}`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />

        {/* AOS (Animate On Scroll) Library JS */}
        <AosInitializer />
      </body>
    </html>
  );
}
