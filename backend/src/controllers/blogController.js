import { logActivity } from "../services/activityService.js";
import { sanityWrite, uploadSanityImage } from "../services/sanityWriteService.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

const PROJECTION = `{
  "id": _id, title, "slug": slug.current, excerpt, category, readTime,
  kind, featured, location, source, author, story,
  "coverImage": coverImage.asset->url,
  "status": select(defined(publishedAt) && publishedAt <= now() => "published", "draft"),
  publishedAt, "createdAt": _createdAt
}`;

const guard = () => { if (!sanityWrite) throw ApiError.badRequest("Sanity not configured (missing SANITY_WRITE_TOKEN)"); };

// admin form sends: { title, slug, excerpt, content, author, status, category?, readTime?, kind?, featured? }
const buildDoc = (b) => {
  const doc = {
    _type: "post",
    title: b.title,
    slug: { _type: "slug", current: b.slug },
    excerpt: b.excerpt || "",
    category: b.category || "",
    readTime: b.readTime || "",
    kind: b.kind || "article",
    featured: !!b.featured,
    ...(b.location && { location: b.location }),
    ...(b.source && { source: b.source }),
    ...(b.author && { author: { name: b.author, role: b.authorRole || "" } }),
    ...(b.content && { story: { content: Array.isArray(b.content) ? b.content : [b.content], highlights: b.highlights || [] } }),
    publishedAt: b.status === "published" ? (b.publishedAt || new Date().toISOString()) : null,
  };
  return doc;
};

export const listPosts = asyncHandler(async (_req, res) => {
  guard();
  ok(res, await sanityWrite.fetch(`*[_type=="post"] | order(_createdAt desc) ${PROJECTION}`));
});

export const createPost = asyncHandler(async (req, res) => {
  guard();
  if (!req.body.title || !req.body.slug) throw ApiError.badRequest("Title and slug required");
  const doc = buildDoc(req.body);
  if (req.file) doc.coverImage = await uploadSanityImage(req.file);
  const result = await sanityWrite.create(doc);
  logActivity({ type: "blog", text: `Blog post "${req.body.title}" created`, adminId: req.user.id });
  created(res, { id: result._id, ...req.body });
});

export const updatePost = asyncHandler(async (req, res) => {
  guard();
  const patch = buildDoc(req.body);
  delete patch._type; // can't change type on patch
  if (req.file) patch.coverImage = await uploadSanityImage(req.file);
  await sanityWrite.patch(req.params.id).set(patch).commit();
  ok(res, { id: req.params.id, ...req.body });
});

export const publishPost = asyncHandler(async (req, res) => {
  guard();
  await sanityWrite.patch(req.params.id)
    .set({ publishedAt: req.body.publish ? new Date().toISOString() : null }).commit();
  ok(res, { id: req.params.id, published: !!req.body.publish });
});

export const deletePost = asyncHandler(async (req, res) => {
  guard();
  await sanityWrite.delete(req.params.id);
  ok(res, { id: req.params.id });
});

export const listAuthors = asyncHandler(async (_req, res) => ok(res, [])); // inline authors now