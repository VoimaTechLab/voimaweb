export default {
  name: "waitlistPage",
  title: "Waitlist Page",
  type: "document",
  fields: [
    { name: "launchDate", title: "Launch Date", type: "datetime" },
    { name: "eyebrow", type: "string" },
    { name: "title", type: "text" },
    { name: "description", type: "text" },
    {
      name: "stats", title: "Stats", type: "object",
      fields: [{ name: "label", title: "Stat Label", type: "string" }],
      // registered count comes live from the backend, not CMS
    },
    {
      name: "form", title: "Form Copy", type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
      ],
    },
    {
      name: "launchMessage", title: "Launch Message", type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
      ],
    },
    {
      name: "features", title: "Features", type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
      ]}],
    },
    {
      name: "avatars", title: "Social Proof Avatars", type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "appMockups", title: "App Mockup Images", type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
  preview: { prepare: () => ({ title: "Waitlist Page" }) },
};