import { cloudinary } from "../config/cloudinary.js";

export const destroyImage = async (publicId) => {
  if (!publicId) return;
  try { await cloudinary.uploader.destroy(publicId); }
  catch (e) { console.error("cloudinary destroy failed:", e.message); }
};

// Extract publicId from a cloudinary URL (for deletes)
export const publicIdFromUrl = (url) => {
  if (!url) return null;
  const m = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-z]+$/i);
  return m ? m[1] : null;
};