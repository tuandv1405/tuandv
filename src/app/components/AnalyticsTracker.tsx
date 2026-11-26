"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, track } from "@/lib/analytics";

const STORES: Record<string, string> = {
  "play.google.com": "google_play",
  "apps.apple.com": "app_store",
  "github.com": "github",
};

/**
 * Firebase Analytics: page_view per route, plus delegated click tracking —
 * store/outbound links automatically, and any element with data-track="event_name"
 * (extra params from data-track-* attributes).
 */
export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const start = () => initAnalytics();
    if ("requestIdleCallback" in window) (window as Window).requestIdleCallback(start, { timeout: 3000 });
    else setTimeout(start, 1500);

    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.("a,[data-track]");
      if (!el) return;
      const custom = el.getAttribute("data-track");
      if (custom) {
        const params: Record<string, string> = {};
        for (const { name, value } of Array.from(el.attributes))
          if (name.startsWith("data-track-")) params[name.slice(11).replace(/-/g, "_")] = value;
        track(custom, params);
      }
      if (el instanceof HTMLAnchorElement && el.host && el.host !== location.host) {
        const store = STORES[el.host];
        track(store ? "store_click" : "outbound_click", { link_url: el.href, link_domain: el.host, store, from_path: location.pathname });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  useEffect(() => {
    // Wait a tick so <title> reflects the new route.
    const id = setTimeout(
      () => track("page_view", { page_path: pathname, page_location: location.href, page_title: document.title }),
      50
    );
    return () => clearTimeout(id);
  }, [pathname]);

  return null;
}
