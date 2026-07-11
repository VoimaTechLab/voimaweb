import { env } from "../config/env.js";
import { prisma } from "../database/prisma.js";
import {
  volunteerAdminEmail,
  volunteerConfirmationEmail,
} from "../emails/templates.js";
import { logActivity } from "../services/activityService.js";
import { sendEmail } from "../services/emailService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";
export const createVolunteer = asyncHandler(async (req, res) => {
const volunteer = await prisma.volunteerApplication.create({
  data: req.body,
});

try {
  await sendEmail({
    to: volunteer.email,
    subject: "Thank you for volunteering with Voima ❤️",
    html: volunteerConfirmationEmail(volunteer.fullName),
  });
} catch (err) {
  console.error("Volunteer email failed:", err);
}

try {
  await sendEmail({
    to: env.email.adminNotify,
    subject: "New Volunteer Application",
    html: volunteerAdminEmail(volunteer),
  });
} catch (err) {
  console.error("Admin email failed:", err);
}

created(res, { id: volunteer.id });

  logActivity({
    type: "volunteer",
    text: `Volunteer application from ${volunteer.fullName}`,
  });

  created(res, {
    id: volunteer.id,
  });
});

export const listVolunteers = asyncHandler(async (req, res) => {
  const {
    search,
    status,
    page = 1,
    limit = 50,
  } = req.query;

  const where = {
    ...(status &&
      status !== "all" && { status }),

    ...(search && {
      OR: [
        {
          fullName: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    }),
  };

  const [items, total] =
    await Promise.all([
      prisma.volunteerApplication.findMany({
        where,
        orderBy: {
          createdAt: "desc",
        },
        skip: (page - 1) * limit,
        take: Number(limit),
      }),
      prisma.volunteerApplication.count({
        where,
      }),
    ]);

  ok(res, items, {
    total,
    page: Number(page),
    limit: Number(limit),
  });
});

export const updateVolunteer =
  asyncHandler(async (req, res) => {
    const item =
      await prisma.volunteerApplication.update({
        where: {
          id: req.params.id,
        },
        data: {
          status: req.body.status,
        },
      });

    ok(res, item);
  });

export const deleteVolunteer =
  asyncHandler(async (req, res) => {
    await prisma.volunteerApplication.delete({
      where: {
        id: req.params.id,
      },
    });

    ok(res, {
      id: req.params.id,
    });
  });

  export const volunteerCount =
  asyncHandler(async (_req, res) => {
    const total =
      await prisma.volunteerApplication.count();

    ok(res, { total });
  });