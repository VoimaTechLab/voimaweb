import { Router } from "express";
import * as c from "../controllers/settingsController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { validate } from "../middleware/validate.js";
import { settingsSchema } from "../validators/settings.validator.js";

const router = Router();
router.get("/", requireAuth, authorize("settings"), c.getSettings);
router.put("/", requireAuth, authorize("settings"), validate(settingsSchema), c.updateSettings);
export default router;