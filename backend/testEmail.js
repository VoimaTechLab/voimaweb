import dns from "dns";
import nodemailer from "nodemailer";
import { env } from "../config/env.js";

dns.setDefaultResultOrder("ipv4first");

let transporter;

const getTransporter = async () => {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    secure: env.email.secure,
    auth:
      env.email.user && env.email.pass
        ? {
            user: env.email.user,
            pass: env.email.pass,
          }
        : undefined,
    family: 4,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 30000,
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    await transporter.verify();
    console.log("✅ SMTP connection established");
  } catch (error) {
    console.error("❌ SMTP verification failed");
    console.error({
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
    });
  }

  return transporter;
};

export const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!env.email.host) {
      console.warn(
        `[EMAIL SKIPPED] No SMTP configured -> ${to} :: ${subject}`
      );
      return;
    }

    console.log(`📧 Sending email to ${to}`);

    const smtp = await getTransporter();

    const info = await smtp.sendMail({
      from: env.email.from,
      to,
      subject,
      html,
    });

    console.log(
      `✅ Email sent to ${to} | Message ID: ${info.messageId}`
    );

    return info;
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
    if (!env.email.host) {
      console.warn(
        `[BULK EMAIL SKIPPED] No SMTP configured (${recipients.length} recipients)`
      );
      return { sent: 0 };
    }

    const smtp = await getTransporter();

    const batchSize = 50;
    let sent = 0;

    for (let i = 0; i < recipients.length; i += batchSize) {
      const chunk = recipients.slice(i, i + batchSize);

      try {
        const info = await smtp.sendMail({
          from: env.email.from,
          to: env.email.from,
          bcc: chunk,
          subject,
          html,
        });

        sent += chunk.length;

        console.log(
          `✅ Bulk batch sent (${chunk.length}) | Message ID: ${info.messageId}`
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