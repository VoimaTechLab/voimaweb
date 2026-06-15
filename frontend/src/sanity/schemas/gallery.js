export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    { name: "category", title: "Category", type: "string",
      options: { list: ["outreach", "event", "community", "general"] } },
    {
      name: "images", title: "Images", type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};