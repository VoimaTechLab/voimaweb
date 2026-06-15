export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    {
      name: "slug", title: "Slug", type: "slug",
      options: { source: "title", maxLength: 96 }, validation: (R) => R.required(),
    },
    { name: "category", title: "Category", type: "string" },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "readTime", title: "Read Time", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    {
      name: "story", title: "Story", type: "object",
      fields: [
        { name: "content", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
        { name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] },
      ],
    },
    {
      name: "seo", title: "SEO", type: "object",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text", title: "Meta Description" },
      ],
    },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
};