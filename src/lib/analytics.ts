"use client";

import type { Analytics } from "firebase/analytics";

// Public Firebase web config (project portfolio-4a138, web app "Portfolio"). Not a secret.
const firebaseConfig = {
  apiKey: "AIzaSyBx9MNyI5znDzvql_4Up3EDQ4MoJmHVot0",
  authDomain: "portfolio-4a138.firebaseapp.com",
  projectId: "portfolio-4a138",
  storageBucket: "portfolio-4a138.firebasestorage.app",
  messagingSenderId: "840763428013",
  appId: "1:840763428013:web:f5c81d630c5d34d546ca24",
  measurementId: "G-T07SEY8Y8F",
};

type Params = Record<string, string | number | boolean | undefined>;

let analytics: Analytics | null = null;
let starting: Promise<void> | null = null;
const queue: [string, Params?][] = [];

/** Loads Firebase lazily (off the critical path) and flushes events queued before it was ready. */
export function initAnalytics() {
  if (starting || typeof window === "undefined") return starting;
  starting = (async () => {
    const [{ initializeApp, getApps }, { initializeAnalytics, isSupported, logEvent }] = await Promise.all([
      import("firebase/app"),
      import("firebase/analytics"),
    ]);
    if (!(await isSupported())) return;
    const app = getApps()[0] ?? initializeApp(firebaseConfig);
    // page_view is sent manually on every route change (App Router navigations are client-side).
    analytics = initializeAnalytics(app, { config: { send_page_view: false } });
    for (const [name, params] of queue.splice(0)) logEvent(analytics, name, params);
  })().catch((e) => console.warn("[analytics] disabled:", e?.message));
  return starting;
}

export function track(name: string, params?: Params) {
  if (typeof window === "undefined") return;
  if (!analytics) {
    queue.push([name, params]);
    return;
  }
  import("firebase/analytics").then(({ logEvent }) => logEvent(analytics!, name, params));
}
