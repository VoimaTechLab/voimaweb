import { Router } from "express";
import * as c from "../controllers/contactController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import { contactSchema, updateMessageSchema } from "../validators/contact.validator.js";

const router = Router();

// public
router.post("/", strictLimiter, validate(contactSchema), c.createMessage);

// admin
router.get("/", requireAuth, authorize("messages"), c.listMessages);
router.patch("/:id", requireAuth, authorize("messages"), validate(updateMessageSchema), c.updateMessage);
router.delete("/:id", requireAuth, authorize("messages"), c.deleteMessage);

export default router;