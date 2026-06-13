import { Router } from "express";
import * as c from "../controllers/eventController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { setFolder, upload } from "../middleware/upload.js";
import { validate } from "../middleware/validate.js";
import { eventSchema } from "../validators/event.validator.js";

const router = Router();
router.get("/", c.listEvents); // public can read published; admin sees all (filter on client)
router.get("/:id", c.getEvent);
router.post("/", requireAuth, authorize("events"), setFolder("events"), upload.single("image"), validate(eventSchema), c.createEvent);
router.put("/:id", requireAuth, authorize("events"), setFolder("events"), upload.single("image"), validate(eventSchema), c.updateEvent);
router.delete("/:id", requireAuth, authorize("events"), c.deleteEvent);
export default router;