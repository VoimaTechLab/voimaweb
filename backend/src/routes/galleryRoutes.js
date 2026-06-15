import { Router } from "express";
import * as c from "../controllers/galleryController.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { memoryUpload } from "../middleware/memoryUpload.js";

const router = Router();
router.get("/", requireAuth, authorize("gallery"), c.listGallery);
router.post("/", requireAuth, authorize("gallery"), memoryUpload.single("image"), c.uploadGalleryImage);
router.delete("/image", requireAuth, authorize("gallery"), c.deleteGalleryImage);
router.delete("/:id", requireAuth, authorize("gallery"), c.deleteGallery);
export default router;