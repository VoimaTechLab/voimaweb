export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    {
      name: "slug", title: "Slug", type: "slug",
      options: { source: "title", maxLength: 96 }, validation: (R) => R.required(),
    },
    { name: "featured", title: "Featured (hero)", type: "boolean", initialValue: false },
    { name: "category", title: "Category", type: "string" },
    { name: "date", title: "Date (display text, e.g. July 15, 2025)", type: "string" },
    { name: "location", title: "Location", type: "string" },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 2 },
    { name: "description", title: "Short Description", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "content", title: "Content Paragraphs", type: "array", of: [{ type: "text" }] },
    {
      name: "highlights", title: "Highlights", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "description", title: "Description", type: "text" },
        ],
      }],
    },
    {
      name: "gallery", title: "Gallery", type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
};