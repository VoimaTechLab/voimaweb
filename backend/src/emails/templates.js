import { baseLayout } from "./layout.js";

const styles = {
  title:
    "margin:0 0 10px;font-size:22px;line-height:1.25;font-weight:800;letter-spacing:-0.5px;color:#111827;",
  subtitle:
    "margin:0 0 20px;font-size:14px;line-height:1.7;color:#64748b;",
  text:
    "margin:0 0 14px;font-size:14px;line-height:1.7;color:#334155;",
  muted:
    "font-size:12px;line-height:1.6;color:#94a3b8;",
};

const card = (content) => `
  <div style="
    margin:20px 0;
    padding:18px;
    background:#fafafa;
    border:1px solid #e5e7eb;
    border-radius:12px;
  ">
    ${content}
  </div>
`;

const accentCard = (content) => `
  <div style="
    margin:20px 0;
    padding:18px;
    background:#fff;
    border:1px solid #e5e7eb;
    border-left:4px solid #BC1D26;
    border-radius:10px;
  ">
    ${content}
  </div>
`;

const btn = (label) => `
  <div style="margin-top:22px;">
    <span style="
      display:inline-block;
      padding:11px 18px;
      background:#BC1D26;
      color:#ffffff;
      border:2px solid #7E131A;
      border-radius:8px;
      font-size:13px;
      line-height:1;
      font-weight:800;
      letter-spacing:-0.1px;
    ">
      ${label}
    </span>
  </div>
`;

const field = (label, value) => `
  <tr>
    <td style="
      padding:7px 0;
      width:90px;
      vertical-align:top;
      color:#94a3b8;
      font-size:12px;
      font-weight:600;
    ">
      ${label}
    </td>
    <td style="
      padding:7px 0;
      vertical-align:top;
      color:#1f2937;
      font-size:13px;
      font-weight:600;
    ">
      ${value}
    </td>
  </tr>
`;

/*contact*/

export const contactAdminEmail = (m) =>
  baseLayout(`
    <h2 style="${styles.title}">New contact message</h2>

    <p style="${styles.subtitle}">
      A new message was submitted through the Voima website.
    </p>

    ${card(`
      <table style="width:100%;border-collapse:collapse;">
        ${field("Name", m.name)}
        ${field("Email", m.email)}
        ${field("Subject", m.subject)}
      </table>
    `)}

    ${accentCard(`
      <div style="
        margin-bottom:8px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
      ">
        Message
      </div>

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#334155;
      ">
        ${m.message}
      </div>
    `)}
  `);

export const contactUserEmail = (m) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Message received
    </div>

    <h2 style="${styles.title}">Thanks for reaching out.</h2>

    <p style="${styles.text}">
      Hi ${m.name},
    </p>

    <p style="${styles.text}">
      We’ve received your message and someone from the Voima Initiative
      team will get back to you shortly.
    </p>

    ${card(`
      <div style="
        margin-bottom:8px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
      ">
        Your message
      </div>

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#334155;
      ">
        ${m.message}
      </div>
    `)}

    <p style="${styles.muted}">
      Thanks for taking the time to connect with Voima.
    </p>
  `);

/*newsletter*/

export const newsletterWelcomeEmail = (email) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      You’re subscribed
    </div>

    <h2 style="${styles.title}">Welcome to Voima.</h2>

    <p style="${styles.text}">
      Thanks for subscribing with <strong>${email}</strong>.
    </p>

    <p style="${styles.text}">
      You’ll receive updates about our programs, stories, community work,
      and the progress we’re making.
    </p>

    ${accentCard(`
      <p style="
        margin:0;
        font-size:13px;
        line-height:1.6;
        color:#334155;
      ">
        You’re now part of the Voima community.
      </p>
    `)}
  `);

/*waitlist*/

export const waitlistWelcomeEmail = (u) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Voima App
    </div>

    <h2 style="${styles.title}">You’re on the waitlist.</h2>

    <p style="${styles.text}">
      Thanks for joining us, ${u.email}.
    </p>

    <p style="${styles.text}">
      We’ll let you know when the Voima App is ready. Until then,
      you’re officially part of what we’re building.
    </p>

    ${accentCard(`
      <div style="
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
        margin-bottom:5px;
      ">
        Status
      </div>

      <div style="
        font-size:15px;
        font-weight:800;
        color:#111827;
      ">
        You’re #early
      </div>
    `)}
  `);

/*community story*/

export const storySubmittedUserEmail = (s) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Story received
    </div>

    <h2 style="${styles.title}">Thank you for sharing your story.</h2>

    <p style="${styles.text}">
      Hi ${s.contributorName},
    </p>

    <p style="${styles.text}">
      We’ve received your story. Our editorial team will review it and
      may reach out if we need any additional information before publishing.
    </p>

    ${accentCard(`
      <p style="
        margin:0;
        font-size:13px;
        line-height:1.6;
        color:#334155;
      ">
        Thank you for helping make space for real experiences and stories
        within the Voima community.
      </p>
    `)}
  `);

