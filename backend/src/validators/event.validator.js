import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(2).max(200),
  description: z.string().min(2),
  location: z.string().max(160).optional(),
  eventDate: z.coerce.date().optional(),
  status: z.enum(["draft", "published"]).optional(),
});