
const ctaObj = (name) => ({
  name, type: "object",
  fields: [{ name: "text", type: "string" }, { name: "link", type: "string" }],
});

export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [

  // HERO SCHEMA
  {
    name: "backgroundVideo",
    title: "Hero Background Video",
    type: "file",
    options: { accept: "video/*" },
  },
  {
    name: "heroSlides",
    title: "Hero Slides",
    type: "array",
    of: [
      {
        type: "object",
        name: "heroSlide",
        fields: [
          { name: "id", title: "Slide ID", type: "string" },
          { name: "eyebrow", title: "Eyebrow", type: "string" },
          { name: "titleBefore", title: "Title Before", type: "string" },
          { name: "titleAfter", title: "Highlighted Title", type: "string" },
          { name: "description", title: "Description", type: "text", rows: 4 },
          { name: "primaryBtn", title: "Primary Button Text", type: "string" },
          { name: "primaryLink", title: "Primary Button Link", type: "string" },
          { name: "secondaryBtn", title: "Secondary Button Text", type: "string" },
          { name: "secondaryLink", title: "Secondary Button Link", type: "string" },
        ],
        preview: {
          select: { title: "eyebrow", subtitle: "titleBefore" },
        },
      },
    ],
  },

  // WHO IS VOIMA 
  {
    name: "whoIsVoima",
    title: "Who Is Voima",
    type: "object",
    fields: [
      { name: "title", title: "Title", type: "string", initialValue: "WHAT IS" },
      { name: "titleAccent", title: "Title Accent", type: "string", initialValue: "VOIMA?" },
      { name: "heading", title: "Heading", type: "text", rows: 3 },
      { name: "description", title: "Description", type: "text", rows: 5 },
      {
        name: "cta",
        title: "CTA",
        type: "object",
        fields: [
          { name: "text", title: "Button Text", type: "string" },
          { name: "link", title: "Button Link", type: "string" },
        ],
      },
      {
        name: "socialChannels",
        title: "Social Channels",
        type: "array",
        of: [
          {
            type: "object",
            name: "socialChannel",
            fields: [
              { name: "name", title: "Name", type: "string" },
              { name: "href", title: "URL", type: "url" },
            ],
          },
        ],
      },
      { name: "image", title: "Community Image", type: "image", options: { hotspot: true } },
    ],
    },
    // OUR STORY HOME SCHEMA
    {
      name: "story",
      title: "Our Story",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string", initialValue: "Our Story" },
        { name: "title", title: "Title", type: "string", initialValue: "A mission born from loss, driven by the need for better care." },
        { name: "paragraphs", title: "Story Paragraphs", type: "array", of: [{ type: "text" }] },
        { name: "quote", title: "Quote", type: "text", rows: 3 },
        {
          name: "cta",
          title: "CTA",
          type: "object",
          fields: [
            { name: "text", title: "Button Text", type: "string", initialValue: "Read our Journey" },
            { name: "link", title: "Button Link", type: "string", initialValue: "/our-journey" },
          ],
        },
        { name: "image", title: "Leader Image", type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "impactSection",
      title: "Impact / The Burden",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Section Title", type: "string" },
        {
          name: "areas",
          title: "Impact Cards",
          type: "array",
          of: [
            {
              type: "object",
              name: "impactArea",
              fields: [
                { name: "title", title: "Statistic", type: "string" },
                { name: "description", title: "Description", type: "text", rows: 4 },
                { name: "image", title: "Card Image", type: "image", options: { hotspot: true } },
                { name: "backTitle", title: "Card Label", type: "string" },
                { name: "backStory", title: "Card Story", type: "text", rows: 4 },
              ],
              preview: {
                select: { title: "title", subtitle: "backTitle", media: "image" },
              },
            },
          ],
        },
        {
          name: "banner",
          title: "Why It Matters Banner",
          type: "object",
          fields: [
            { name: "badge", title: "Badge", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 4 },
            { name: "image", title: "Banner Image", type: "image", options: { hotspot: true } },
            { name: "video", title: "Banner Video", type: "file", options: { accept: "video/*" } },
          ],
        },
      ],
    },

    // TRACEFRAMEWORK SECTION 
    {
      name: "traceFrameworkSection",
      title: "TRACE Framework Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "titleAccent", title: "Highlighted Title", type: "string" },
        { name: "description", title: "Description", type: "text", rows: 4 },
        {
          name: "pillars",
          title: "TRACE Pillars",
          type: "array",
          of: [
            {
              type: "object",
              name: "tracePillar",
              fields: [
                { name: "id", title: "Pillar ID", type: "string" },
                { name: "letter", title: "Letter", type: "string", validation: (Rule) => Rule.max(1) },
                { name: "title", title: "Title", type: "string" },
                { name: "description", title: "Description", type: "text", rows: 3 },
                { name: "detail", title: "Detailed Narrative", type: "text", rows: 4 },
                { name: "badge", title: "Badge", type: "string" },
                { name: "image", title: "Pillar Image", type: "image", options: { hotspot: true } },
                { name: "link", title: "Explore Link", type: "string" },
              ],
              preview: {
                select: { title: "title", subtitle: "badge", media: "image" },
              },
            },
          ],
        },
      ],
    },

    /*{
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
    },*/

    // APP SHOWCASE SCHEMA
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

    // GLOBAL REACH
    {
    name: "globalReachSection",
    title: "Global Reach Section",
    type: "object",
    fields: [
      { name: "eyebrow", title: "Eyebrow", type: "string" },
      { name: "title", title: "Title", type: "string" },
      { name: "titleAccent", title: "Accent Title", type: "string" },
      { name: "description", title: "Description", type: "text" },
      {
        name: "stats",
        title: "Impact Statistics",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "id", title: "ID", type: "number" },
              { name: "value", title: "Display Value", type: "string" },
              { name: "number", title: "Number", type: "number" },
              { name: "suffix", title: "Suffix", type: "string" },
              { name: "label", title: "Label", type: "string" },
              { name: "description", title: "Description", type: "text" },
              { name: "detail", title: "Detailed Description", type: "text" },
              { name: "badge", title: "Badge", type: "string" },
              { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            ],
          },
        ],
      },
  ],
    },

    // FAQ SECTION 
    {
      name: "faqSection",
      title: "FAQ Section",
      type: "faqSection",
    },
   /* {
      name: "sdg", title: "SDG Section", type: "object",
      fields: [
        { name: "eyebrow", type: "string" }, { name: "title", type: "text" },
        { name: "goals", type: "array", of: [{ type: "object", fields: [
          { name: "number", type: "string" }, { name: "color", type: "string" },
          { name: "title", type: "string" }, { name: "description", type: "text" },
          { name: "image", type: "image", options: { hotspot: true } },
        ]}]},
      ],
    },*/
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