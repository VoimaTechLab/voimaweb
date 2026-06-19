import { Router } from "express";
import { deleteSanityEvent, listSanityEvents } from "../controllers/sanityEventController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";

const router = Router();
router.get("/events", requireAuth, authorize("events"), listSanityEvents);
router.delete("/events/:id", requireAuth, authorize("events"), deleteSanityEvent);
export default router;