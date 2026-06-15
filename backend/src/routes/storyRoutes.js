import { Router } from "express";
import * as c from "../controllers/storyController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { strictLimiter } from "../middleware/rateLimit.js";
import { setFolder, upload } from "../middleware/upload.js";
import { validate } from "../middleware/validate.js";
import { reviewStorySchema, submitStorySchema } from "../validators/story.validator.js";

const router = Router();
// public submit with optional image
router.post("/", strictLimiter, setFolder("stories"), upload.single("image"), validate(submitStorySchema), c.submitStory);
// admin
router.get("/", requireAuth, authorize("stories"), c.listStories);
router.get("/:id", requireAuth, authorize("stories"), c.getStory);
router.patch("/:id/review", requireAuth, authorize("stories"), validate(reviewStorySchema), c.reviewStory);
router.delete("/:id", requireAuth, authorize("stories"), c.deleteStory);
export default router;