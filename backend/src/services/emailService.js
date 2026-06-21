import nodemailer from "nodemailer";
import { env } from "../config/env.js";

let transporter;
const getTransporter = () => {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    secure: env.email.secure,
    auth: env.email.user ? { user: env.email.user, pass: env.email.pass } : undefined,
  });
  return transporter;
};

// Single transactional email
export const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!env.email.host) {
      console.log(`[email skipped: no SMTP] → ${to} :: ${subject}`);
      return;
    }
    await getTransporter().sendMail({ from: env.email.from, to, subject, html });
  } catch (e) {
    console.error("email failed:", e.message);
  }
};

// Bulk broadcast (BCC in batches of 50)
export const sendBulk = async ({ recipients, subject, html }) => {
  if (!env.email.host) {
    console.log(`[bulk skipped: no SMTP] ${recipients.length} recipients`);
    return { sent: 0 };
  }
  const t = getTransporter();
  const size = 50;
  let sent = 0;
  for (let i = 0; i < recipients.length; i += size) {
    const chunk = recipients.slice(i, i + size);
    try {
      await t.sendMail({ from: env.email.from, to: env.email.from, bcc: chunk, subject, html });
      sent += chunk.length;
    } catch (e) {
      console.error("bulk chunk failed:", e.message);
    }
  }
  return { sent };
};