import { baseLayout } from "./layout.js";

const btn = (label) =>
  `<span style="display:inline-block;margin-top:8px;padding:10px 18px;background:#BC1D26;color:#fff;border-radius:10px;font-size:14px;font-weight:600;">${label}</span>`;

export const contactAdminEmail = (m) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">New Contact Message</h2>
    <p style="color:#475569;font-size:14px;margin:0 0 16px;">You received a new message via the website.</p>
    <table style="width:100%;font-size:14px;">
      <tr><td style="color:#64748b;padding:6px 0;width:90px;">Name</td><td><b>${m.name}</b></td></tr>
      <tr><td style="color:#64748b;padding:6px 0;">Email</td><td>${m.email}</td></tr>
      <tr><td style="color:#64748b;padding:6px 0;">Subject</td><td>${m.subject}</td></tr>
    </table>
    <div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:12px;font-size:14px;color:#334155;">${m.message}</div>
  `);

export const contactUserEmail = (m) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">We received your message 💚</h2>
    <p style="color:#475569;font-size:14px;">Hi ${m.name}, thanks for reaching out to Voima Initiative. Our team will get back to you shortly.</p>
    <p style="color:#475569;font-size:14px;margin-top:16px;">Your message:</p>
    <div style="padding:14px;background:#f8fafc;border-radius:12px;font-size:14px;color:#334155;">${m.message}</div>
  `);

export const newsletterWelcomeEmail = (email) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">You're on the list 🎉</h2>
    <p style="color:#475569;font-size:14px;">Thanks for subscribing with <b>${email}</b>. You'll now receive updates on our programs, stories, and impact.</p>
  `);

export const waitlistWelcomeEmail = (u) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">Welcome to the Voima waitlist, ${u.fullName}! 🚀</h2>
    <p style="color:#475569;font-size:14px;">We're thrilled to have you. We'll notify you the moment the Voima App is ready.</p>
    ${btn("You're #early")}
  `);

export const storySubmittedUserEmail = (s) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">Thank you for sharing your story 🙏</h2>
    <p style="color:#475569;font-size:14px;">Hi ${s.contributorName}, we've received your story. Our editorial team will review it and may reach out before publishing.</p>
  `);

export const storySubmittedAdminEmail = (s) =>
  baseLayout(`
    <h2 style="margin:0 0 8px;font-size:18px;">New Community Story Submitted</h2>
    <table style="width:100%;font-size:14px;">
      <tr><td style="color:#64748b;padding:6px 0;width:100px;">From</td><td><b>${s.contributorName}</b></td></tr>
      <tr><td style="color:#64748b;padding:6px 0;">Location</td><td>${s.location || "—"}</td></tr>
    </table>
    <div style="margin-top:16px;padding:16px;background:#f8fafc;border-radius:12px;font-size:14px;color:#334155;">${s.story}</div>
  `);