import { prisma } from "../database/prisma.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ok } from "../utils/response.js";

const DEFAULTS = {
  general: { siteName: "Voima Initiative", contactEmail: "", phone: "", address: "" },
  social: { facebook: "", instagram: "", linkedin: "", x: "" },
  seo: { metaTitle: "", metaDescription: "" },
  preferences: {
    notifications: { newMessage: true, newWaitlist: true, newStory: true },
  },
};

export const getSettings = asyncHandler(async (_req, res) => {
  const row = await prisma.setting.findUnique({ where: { id: "site" } });
  ok(res, { ...DEFAULTS, ...(row?.data || {}) });
});

export const updateSettings = asyncHandler(async (req, res) => {
  const current = await prisma.setting.findUnique({ where: { id: "site" } });
  const merged = { ...DEFAULTS, ...(current?.data || {}), ...req.body };

  const row = await prisma.setting.upsert({
    where: { id: "site" },
    update: { data: merged },
    create: { id: "site", data: merged },
  });
  ok(res, row.data);
});

export const getPublicSettings = asyncHandler(async (_req, res) => {
  const row = await prisma.setting.findUnique({ where: { id: "site" } });
  const d = { ...DEFAULTS, ...(row?.data || {}) };
  ok(res, { general: d.general, social: d.social, seo: d.seo }); // no preferences (private)
});

