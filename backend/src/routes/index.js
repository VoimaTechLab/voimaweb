import { Router } from "express";
import adminRoutes from "./adminRoutes.js";
import authRoutes from "./authRoutes.js";
import cmsRoutes from "./cmsRoutes.js";
import contactRoutes from "./contactRoutes.js";
import dashboardRoutes from "./dashboardRoutes.js";
import eventRoutes from "./eventRoutes.js";
import newsletterRoutes from "./newsletterRoutes.js";
import settingsRoutes from "./settingsRoutes.js";
import storyRoutes from "./storyRoutes.js";
import waitlistRoutes from "./waitlistRoutes.js";

const router = Router();
router.get("/health", (_req, res) => res.json({ success: true, status: "ok" }));

router.use("/auth", authRoutes);
router.use("/contact", contactRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/waitlist", waitlistRoutes);
router.use("/stories", storyRoutes);
router.use("/events", eventRoutes);
router.use("/admins", adminRoutes);
router.use("/settings", settingsRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/cms", cmsRoutes);
export default router;