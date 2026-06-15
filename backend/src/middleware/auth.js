import { prisma } from "../database/prisma.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/aysncHandler.js";
import { verifyAccessToken } from "../utils/tokens.js";

export const requireAuth = asyncHandler(async (req, _res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) throw ApiError.unauthorized("Missing access token");

  let payload;
  try {
    payload = verifyAccessToken(token);
  } catch {
    throw ApiError.unauthorized("Invalid or expired token");
  }

  const admin = await prisma.admin.findUnique({ where: { id: payload.sub } });
  if (!admin || !admin.isActive)
    throw ApiError.unauthorized("Account inactive or not found");

  req.user = { id: admin.id, role: admin.role, name: admin.name, email: admin.email };
  next();
});