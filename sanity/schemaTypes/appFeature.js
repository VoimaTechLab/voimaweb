export default {
  name: "appFeature",
  title: "App Feature",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (R) => R.required() },
    { name: "slug", type: "slug", options: { source: "title" }, validation: (R) => R.required() },
    {
      name: "iconName", title: "Icon", type: "string",
      options: { list: ["Bell", "HeartPulse", "Users", "Activity", "Bot", "Brain", "Shield"] },
      initialValue: "Bell",
    },
    { name: "description", type: "text" },
    { name: "heroImage", type: "image", options: { hotspot: true } },
    { name: "content", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
    { name: "highlights", type: "array", of: [{ type: "string" }] },
  ],
  preview: { select: { title: "title", subtitle: "iconName" } },
};