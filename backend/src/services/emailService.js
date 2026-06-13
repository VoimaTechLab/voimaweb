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

// Fire-and-forget; never block the request on email
export const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!env.email.host) {
      console.log(`[email skipped: no SMTP] → ${to} :: ${subject}`);
      return;
    }
    await getTransporter().sendMail({ from: env.email.from, to, subject, html });
  } catch (e) {
    console.error("email send failed:", e.message);
  }
};