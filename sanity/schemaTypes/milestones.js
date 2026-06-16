export default {
  name: "milestone",
  title: "Journey Milestone",
  type: "document",
  fields: [
    { name: "year", title: "Year", type: "string", validation: (R) => R.required() },
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    {
      name: "slug", title: "Slug", type: "slug",
      options: { source: "title", maxLength: 96 }, validation: (R) => R.required(),
    },
    { name: "description", title: "Short Description", type: "text", rows: 3 },
    { name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "video", title: "Cover Video (optional)", type: "file", options: { accept: "video/*" } },
    {
      name: "story", title: "Story", type: "object",
      fields: [
        { name: "content", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
        { name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] },
      ],
    },
    { name: "contributorsSectionTitle", title: "Contributors Section Title", type: "string" },
    {
      name: "contributors", title: "Contributors", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", title: "Name", type: "string" },
          { name: "role", title: "Role", type: "string" },
          { name: "quote", title: "Quote", type: "text" },
          { name: "image", title: "Image", type: "image", options: { hotspot: true } },
        ],
      }],
    },
    {
      name: "gallery", title: "Gallery", type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
  preview: { select: { title: "title", subtitle: "year", media: "coverImage" } },
};