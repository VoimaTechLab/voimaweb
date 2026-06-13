import { Router } from "express";
import { z } from "zod";
import * as c from "../controllers/adminController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";

const router = Router();

const createSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["SUPER_ADMIN", "ADMIN", "EDITOR"]),
});
const updateSchema = z.object({
  name: z.string().min(2).optional(),
  role: z.enum(["SUPER_ADMIN", "ADMIN", "EDITOR"]).optional(),
  isActive: z.boolean().optional(),
  password: z.string().min(8).optional(),
});
const pwSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8),
});

// Self-service (any admin)
router.patch("/me/password", requireAuth, validate(pwSchema), c.changeMyPassword);

// SUPER_ADMIN only
router.get("/", requireAuth, authorize("admins"), c.listAdmins);
router.post("/", requireAuth, authorize("admins"), validate(createSchema), c.createAdmin);
router.patch("/:id", requireAuth, authorize("admins"), validate(updateSchema), c.updateAdmin);
router.delete("/:id", requireAuth, authorize("admins"), c.deactivateAdmin);
export default router;