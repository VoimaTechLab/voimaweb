export default {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (R) => R.required() },
    { name: "description", title: "Description", type: "text" },
    { name: "location", title: "Location", type: "string" },
    { name: "eventDate", title: "Event Date", type: "datetime" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
  ],
};