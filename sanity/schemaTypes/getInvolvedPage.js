export default {
  name: "getInvolvedPage",
  title: "Get Involved Page",
  type: "document",
  fields: [
    { name: "hero", type: "object", fields: [
      { name: "eyebrow", type: "string" },
      { name: "title", type: "text" },
      { name: "description", type: "text" },
    ]},
    { name: "volunteer", type: "object", fields: [
      { name: "badge", type: "string" },
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "image", type: "image", options: { hotspot: true } },
      { name: "stats", type: "object", fields: [
        { name: "number", type: "string" }, { name: "text", type: "text" } ]},
      { name: "opportunities", type: "array", of: [{ type: "string" }] },
    ]},
    { name: "donation", type: "object", fields: [
      { name: "badge", type: "string" },
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "stats", type: "array", of: [{ type: "object", fields: [
        { name: "number", type: "string" }, { name: "label", type: "string" } ]}]},
    ]},
    { name: "careersCTA", type: "object", fields: [
      { name: "badge", type: "string" },
      { name: "title", type: "text" },
      { name: "description", type: "text" },
      { name: "primaryButton", type: "object", fields: [
        { name: "label", type: "string" }, { name: "link", type: "string" } ]},
      { name: "secondaryButton", type: "object", fields: [
        { name: "label", type: "string" }, { name: "link", type: "string" } ]},
    ]},
  ],
  preview: { prepare: () => ({ title: "Get Involved Page" }) },
};