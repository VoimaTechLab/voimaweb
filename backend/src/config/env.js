import dotenv from "dotenv";
dotenv.config();

const required = (key) => {
  const v = process.env[key];
  if (!v && process.env.NODE_ENV === "production")
    throw new Error(`Missing required env var: ${key}`);
  return v;
};

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  port: Number(process.env.PORT || 5000),
  apiPrefix: process.env.API_PREFIX || "/api/v1",
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
  cookieDomain: process.env.COOKIE_DOMAIN || "localhost",
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET || "dev_access_secret",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "dev_refresh_secret",
    accessExpires: process.env.JWT_ACCESS_EXPIRES || "15m",
    refreshExpiresDays: Number(process.env.JWT_REFRESH_EXPIRES_DAYS || 7),
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
    folder: process.env.CLOUDINARY_FOLDER || "voima",
  },
  email: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.EMAIL_FROM || "Voima <no-reply@voima.org>",
    adminNotify: process.env.ADMIN_NOTIFY_EMAIL,
  },
};