import { prisma } from "../database/prisma.js";
import { logActivity } from "../services/activityService.js";
import { destroyImage, publicIdFromUrl } from "../services/cloudinaryService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

export const listEvents = asyncHandler(async (req, res) => {
  const { status, search } = req.query;
  const where = {
    ...(status && status !== "all" && { status }),
    ...(search && { title: { contains: search, mode: "insensitive" } }),
  };
  const items = await prisma.event.findMany({
    where,
    orderBy: { createdAt: "desc" },
  });
  ok(res, items);
});

export const getEvent = asyncHandler(async (req, res) => {
  const item = await prisma.event.findUniqueOrThrow({
    where: { id: req.params.id },
  });
  ok(res, item);
});

export const createEvent = asyncHandler(async (req, res) => {
  const item = await prisma.event.create({
    data: { ...req.body, image: req.file?.path || null },
  });
  logActivity({
    type: "event",
    text: `Event "${item.title}" created`,
    adminId: req.user.id,
  });
  created(res, item);
});

export const updateEvent = asyncHandler(async (req, res) => {
  const existing = await prisma.event.findUnique({
    where: { id: req.params.id },
  });
  const data = { ...req.body };
  if (req.file?.path) {
    data.image = req.file.path;
    if (existing?.image) destroyImage(publicIdFromUrl(existing.image));
  }
  const item = await prisma.event.update({ where: { id: req.params.id }, data });
  ok(res, item);
});

export const deleteEvent = asyncHandler(async (req, res) => {
  const existing = await prisma.event.findUnique({
    where: { id: req.params.id },
  });
  await prisma.event.delete({ where: { id: req.params.id } });
  if (existing?.image) destroyImage(publicIdFromUrl(existing.image));
  ok(res, { id: req.params.id });
});