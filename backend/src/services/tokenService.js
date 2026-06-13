import { env } from "../config/env.js";
import { prisma } from "../database/prisma.js";
import { hashToken, signAccessToken, signRefreshToken } from "../utils/tokens.js";

export const issueTokens = async (admin, meta = {}) => {
  const accessToken = signAccessToken(admin);
  const refreshToken = signRefreshToken(admin);

  const expiresAt = new Date(
    Date.now() + env.jwt.refreshExpiresDays * 24 * 60 * 60 * 1000
  );

  await prisma.refreshToken.create({
    data: {
      tokenHash: hashToken(refreshToken),
      adminId: admin.id,
      expiresAt,
      userAgent: meta.userAgent,
      ip: meta.ip,
    },
  });

  return { accessToken, refreshToken };
};

// Rotate: revoke old, issue new
export const rotateRefreshToken = async (oldRaw, admin, meta = {}) => {
  await prisma.refreshToken.updateMany({
    where: { tokenHash: hashToken(oldRaw), revokedAt: null },
    data: { revokedAt: new Date() },
  });
  return issueTokens(admin, meta);
};

export const isRefreshTokenValid = async (raw) => {
  const record = await prisma.refreshToken.findUnique({
    where: { tokenHash: hashToken(raw) },
  });
  if (!record || record.revokedAt || record.expiresAt < new Date()) return null;
  return record;
};

export const revokeRefreshToken = async (raw) => {
  if (!raw) return;
  await prisma.refreshToken.updateMany({
    where: { tokenHash: hashToken(raw) },
    data: { revokedAt: new Date() },
  });
};