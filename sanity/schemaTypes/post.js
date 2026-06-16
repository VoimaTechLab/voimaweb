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
    {
      name: "kind", title: "Type", type: "string",
      options: { list: [
        { title: "Article", value: "article" },
        { title: "Community Story", value: "community" },
      ]}, initialValue: "article",
    },
    { name: "featured", title: "Featured (hero)", type: "boolean", initialValue: false },
    { name: "category", title: "Category", type: "string" },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    {
      name: "author", title: "Author", type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "role", title: "Role", type: "string" },
      ],
    },
    { name: "location", title: "Location (community stories)", type: "string" },
    { name: "source", title: "Source (e.g. Voima App)", type: "string" },
    { name: "readTime", title: "Read Time", type: "string" },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    {
      name: "story", title: "Story", type: "object",
      fields: [
        { name: "content", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
        { name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] },
      ],
    },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
};