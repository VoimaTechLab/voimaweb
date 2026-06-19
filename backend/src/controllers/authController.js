import { env } from "../config/env.js";
import { prisma } from "../database/prisma.js";
import { logActivity } from "../services/activityService.js";
import { toPublicAdmin, verifyCredentials } from "../services/authService.js";
import {
    isRefreshTokenValid,
    issueTokens,
    revokeRefreshToken,
    rotateRefreshToken,
} from "../services/tokenService.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ok } from "../utils/response.js";
import { verifyRefreshToken } from "../utils/tokens.js";

const COOKIE = "voima_refresh";

const cookieOpts = () => ({
  httpOnly: true,
  secure: env.isProd,
  sameSite: env.isProd ? "none" : "lax",
  domain: env.cookieDomain,
  path: "/",
  maxAge: env.jwt.refreshExpiresDays * 24 * 60 * 60 * 1000,
});

const meta = (req) => ({ userAgent: req.headers["user-agent"], ip: req.ip });

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await verifyCredentials(email, password);

  const { accessToken, refreshToken } = await issueTokens(admin, meta(req));
  res.cookie(COOKIE, refreshToken, cookieOpts());

  await logActivity({ type: "auth", text: `${admin.name} logged in`, adminId: admin.id });

  ok(res, { admin: toPublicAdmin(admin), accessToken });
});

export const refresh = asyncHandler(async (req, res) => {
  const raw = req.cookies?.[COOKIE];
  if (!raw) throw ApiError.unauthorized("No refresh token");

  const record = await isRefreshTokenValid(raw);
  if (!record) throw ApiError.unauthorized("Invalid refresh token");

  let payload;
  try { payload = verifyRefreshToken(raw); }
  catch { throw ApiError.unauthorized("Expired refresh token"); }

  const admin = await prisma.admin.findUnique({ where: { id: payload.sub } });
  if (!admin || !admin.isActive) throw ApiError.unauthorized("Account inactive");

  const { accessToken, refreshToken } = await rotateRefreshToken(raw, admin, meta(req));
  res.cookie(COOKIE, refreshToken, cookieOpts());

  ok(res, { admin: toPublicAdmin(admin), accessToken });
});

export const me = asyncHandler(async (req, res) => {
  const admin = await prisma.admin.findUnique({ where: { id: req.user.id } });
  if (!admin) throw ApiError.unauthorized();
  ok(res, { admin: toPublicAdmin(admin) });
});

export const logout = asyncHandler(async (req, res) => {
  const raw = req.cookies?.[COOKIE];
  await revokeRefreshToken(raw);
  res.clearCookie(COOKIE, { ...cookieOpts(), maxAge: 0 });
  ok(res, { message: "Logged out" });
});