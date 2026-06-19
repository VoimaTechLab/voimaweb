import { z } from "zod";
export const broadcastSchema = z.object({
  subject: z.string().min(2).max(200),
  message: z.string().min(2).max(20000),
});