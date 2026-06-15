import { prisma } from "../database/prisma.js";
import { newsletterWelcomeEmail } from "../emails/templates.js";
import { logActivity } from "../services/activityService.js";
import { sendEmail } from "../services/emailService.js";
import { asyncHandler } from "../utils/aysncHandler.js";
import { created, ok } from "../utils/response.js";

// PUBLIC (idempotent — re-subscribe reactivates)
export const subscribe = asyncHandler(async (req, res) => {
  const { email, source } = req.body;
  const sub = await prisma.newsletterSubscriber.upsert({
    where: { email },
    update: { status: "active", source: source || "website" },
    create: { email, source: source || "website" },
  });
  sendEmail({ to: email, subject: "Welcome to Voima 💚", html: newsletterWelcomeEmail(email) });
  logActivity({ type: "newsletter", text: `New newsletter subscriber: ${email}` });
  created(res, { id: sub.id });
});

// ADMIN
export const listSubscribers = asyncHandler(async (req, res) => {
  const { search, page = 1, limit = 50 } = req.query;
  const where = search ? { email: { contains: search, mode: "insensitive" } } : {};
  const [items, total] = await Promise.all([
    prisma.newsletterSubscriber.findMany({
      where, orderBy: { subscribedAt: "desc" },
      skip: (page - 1) * limit, take: Number(limit),
    }),
    prisma.newsletterSubscriber.count({ where }),
  ]);
  ok(res, items, { total, page: Number(page), limit: Number(limit) });
});

export const deleteSubscriber = asyncHandler(async (req, res) => {
  await prisma.newsletterSubscriber.delete({ where: { id: req.params.id } });
  ok(res, { id: req.params.id });
});

export const exportSubscribers = asyncHandler(async (_req, res) => {
  const subs = await prisma.newsletterSubscriber.findMany({ orderBy: { subscribedAt: "desc" } });
  const rows = [["email", "status", "source", "subscribedAt"]];
  subs.forEach((s) => rows.push([s.email, s.status, s.source, s.subscribedAt.toISOString()]));
  const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=subscribers.csv");
  res.send(csv);
});