import { Resend } from "resend";
import { env } from "../config/env.js";

const resend = env.email.resendApiKey
  ? new Resend(env.email.resendApiKey)
  : null;

export const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!resend) {
      console.warn(
        `[EMAIL SKIPPED] No Resend API key configured -> ${to} :: ${subject}`
      );
      return;
    }

    console.log(`📧 Sending email to ${to}`);

    const { data, error } = await resend.emails.send({
      from: env.email.from,
      to,
      subject,
      html,
    });

    if (error) throw error;

    console.log(
      `✅ Email sent to ${to} | Message ID: ${data.id}`
    );

    return data;
  } catch (error) {
    console.error("❌ EMAIL SEND FAILED");
    console.error({
      to,
      subject,
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      stack: error.stack,
    });

    throw error;
  }
};

export const sendBulk = async ({
  recipients,
  subject,
  html,
}) => {
  try {
    if (!resend) {
      console.warn(
        `[BULK EMAIL SKIPPED] No Resend API key configured (${recipients.length} recipients)`
      );
      return { sent: 0 };
    }

    const batchSize = 50;
    let sent = 0;

    for (let i = 0; i < recipients.length; i += batchSize) {
      const chunk = recipients.slice(i, i + batchSize);

      try {
        const { data, error } = await resend.emails.send({
          from: env.email.from,
          to: env.email.from,
          bcc: chunk,
          subject,
          html,
        });

        if (error) throw error;

        sent += chunk.length;

        console.log(
          `✅ Bulk batch sent (${chunk.length}) | Message ID: ${data.id}`
        );
      } catch (error) {
        console.error("❌ BULK EMAIL BATCH FAILED");
        console.error({
          batchStart: i,
          batchSize: chunk.length,
          message: error.message,
          code: error.code,
          response: error.response,
          responseCode: error.responseCode,
        });
      }
    }

    return { sent };
  } catch (error) {
    console.error("❌ BULK EMAIL FAILED");
    console.error(error);

    return { sent: 0 };
  }
};