import nodemailer from "nodemailer";

/**
 * SMTP settings come from the environment (server .env, never the repo):
 *   SMTP_HOST, SMTP_PORT (465 = TLS), SMTP_USER, SMTP_PASS
 *   CONTACT_FROM   sender address shown to visitors (defaults to SMTP_USER)
 *   CONTACT_TO     inbox that receives new messages (defaults to SMTP_USER)
 */
export function mailConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT || 465);
  return {
    transport: nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } }),
    from: process.env.CONTACT_FROM || user,
    to: process.env.CONTACT_TO || user,
    name: process.env.CONTACT_FROM_NAME || "Đỗ Văn Tuấn",
  };
}

export const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
