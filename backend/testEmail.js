import dns from "dns";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
dns.setDefaultResultOrder("ipv4first"); //  prefer IPv4 (fixes ENETUNREACH)

const t = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  family: 4,                 //  force IPv4
  connectionTimeout: 15000,
  tls: { rejectUnauthorized: false },
});

(async () => {
  console.log("Using:", { host: process.env.SMTP_HOST, port: process.env.SMTP_PORT, secure: process.env.SMTP_SECURE, user: process.env.SMTP_USER });
  try {
    await t.verify();
    console.log("✅ SMTP OK");
    const info = await t.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.argv[2] || process.env.ADMIN_NOTIFY_EMAIL,
      subject: "Voima SMTP test ✅",
      html: "<b>It works 🎉</b>",
    });
    console.log("✅ Sent:", info.messageId);
  } catch (e) {
    console.error("❌ SMTP error:", e.message);
  }
})();