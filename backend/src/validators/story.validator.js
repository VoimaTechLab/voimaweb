import { z } from "zod";

export const submitStorySchema = z.object({
  contributorName: z.string().min(2).max(120),
  email: z.string().email().optional(),
  location: z.string().max(120).optional(),
  title: z.string().max(200).optional(),
  story: z.string().min(10).max(8000),
});

export const reviewStorySchema = z.object({
  status: z.enum(["pending", "approved", "rejected"]),
});