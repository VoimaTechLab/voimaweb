import { z } from "zod";
export const waitlistSchema = z.object({
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  location: z.string().max(120).optional(),
  role: z.string().max(60).optional(),
});