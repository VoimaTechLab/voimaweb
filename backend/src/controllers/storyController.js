import { env } from "../config/env.js";
import { prisma } from "../database/prisma.js";
import {
  storySubmittedAdminEmail,
  storySubmittedUserEmail,
} from "../emails/templates.js";
import { logActivity } from "../services/activityService.js";
import { destroyImage, publicIdFromUrl } from "../services/cloudinaryService.js";
import { sendEmail } from "../services/emailService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

// PUBLIC (multipart: optional image via req.file)
export const submitStory = asyncHandler(async (req, res) => {
  const data = { ...req.body, image: req.file?.path || null };
  const story = await prisma.story.create({ data });

  if (story.email)
    sendEmail({
      to: story.email,
      subject: "Thanks for sharing your story 🙏",
      html: storySubmittedUserEmail(story),
    });
  sendEmail({
    to: env.email.adminNotify,
    subject: "New community story submitted",
    html: storySubmittedAdminEmail(story),
  });
  logActivity({
    type: "story",
    text: `New community story submitted by ${story.contributorName}`,
  });

  created(res, { id: story.id });
});

// ADMIN — list with filter/search/pagination
export const listStories = asyncHandler(async (req, res) => {
  const { status, search, page = 1, limit = 30 } = req.query;
  const where = {
    ...(status && status !== "all" && { status }),
    ...(search && {
      OR: [
        { contributorName: { contains: search, mode: "insensitive" } },
        { location: { contains: search, mode: "insensitive" } },
        { title: { contains: search, mode: "insensitive" } },
      ],
    }),
  };
  const [items, total] = await Promise.all([
    prisma.story.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: (page - 1) * limit,
      take: Number(limit),
    }),
    prisma.story.count({ where }),
  ]);
  ok(res, items, { total, page: Number(page), limit: Number(limit) });
});

export const getStory = asyncHandler(async (req, res) => {
  const story = await prisma.story.findUniqueOrThrow({
    where: { id: req.params.id },
  });
  ok(res, story);
});

// ADMIN — review (approve / reject / pending)
export const reviewStory = asyncHandler(async (req, res) => {
  const story = await prisma.story.update({
    where: { id: req.params.id },
    data: { status: req.body.status },
  });
  logActivity({
    type: "story",
    text: `Story by ${story.contributorName} marked ${story.status}`,
    adminId: req.user.id,
  });
  ok(res, story);
});

export const deleteStory = asyncHandler(async (req, res) => {
  const story = await prisma.story.findUnique({ where: { id: req.params.id } });
  await prisma.story.delete({ where: { id: req.params.id } });
  if (story?.image) destroyImage(publicIdFromUrl(story.image));
  ok(res, { id: req.params.id });
});