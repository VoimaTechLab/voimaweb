import { Router } from "express";
import * as c from "../controllers/waitlistController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import { waitlistSchema } from "../validators/waitlist.validator.js";

const router = Router();
router.post("/", strictLimiter, validate(waitlistSchema), c.join);
router.get("/", requireAuth, authorize("waitlist"), c.listWaitlist);
router.get("/export", requireAuth, authorize("waitlist"), c.exportWaitlist);
router.delete("/:id", requireAuth, authorize("waitlist"), c.deleteWaitlistUser);
router.get("/count", waitlistCount); //  public
export default router;
