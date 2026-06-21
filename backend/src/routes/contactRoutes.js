import { Router } from "express";
import { z } from "zod";
import * as c from "../controllers/contactController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import { contactSchema, updateMessageSchema } from "../validators/contact.validator.js";

const replySchema = z.object({ message: z.string().min(1).max(5000) }); //

const router = Router();

// public
router.post("/", strictLimiter, validate(contactSchema), c.createMessage);

// admin
router.get("/", requireAuth, authorize("messages"), c.listMessages);
router.patch("/:id", requireAuth, authorize("messages"), validate(updateMessageSchema), c.updateMessage);
router.post("/:id/reply", requireAuth, authorize("messages"), validate(replySchema), c.replyMessage);
router.delete("/:id", requireAuth, authorize("messages"), c.deleteMessage);

export default router;