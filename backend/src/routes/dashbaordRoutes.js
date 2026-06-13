import { Router } from "express";
import { dashboardStats } from "../controllers/dashboardController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";

const router = Router();
router.get("/stats", requireAuth, authorize("dashboard"), dashboardStats);
export default router;