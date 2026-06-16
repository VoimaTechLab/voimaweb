const ctaObj = (name) => ({
  name, type: "object",
  fields: [{ name: "text", type: "string" }, { name: "link", type: "string" }],
});

export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "heroSlides", title: "Hero Slides", type: "array",
      of: [{ type: "object", fields: [
        { name: "id", type: "string" },
        { name: "eyebrow", type: "string" },
        { name: "titleBefore", type: "string" },
        { name: "titleHighlight", type: "string" },
        { name: "description", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
        { name: "primaryBtn", type: "string" }, { name: "primaryLink", type: "string" },
        { name: "secondaryBtn", type: "string" }, { name: "secondaryLink", type: "string" },
      ]}],
    },
    {
      name: "impact", title: "Impact Section", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" },
        { name: "areas", type: "array", of: [{ type: "object", fields: [
          { name: "iconName", type: "string", options: { list: ["HeartPulse", "Brain", "Globe", "BookOpenText"] } },
          { name: "colorTheme", type: "string", options: { list: ["primary", "orange", "green", "black"] } },
          { name: "title", type: "string" }, { name: "description", type: "text" },
        ]}]},
        { name: "banner", type: "object", fields: [
          { name: "badge", type: "string" }, { name: "title", type: "text" },
          { name: "description", type: "text" },
          { name: "video", type: "file", options: { accept: "video/*" } },
        ]},
      ],
    },
    {
      name: "mission", title: "Mission Section", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" },
        { name: "steps", type: "array", of: [{ type: "object", fields: [
          { name: "number", type: "string" }, { name: "title", type: "string" }, { name: "description", type: "text" },
        ]}]},
      ],
    },
    {
      name: "story", title: "Story Section", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" },
        { name: "description", type: "text" }, { name: "quote", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
        ctaObj("cta"),
      ],
    },
    {
      name: "appShowcase", title: "App Showcase", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" }, { name: "description", type: "text" },
        ctaObj("primaryCta"), ctaObj("secondaryCta"),
        { name: "storeLinks", type: "array", of: [{ type: "object", fields: [
          { name: "label", type: "string" }, { name: "link", type: "string" }, { name: "variant", type: "string" } ]}]},
        { name: "floatingCard", type: "object", fields: [
          { name: "title", type: "string" }, { name: "description", type: "text" } ]},
        { name: "video", type: "file", options: { accept: "video/*" } },
      ],
    },
    {
      name: "sdg", title: "SDG Section", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" },
        { name: "goals", type: "array", of: [{ type: "object", fields: [
          { name: "number", type: "string" }, { name: "color", type: "string" },
          { name: "title", type: "string" }, { name: "description", type: "text" },
          { name: "image", type: "image", options: { hotspot: true } },
        ]}]},
      ],
    },
    {
      name: "cta", title: "CTA Section", type: "object",
      fields: [
        { name: "title", type: "text" }, { name: "description", type: "text" },
        ctaObj("primaryCta"), ctaObj("secondaryCta"),
      ],
    },
  ],
  preview: { prepare: () => ({ title: "Home Page" }) },
};