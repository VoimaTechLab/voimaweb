// validations/newsletterSchema.js

import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email(),
});