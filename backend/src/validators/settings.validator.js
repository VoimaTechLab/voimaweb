import { z } from "zod";

export const settingsSchema = z.object({
  general: z.object({
    siteName: z.string().max(120).optional(),
    contactEmail: z.string().email().optional().or(z.literal("")),
    phone: z.string().max(40).optional(),
    address: z.string().max(300).optional(),
  }).optional(),
  social: z.object({
    facebook: z.string().url().optional().or(z.literal("")),
    instagram: z.string().url().optional().or(z.literal("")),
    linkedin: z.string().url().optional().or(z.literal("")),
    x: z.string().url().optional().or(z.literal("")),
  }).optional(),
  seo: z.object({
    metaTitle: z.string().max(160).optional(),
    metaDescription: z.string().max(300).optional(),
  }).optional(),
  preferences: z.object({
    notifications: z.object({
      newMessage: z.boolean().optional(),
      newWaitlist: z.boolean().optional(),
      newStory: z.boolean().optional(),
    }).optional(),
  }).optional(),
});