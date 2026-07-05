import { z } from "zod";

export const volunteerSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  motivation: z.string().min(10).max(5000),
});

export const updateVolunteerSchema = z.object({
  status: z.enum([
    "new",
    "reviewing",
    "accepted",
    "rejected",
  ]),
});