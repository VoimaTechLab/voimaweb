import bcrypt from "bcryptjs";
import { prisma } from "../database/prisma.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyCredentials = async (email, password) => {
  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin || !admin.isActive)
    throw ApiError.unauthorized("Invalid email or password");

  const match = await bcrypt.compare(password, admin.passwordHash);
  if (!match) throw ApiError.unauthorized("Invalid email or password");

  await prisma.admin.update({
    where: { id: admin.id },
    data: { lastLoginAt: new Date() },
  });

  return admin;
};

export const toPublicAdmin = (a) => ({
  id: a.id,
  name: a.name,
  email: a.email,
  role: a.role,
});