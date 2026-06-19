import { logActivity } from "../services/activityService.js";
import { sanityWrite, uploadSanityImage } from "../services/sanityWriteService.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

export const listGallery = asyncHandler(async (_req, res) => {
  const items = await sanityWrite.fetch(
    `*[_type == "gallery"] | order(_createdAt desc){
      "id": _id, title,
      "images": images[]{ "url": asset->url, "key": _key }
    }`
  );
  ok(res, items);
});

// Add image(s) to a gallery (or create one)
export const uploadGalleryImage = asyncHandler(async (req, res) => {
  const { galleryId, title, category } = req.body;
  const image = await uploadSanityImage(req.file);

  let id = galleryId;
  if (id) {
    await sanityWrite
      .patch(id)
      .setIfMissing({ images: [] })
      .append("images", [image])
      .commit();
  } else {
    const doc = await sanityWrite.create({
      _type: "gallery",
      title: title || "Untitled",
      category: category || "general",
      images: [image],
    });
    id = doc._id;
  }
  logActivity({ type: "gallery", text: `Gallery image uploaded`, adminId: req.user.id });
  created(res, { id });
});

export const deleteGalleryImage = asyncHandler(async (req, res) => {
  const { galleryId, key } = req.body;
  await sanityWrite
    .patch(galleryId)
    .unset([`images[_key=="${key}"]`])
    .commit();
  ok(res, { ok: true });
});

export const deleteGallery = asyncHandler(async (req, res) => {
  await sanityWrite.delete(req.params.id);
  ok(res, { id: req.params.id });
});