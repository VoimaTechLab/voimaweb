export default {
  name: "eventsPage",
  title: "Events Page",
  type: "document",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "title", title: "Title", type: "string" },
    { name: "description", title: "Description", type: "text", rows: 4 },
  ],
  preview: { select: { title: "title", subtitle: "eyebrow" } },
};