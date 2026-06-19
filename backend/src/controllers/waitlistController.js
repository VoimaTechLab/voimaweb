import { prisma } from "../database/prisma.js";
import { broadcastEmail, waitlistWelcomeEmail } from "../emails/templates.js";
import { logActivity } from "../services/activityService.js";
import { sendEmail } from "../services/emailService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

// PUBLIC
export const join = asyncHandler(async (req, res) => {
  const user = await prisma.waitlistUser.upsert({
    where: { email: req.body.email },
    update: { ...req.body },
    create: { ...req.body },
  });
  sendEmail({ to: user.email, subject: "Welcome to the Voima waitlist 🚀", html: waitlistWelcomeEmail(user) });
  logActivity({ type: "waitlist", text: `${user.fullName} joined the waitlist` });
  created(res, { id: user.id });
});

// ADMIN
export const listWaitlist = asyncHandler(async (req, res) => {
  const { search, role, page = 1, limit = 50 } = req.query;
  const where = {
    ...(role && role !== "all" && { role }),
    ...(search && {
      OR: [
        { fullName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
      ],
    }),
  };
  const [items, total] = await Promise.all([
    prisma.waitlistUser.findMany({
      where, orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit, take: Number(limit),
    }),
    prisma.waitlistUser.count({ where }),
  ]);
  ok(res, items, { total, page: Number(page), limit: Number(limit) });
});

export const deleteWaitlistUser = asyncHandler(async (req, res) => {
  await prisma.waitlistUser.delete({ where: { id: req.params.id } });
  ok(res, { id: req.params.id });
});

export const exportWaitlist = asyncHandler(async (_req, res) => {
  const users = await prisma.waitlistUser.findMany({ orderBy: { createdAt: "desc" } });
  const rows = [["fullName", "email", "phone", "location", "role", "createdAt"]];
  users.forEach((u) =>
    rows.push([u.fullName, u.email, u.phone || "", u.location || "", u.role || "", u.createdAt.toISOString()]));
  const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=waitlist.csv");
  res.send(csv);
});

export const waitlistCount = asyncHandler(async (_req, res) => {
  const total = await prisma.waitlistUser.count();
  ok(res, { total });
});

export const broadcastWaitlist = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;
  const users = await prisma.waitlistUser.findMany({ select: { email: true } });
  const html = broadcastEmail(message);
  const batchSize = 25;
  for (let i = 0; i < users.length; i += batchSize) {
    await Promise.allSettled(users.slice(i, i + batchSize).map((u) => sendEmail({ to: u.email, subject, html })));
  }
  logActivity({ type: "waitlist", text: `Broadcast "${subject}" → ${users.length} waitlist`, adminId: req.user.id });
  ok(res, { sent: users.length });
});