import { Router } from "express";
import * as c from "../controllers/blog.controller.js";
import { requireAuth } from "../middleware/auth.js";
import { authorize } from "../middleware/authorize.js";
import { memoryUpload } from "../middleware/memoryUpload.js";

const router = Router();
router.get("/", requireAuth, authorize("blog"), c.listPosts);
router.get("/authors", requireAuth, authorize("blog"), c.listAuthors);
router.post("/", requireAuth, authorize("blog"), memoryUpload.single("coverImage"), c.createPost);
router.put("/:id", requireAuth, authorize("blog"), memoryUpload.single("coverImage"), c.updatePost);
router.patch("/:id/publish", requireAuth, authorize("blog"), c.publishPost);
router.delete("/:id", requireAuth, authorize("blog"), c.deletePost);
export default router;