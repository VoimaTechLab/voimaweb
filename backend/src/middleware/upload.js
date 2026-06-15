import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../config/cloudinary.js";
import { env } from "../config/env.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: (req) => ({
    folder: `${env.cloudinary.folder}/${req.uploadFolder || "general"}`,
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    transformation: [{ width: 1600, crop: "limit", quality: "auto" }],
  }),
});
export const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
export const setFolder = (folder) => (req, _res, next) => { req.uploadFolder = folder; next(); };