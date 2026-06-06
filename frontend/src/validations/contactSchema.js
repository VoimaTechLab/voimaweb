import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name"),

  email: z
    .string()
    .email("Please enter a valid email"),

  subject: z
    .string()
    .min(3, "Subject is required"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});