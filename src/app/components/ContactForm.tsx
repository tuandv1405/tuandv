"use client";

import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { track } from "@/lib/analytics";

type State = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const started = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setState("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, lang: language, elapsed: Date.now() - started.current }),
      });
      if (res.ok) {
        track("generate_lead", { method: "contact_form", language });
        setState("sent");
        form.reset();
        return;
      }
      const { error: code } = await res.json().catch(() => ({ error: "" }));
      track("contact_error", { reason: code || String(res.status) });
      setError(code === "invalid" ? t("form_invalid") : code === "rate_limited" ? t("form_rate") : t("form_error"));
      setState("error");
    } catch {
      setError(t("form_error"));
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done" role="status">
        <span className="form-done-icon" aria-hidden>✔</span>
        <p>{t("form_sent")}</p>
        <button className="btn btn-ghost" onClick={() => setState("idle")}>{t("form_again")}</button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate={false}>
      <div className="cform-row">
        <label>
          <span>{t("form_name")}</span>
          <input name="name" required maxLength={60} autoComplete="name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required maxLength={254} autoComplete="email" />
        </label>
      </div>
      <label>
        <span>{t("form_message")}</span>
        <textarea name="message" required minLength={10} maxLength={4000} rows={5} />
      </label>
      {/* honeypot: hidden from people, filled by bots */}
      <label className="hp-field" aria-hidden>
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="cform-foot">
        <p className="muted">{t("form_note")}</p>
        <button className="btn btn-primary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? t("form_sending") : t("form_send")}
        </button>
      </div>
      {state === "error" && <p className="form-error" role="alert">{error}</p>}
    </form>
  );
}
