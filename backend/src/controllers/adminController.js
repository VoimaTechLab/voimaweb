import bcrypt from "bcryptjs";
import { prisma } from "../database/prisma.js";
import { logActivity } from "../services/activityService.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

const publicAdmin = (a) => ({
  id: a.id,
  name: a.name,
  email: a.email,
  role: a.role,
  isActive: a.isActive,
  lastLoginAt: a.lastLoginAt,
  createdAt: a.createdAt,
});

export const listAdmins = asyncHandler(async (_req, res) => {
  const admins = await prisma.admin.findMany({ orderBy: { createdAt: "desc" } });
  ok(res, admins.map(publicAdmin));
});

export const createAdmin = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  const exists = await prisma.admin.findUnique({ where: { email } });
  if (exists) throw ApiError.conflict("An admin with this email exists");

  const passwordHash = await bcrypt.hash(password, 12);
  const admin = await prisma.admin.create({
    data: { name, email, passwordHash, role },
  });
  logActivity({
    type: "auth",
    text: `Admin "${admin.name}" created (${admin.role})`,
    adminId: req.user.id,
  });
  created(res, publicAdmin(admin));
});

export const updateAdmin = asyncHandler(async (req, res) => {
  const { name, role, isActive, password } = req.body;
  const data = {
    ...(name && { name }),
    ...(role && { role }),
    ...(typeof isActive === "boolean" && { isActive }),
    ...(password && { passwordHash: await bcrypt.hash(password, 12) }),
  };
  const admin = await prisma.admin.update({
    where: { id: req.params.id },
    data,
  });
  ok(res, publicAdmin(admin));
});

export const deactivateAdmin = asyncHandler(async (req, res) => {
  if (req.params.id === req.user.id)
    throw ApiError.badRequest("You cannot deactivate your own account");
  const admin = await prisma.admin.update({
    where: { id: req.params.id },
    data: { isActive: false },
  });
  // Revoke all refresh tokens for deactivated admin
  await prisma.refreshToken.updateMany({
    where: { adminId: admin.id, revokedAt: null },
    data: { revokedAt: new Date() },
  });
  ok(res, publicAdmin(admin));
});

// Self-service password change (any authenticated admin)
export const changeMyPassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const admin = await prisma.admin.findUnique({ where: { id: req.user.id } });
  const match = await bcrypt.compare(currentPassword, admin.passwordHash);
  if (!match) throw ApiError.badRequest("Current password is incorrect");

  await prisma.admin.update({
    where: { id: admin.id },
    data: { passwordHash: await bcrypt.hash(newPassword, 12) },
  });
  ok(res, { message: "Password updated" });
});