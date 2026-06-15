import { env } from "../config/env.js";
import { prisma } from "../database/prisma.js";
import { contactAdminEmail, contactUserEmail } from "../emails/templates.js";
import { logActivity } from "../services/activityService.js";
import { sendEmail } from "../services/emailService.js";
import { asyncHandler } from "../utils/aysncHandler.js";
import { created, ok } from "../utils/response.js";

// PUBLIC
export const createMessage = asyncHandler(async (req, res) => {
  const msg = await prisma.message.create({ data: req.body });

  sendEmail({ to: env.email.adminNotify, subject: `New contact: ${msg.subject}`, html: contactAdminEmail(msg) });
  sendEmail({ to: msg.email, subject: "We received your message — Voima", html: contactUserEmail(msg) });
  logActivity({ type: "message", text: `New message from ${msg.name}` });

  created(res, { id: msg.id });
});

// ADMIN
export const listMessages = asyncHandler(async (req, res) => {
  const { search, status, page = 1, limit = 20 } = req.query;
  const where = {
    ...(status && status !== "all" && { status }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { subject: { contains: search, mode: "insensitive" } },
      ],
    }),
  };
  const [items, total] = await Promise.all([
    prisma.message.findMany({
      where, orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit, take: Number(limit),
    }),
    prisma.message.count({ where }),
  ]);
  ok(res, items, { total, page: Number(page), limit: Number(limit) });
});

export const updateMessage = asyncHandler(async (req, res) => {
  const item = await prisma.message.update({
    where: { id: req.params.id }, data: { status: req.body.status },
  });
  ok(res, item);
});

export const deleteMessage = asyncHandler(async (req, res) => {
  await prisma.message.delete({ where: { id: req.params.id } });
  ok(res, { id: req.params.id });
});