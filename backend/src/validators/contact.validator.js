import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  subject: z.string().min(2).max(200),
  message: z.string().min(5).max(5000),
});

export const updateMessageSchema = z.object({
  status: z.enum(["unread", "read", "replied", "archived"]),
});