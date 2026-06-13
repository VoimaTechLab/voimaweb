import { prisma } from "../database/prisma.js";

export const logActivity = async ({ type, text, adminId = null }) => {
  try {
    await prisma.activityLog.create({ data: { type, text, adminId } });
  } catch (e) {
    console.error("activity log failed:", e.message); // non-blocking
  }
};