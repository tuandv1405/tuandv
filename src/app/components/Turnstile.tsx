"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Public site key of the "tuandv.me contact form" widget. On other hosts (localhost) use
// Cloudflare's documented always-pass test key so the form can be exercised in development.
const SITE_KEY = "0x4AAAAAAGTuAOdV1nBRIZDJ";
const TEST_SITE_KEY = "1x00000000000000000000AA";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id?: string) => void;
  remove: (id?: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let loading: Promise<void> | null = null;
function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!loading)
    loading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        loading = null;
        reject(new Error("turnstile script failed"));
      };
      document.head.appendChild(s);
    });
  return loading;
}

export type TurnstileHandle = { reset: () => void };

const Turnstile = forwardRef<TurnstileHandle, { onToken: (t: string) => void; language: string }>(function Turnstile(
  { onToken, language },
  ref
) {
  const box = useRef<HTMLDivElement>(null);
  const id = useRef<string | undefined>(undefined);
  const cb = useRef(onToken);
  cb.current = onToken;

  useImperativeHandle(ref, () => ({ reset: () => window.turnstile?.reset(id.current) }), []);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !box.current || !window.turnstile) return;
        const prod = location.hostname === "tuandv.me";
        id.current = window.turnstile.render(box.current, {
          sitekey: prod ? SITE_KEY : TEST_SITE_KEY,
          theme: "dark",
          language: language === "vi" ? "vi" : "en",
          action: "contact",
          callback: (t: string) => cb.current(t),
          "expired-callback": () => cb.current(""),
          "error-callback": () => cb.current(""),
        });
      })
      .catch(() => cb.current(""));
    return () => {
      cancelled = true;
      if (id.current) window.turnstile?.remove(id.current);
      id.current = undefined;
    };
  }, [language]);

  return <div ref={box} className="turnstile" />;
});

export default Turnstile;