export const storySubmittedAdminEmail = (s) =>
  baseLayout(`
    <h2 style="${styles.title}">New community story</h2>

    <p style="${styles.subtitle}">
      A new story has been submitted for editorial review.
    </p>

    ${card(`
      <table style="width:100%;border-collapse:collapse;">
        ${field("From", s.contributorName)}
        ${field("Location", s.location || "—")}
      </table>
    `)}

    ${accentCard(`
      <div style="
        margin-bottom:8px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
      ">
        Story
      </div>

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#334155;
      ">
        ${s.story}
      </div>
    `)}
  `);

/*broadcast email*/

export const broadcastEmail = ({ subject, message }) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Voima update
    </div>

    <h2 style="${styles.title}">${subject}</h2>

    <div>
      ${String(message)
        .split("\n")
        .filter(Boolean)
        .map(
          (p) => `
            <p style="
              margin:0 0 13px;
              color:#334155;
              font-size:14px;
              line-height:1.75;
            ">
              ${p}
            </p>
          `
        )
        .join("")}
    </div>

    <div style="
      margin-top:24px;
      padding-top:16px;
      border-top:1px solid #e5e7eb;
    ">
      <p style="${styles.muted}">
        You received this because you subscribed to Voima Initiative.
      </p>
    </div>
  `);

/*contact reply*/

export const contactReplyEmail = ({
  name,
  originalMessage,
  replyMessage,
}) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Voima Initiative
    </div>

    <h2 style="${styles.title}">A reply from our team</h2>

    <p style="${styles.text}">
      Hi ${name},
    </p>

    <div>
      ${String(replyMessage)
        .split("\n")
        .filter(Boolean)
        .map(
          (p) => `
            <p style="
              margin:0 0 12px;
              color:#334155;
              font-size:14px;
              line-height:1.75;
            ">
              ${p}
            </p>
          `
        )
        .join("")}
    </div>

    ${card(`
      <div style="
        margin-bottom:8px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
      ">
        Your original message
      </div>

      <blockquote style="
        margin:0;
        padding:0;
        font-size:13px;
        line-height:1.7;
        color:#64748b;
      ">
        ${originalMessage}
      </blockquote>
    `)}
  `);

/*volunteers*/

export const volunteerConfirmationEmail = (name) =>
  baseLayout(`
    <div style="
      display:inline-block;
      margin-bottom:16px;
      padding:5px 9px;
      background:#fff1f2;
      border:1px solid #fecdd3;
      border-radius:6px;
      color:#BC1D26;
      font-size:11px;
      font-weight:800;
      letter-spacing:.06em;
      text-transform:uppercase;
    ">
      Application received
    </div>

    <h2 style="${styles.title}">Thank you for volunteering.</h2>

    <p style="${styles.text}">
      Hi ${name},
    </p>

    <p style="${styles.text}">
      Thank you for submitting your volunteer application to Voima Initiative.
    </p>

    <p style="${styles.text}">
      We appreciate your willingness to support our mission of creating
      awareness and improving the lives of people living with sickle cell.
    </p>

    ${accentCard(`
      <p style="
        margin:0;
        font-size:13px;
        line-height:1.6;
        color:#334155;
      ">
        Our team will review your application and get back to you soon.
      </p>
    `)}

    <p style="${styles.muted}">
      — The Voima Initiative Team
    </p>
  `);

export const volunteerAdminEmail = (volunteer) =>
  baseLayout(`
    <h2 style="${styles.title}">New volunteer application</h2>

    <p style="${styles.subtitle}">
      A new volunteer application has been submitted through the website.
    </p>

    ${card(`
      <table style="width:100%;border-collapse:collapse;">
        ${field("Name", volunteer.fullName)}
        ${field("Email", volunteer.email)}
      </table>
    `)}

    ${accentCard(`
      <div style="
        margin-bottom:8px;
        font-size:11px;
        font-weight:800;
        letter-spacing:.08em;
        text-transform:uppercase;
        color:#94a3b8;
      ">
        Motivation
      </div>

      <div style="
        font-size:14px;
        line-height:1.7;
        color:#334155;
      ">
        ${volunteer.motivation}
      </div>
    `)}
  `);
