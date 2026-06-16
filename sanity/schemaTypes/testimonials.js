export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text", validation: (R) => R.required() },
    { name: "name", title: "Name", type: "string", validation: (R) => R.required() },
    { name: "role", title: "Role", type: "string" },
    { name: "location", title: "Location", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
  ],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
};