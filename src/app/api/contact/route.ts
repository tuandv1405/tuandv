import { NextResponse } from "next/server";
import { esc, mailConfig } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@<>()",;:]{1,64}@[^\s@<>()",;:]{1,190}\.[a-z]{2,24}$/i;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();
let warnedNoSecret = false;

/** Cloudflare Turnstile siteverify. Without TURNSTILE_SECRET the check is skipped (logged once). */
async function captchaOk(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) {
    if (!warnedNoSecret) console.warn("[contact] TURNSTILE_SECRET not set — captcha check skipped");
    warnedNoSecret = true;
    return true;
  }
  if (!token || token.length > 2048) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip !== "unknown") body.set("remoteip", ip);
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as { success?: boolean; action?: string; hostname?: string };
    return data.success === true && data.action === "contact" && data.hostname === "tuandv.me";
  } catch (e) {
    console.error("[contact] siteverify failed:", (e as Error).message);
    return false;
  }
}

function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  return recent.length > MAX_PER_WINDOW;
}

// Visitor-supplied text that ends up in the auto-reply: one line, no links, short.
const clean = (s: string, max: number) =>
  s.replace(/[\r\n\t]+/g, " ").replace(/https?:\/\/\S+|www\.\S+/gi, "").replace(/\s+/g, " ").trim().slice(0, max);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const name = clean(String(body.name ?? ""), 60);
  const email = String(body.email ?? "").trim().slice(0, 254);
  const message = String(body.message ?? "").trim().slice(0, 4000);
  const lang = body.lang === "en" ? "en" : "vi";
  const honeypot = String(body.website ?? "");
  const elapsed = Number(body.elapsed ?? 0);

  // Bots: silently accept so they learn nothing.
  if (honeypot || elapsed < 2500) return NextResponse.json({ ok: true });
  if (!name || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }

  const ip =
    req.headers.get("cf-connecting-ip") || req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!(await captchaOk(String(body.turnstileToken ?? ""), ip))) {
    return NextResponse.json({ error: "captcha" }, { status: 403 });
  }
  if (limited(`ip:${ip}`) || limited(`to:${email.toLowerCase()}`)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const mail = mailConfig();
  if (!mail) {
    console.error("[contact] SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASS)");
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const vi = lang === "vi";
  const replySubject = vi ? "Đã nhận được tin nhắn của bạn — tuandv.me" : "Got your message — tuandv.me";
  const replyText = vi
    ? `Chào ${name},\n\nCảm ơn bạn đã liên hệ qua tuandv.me. Mình đã nhận được tin nhắn và sẽ phản hồi sớm nhất có thể, thường trong 1–2 ngày làm việc.\n\nBạn có thể trả lời thẳng email này nếu muốn bổ sung thông tin.\n\n— ${mail.name}\nhttps://tuandv.me`
    : `Hi ${name},\n\nThanks for reaching out through tuandv.me. I've received your message and will get back to you as soon as I can, usually within 1–2 business days.\n\nFeel free to reply to this email if you'd like to add anything.\n\n— ${mail.name}\nhttps://tuandv.me`;
  const replyHtml = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;color:#0b1630">
${replyText
  .split("\n\n")
  .map((p) => `<p>${esc(p).replace(/\n/g, "<br>")}</p>`)
  .join("\n")}
</div>`;

  const notifyText = `${name} <${email}>\nIP: ${ip}\nLang: ${lang}\n\n${message}`;
  const notifyHtml = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6">
<p><b>${esc(name)}</b> &lt;${esc(email)}&gt;<br><small>IP ${esc(ip)} · ${lang}</small></p>
<pre style="white-space:pre-wrap;font-family:inherit;background:#f1f5ff;padding:12px;border-radius:6px">${esc(message)}</pre></div>`;

  try {
    // 1) to the owner first — the message must not be lost even if the auto-reply bounces
    await mail.transport.sendMail({
      from: { name: "tuandv.me", address: mail.from },
      to: mail.to,
      replyTo: { name, address: email },
      subject: `[tuandv.me] Liên hệ mới từ ${name}`,
      text: notifyText,
      html: notifyHtml,
    });
    // 2) confirmation to the visitor
    await mail.transport.sendMail({
      from: { name: mail.name, address: mail.from },
      to: { name, address: email },
      replyTo: mail.to,
      subject: replySubject,
      text: replyText,
      html: replyHtml,
    });
  } catch (err) {
    console.error("[contact] send failed:", (err as Error).message);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
