import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

(async () => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.argv[2] || process.env.ADMIN_NOTIFY_EMAIL,
      subject: "Voima Resend test",
      html: "<b>Resend is configured correctly.</b>",
    });

    if (error) throw error;
    console.log("✅ Sent:", data.id);
  } catch (e) {
    console.error("❌ Resend error:", e.message);
  }
})();