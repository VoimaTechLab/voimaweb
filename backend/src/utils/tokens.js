import crypto from "crypto";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export const signAccessToken = (admin) =>
  jwt.sign(
    { sub: admin.id, role: admin.role, name: admin.name, email: admin.email },
    env.jwt.accessSecret,
    { expiresIn: env.jwt.accessExpires }
  );

export const signRefreshToken = (admin) =>
  jwt.sign({ sub: admin.id }, env.jwt.refreshSecret, {
    expiresIn: `${env.jwt.refreshExpiresDays}d`,
  });

export const verifyAccessToken = (t) => jwt.verify(t, env.jwt.accessSecret);
export const verifyRefreshToken = (t) => jwt.verify(t, env.jwt.refreshSecret);

// Hash refresh tokens before DB storage (never store raw)
export const hashToken = (t) =>
  crypto.createHash("sha256").update(t).digest("hex");