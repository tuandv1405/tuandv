import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AosInitializer from "./components/AosInitializer";
import { LanguageProvider } from "./context/LanguageContext";

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
    <html lang="vi">
      <head>
        {/* AOS (Animate On Scroll) Library CSS */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />

          {/* AOS (Animate On Scroll) Library JS */}
          <AosInitializer />
        </LanguageProvider>
      </body>
    </html>
  );
}
