import { sanityWrite } from "../services/sanityWriteService.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ok } from "../utils/response.js";

const guard = () => { if (!sanityWrite) throw ApiError.badRequest("Sanity not configured"); };

export const listSanityEvents = asyncHandler(async (_req, res) => {
  guard();
  const items = await sanityWrite.fetch(`*[_type=="event"] | order(_createdAt desc){
    "id": _id, title, "slug": slug.current, category, date, location, featured,
    "coverImage": coverImage.asset->url, "createdAt": _createdAt
  }`);
  ok(res, items);
});

export const deleteSanityEvent = asyncHandler(async (req, res) => {
  guard();
  await sanityWrite.delete(req.params.id);
  ok(res, { id: req.params.id });
});