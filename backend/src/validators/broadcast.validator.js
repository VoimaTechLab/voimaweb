import { z } from "zod";
export const broadcastSchema = z.object({
  subject: z.string().min(2).max(150),
  message: z.string().min(5).max(10000),
});