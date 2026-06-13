import { z } from "zod";
export const subscribeSchema = z.object({
  email: z.string().email(),
  source: z.string().max(60).optional(),
});