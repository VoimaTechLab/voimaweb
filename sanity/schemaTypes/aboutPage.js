export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "hero", title: "Hero", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
        { name: "stats", type: "object", fields: [
          { name: "value", type: "string" }, { name: "label", type: "text" },
        ]},
        { name: "cta", type: "object", fields: [
          { name: "primary", type: "object", fields: [
            { name: "text", type: "string" }, { name: "link", type: "string" } ]},
          { name: "secondary", type: "object", fields: [
            { name: "text", type: "string" }, { name: "link", type: "string" } ]},
        ]},
      ],
    },
    {
      name: "story", title: "Our Story", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "descriptionOne", type: "text" },
        { name: "descriptionTwo", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "missionVision", title: "Mission & Vision", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "mission", type: "object", fields: [
          { name: "title", type: "text" }, { name: "content", type: "text" } ]},
        { name: "vision", type: "object", fields: [
          { name: "title", type: "text" }, { name: "content", type: "text" } ]},
      ],
    },
    {
      name: "trace", title: "TRACE Framework", type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string" }, { name: "description", type: "text" } ]}],
    },
    {
      name: "team", title: "Team", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "members", type: "array", of: [{ type: "object", fields: [
          { name: "name", type: "string" },
          { name: "role", type: "string" },
          { name: "bio", type: "text" },
          { name: "linkedin", type: "url" },
          { name: "image", type: "image", options: { hotspot: true } },
        ]}]},
      ],
    },
    {
      name: "galleryCTA", title: "Gallery CTA", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
        { name: "cta", type: "object", fields: [
          { name: "text", type: "string" }, { name: "link", type: "string" } ]},
      ],
    },
  ],
  preview: { prepare: () => ({ title: "About Page" }) },
};