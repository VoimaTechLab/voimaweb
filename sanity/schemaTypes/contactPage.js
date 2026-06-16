export default {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "hero", title: "Hero", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
      ],
    },
    {
      name: "officeInfo", title: "Office Info", type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "address", title: "Address (one line each)", type: "array", of: [{ type: "string" }] },
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
      ],
    },
    {
      name: "socialLinks", title: "Social Links", type: "array",
      of: [{ type: "object", fields: [
        { name: "name", type: "string" },
        { name: "url", type: "url" },
      ]}],
    },
  ],
  preview: { prepare: () => ({ title: "Contact Page" }) },
};