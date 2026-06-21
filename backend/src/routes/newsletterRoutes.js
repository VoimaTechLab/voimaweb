import { Router } from "express";
import * as c from "../controllers/newsletterController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import { broadcastSchema } from "../validators/broadcast.validator.js";
import { subscribeSchema } from "../validators/newsletter.validator.js";

const router = Router();
router.post("/", strictLimiter, validate(subscribeSchema), c.subscribe);
router.get("/", requireAuth, authorize("newsletter"), c.listSubscribers);
router.get("/export", requireAuth, authorize("newsletter"), c.exportSubscribers);
router.delete("/:id", requireAuth, authorize("newsletter"), c.deleteSubscriber);
router.post("/broadcast", requireAuth, authorize("newsletter"), validate(broadcastSchema), c.broadcast);
export default router;