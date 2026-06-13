import { Router } from "express";
import { login, logout, me, refresh } from "../controllers/authController.js";
import { requireAuth } from "../middleware/auth.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import { loginSchema } from "../validators/auth.validator.js";

const router = Router();
router.post("/login", strictLimiter, validate(loginSchema), login);
router.post("/refresh", refresh);
router.get("/me", requireAuth, me);
router.post("/logout", requireAuth, logout);
export default router;