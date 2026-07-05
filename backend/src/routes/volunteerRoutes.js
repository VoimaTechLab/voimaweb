import { Router } from "express";
import * as c from "../controllers/volunteerController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { validate } from "../middleware/validate.js";
import {
    updateVolunteerSchema,
    volunteerSchema,
} from "../validators/volunteer.validator.js";

const router = Router();

// public
router.post(
  "/",
  strictLimiter,
  validate(volunteerSchema),
  c.createVolunteer
);

// admin
router.get(
  "/",
  requireAuth,
  authorize("volunteers"),
  c.listVolunteers
);

router.patch(
  "/:id",
  requireAuth,
  authorize("volunteers"),
  validate(updateVolunteerSchema),
  c.updateVolunteer
);

router.delete(
  "/:id",
  requireAuth,
  authorize("volunteers"),
  c.deleteVolunteer
);

router.get(
  "/count",
  requireAuth,
  authorize("dashboard"),
  c.volunteerCount
);

export default router;