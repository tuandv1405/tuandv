"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AosInitializer() {
  const pathname = usePathname();

  // Reinitialize AOS when the route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        // For Next.js Image components, we need to ensure they're visible
        // This will trigger a re-render of any images that might be in a loading state
        const nextImages = document.querySelectorAll('[data-nimg]');
        nextImages.forEach(img => {
          // Force a reflow/repaint of the image
          if (img instanceof HTMLElement) {
            const display = img.style.display;
            img.style.display = 'none';
            // Force a reflow
            void img.offsetHeight;
            img.style.display = display;
          }
        });

        // Refresh AOS animations
        if (window.AOS) {
          // First, initialize any new elements that might not have been initialized
          window.AOS.init({
            duration: 800,
            once: false,
            offset: 100,
          });

          // Then do a hard refresh to ensure all animations work
          window.AOS.refreshHard();
        }
      }, 200); // Increased timeout to ensure page is fully loaded
    }
  }, [pathname]);

  return (
    <>
      <Script 
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize AOS
          window.AOS.init({
            duration: 800,  // Animation duration in milliseconds
            once: false,    // Changed to false to allow animations to occur again after scrolling back up
            offset: 100,    // Offset (in px) from the original trigger point
          });
        }}
      />
    </>
  );
}
