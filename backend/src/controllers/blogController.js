import { logActivity } from "../services/activity.service.js";
import { sanityWrite, uploadSanityImage } from "../services/sanityWrite.service.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { created, ok } from "../utils/response.js";

const POST_PROJECTION = `{
  "id": _id, title, "slug": slug.current, excerpt,
  "author": author->name, "authorId": author._ref,
  "status": select(defined(publishedAt) && publishedAt <= now() => "published", "draft"),
  "coverImage": coverImage.asset->url, publishedAt, "createdAt": _createdAt
}`;

export const listPosts = asyncHandler(async (_req, res) => {
  const posts = await sanityWrite.fetch(
    `*[_type == "post"] | order(_createdAt desc) ${POST_PROJECTION}`
  );
  ok(res, posts);
});

export const createPost = asyncHandler(async (req, res) => {
  const { title, slug, excerpt, body, authorId, publishedAt, tags } = req.body;
  if (!title || !slug) throw ApiError.badRequest("Title and slug are required");

  const doc = {
    _type: "post",
    title,
    slug: { _type: "slug", current: slug },
    excerpt,
    body, // expect portable text or plain; adapt to your schema
    tags: tags ? JSON.parse(tags) : [],
    ...(authorId && { author: { _type: "reference", _ref: authorId } }),
    ...(publishedAt && { publishedAt }),
  };

  if (req.file) doc.coverImage = await uploadSanityImage(req.file);

  const result = await sanityWrite.create(doc);
  logActivity({ type: "blog", text: `Blog post "${title}" created`, adminId: req.user.id });
  created(res, { id: result._id });
});

export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, slug, excerpt, body, authorId, publishedAt, tags } = req.body;

  const patch = {};
  if (title) patch.title = title;
  if (slug) patch.slug = { _type: "slug", current: slug };
  if (excerpt !== undefined) patch.excerpt = excerpt;
  if (body !== undefined) patch.body = body;
  if (tags) patch.tags = JSON.parse(tags);
  if (authorId) patch.author = { _type: "reference", _ref: authorId };
  if (publishedAt !== undefined) patch.publishedAt = publishedAt || null;
  if (req.file) patch.coverImage = await uploadSanityImage(req.file);

  await sanityWrite.patch(id).set(patch).commit();
  ok(res, { id });
});

export const publishPost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { publish } = req.body; // boolean
  await sanityWrite
    .patch(id)
    .set({ publishedAt: publish ? new Date().toISOString() : null })
    .commit();
  ok(res, { id, published: !!publish });
});

export const deletePost = asyncHandler(async (req, res) => {
  await sanityWrite.delete(req.params.id);
  ok(res, { id: req.params.id });
});

// Authors dropdown for the editor
export const listAuthors = asyncHandler(async (_req, res) => {
  const authors = await sanityWrite.fetch(
    `*[_type == "author"]{ "id": _id, name }`
  );
  ok(res, authors);
});