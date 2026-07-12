export default {
  name: "voimaAppPage",
  title: "Voima App Page",
  type: "document",
  fields: [
    {
      name: "hero", title: "Hero", type: "object",
      fields: [
        { name: "eyebrow", type: "string" },
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "primaryCTA", type: "object", fields: [
          { name: "text", type: "string" }, { name: "link", type: "string" } ]},
        { name: "secondaryCTA", type: "object", fields: [
          { name: "text", type: "string" }, { name: "link", type: "string" } ]},
        { name: "showcase", type: "object", fields: [
          { name: "frontScreen", type: "image", options: { hotspot: true } },
          { name: "backScreen", type: "image", options: { hotspot: true } },
        ]},
        {
          name: "demoVideo",
          title: "Demo Video",
          type: "object",
          fields: [
            {
              name: "videoType",
              title: "Video Source",
              type: "string",
              initialValue: "upload",
              options: {
                list: [
                  { title: "Upload Video", value: "upload" },
                  { title: "YouTube Link", value: "youtube" },
                ],
                layout: "radio",
              },
            },

            {
              name: "uploadedVideo",
              title: "Uploaded Video",
              type: "file",
              options: {
                accept: "video/mp4,video/webm",
              },
              hidden: ({ parent }) =>
                parent?.videoType !== "upload",
            },

            {
              name: "youtubeUrl",
              title: "YouTube URL",
              type: "url",
              hidden: ({ parent }) =>
                parent?.videoType !== "youtube",
            },
          ],
        },
      ],
    },
    {
    name: "howItWorks",
    title: "How It Works Section",
    type: "object",
    fields: [
      {
        name: "eyebrow",
        title: "Eyebrow",
        type: "string",
      },
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "steps",
        title: "Steps",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "number",
                title: "Number",
                type: "string",
              },
              {
                name: "iconName",
                title: "Icon",
                type: "string",
                options: {
                  list: [
                    "Download",
                    "UserPlus",
                    "Activity",
                    "Bell",
                    "Heart",
                    "Shield",
                    "Bot",
                    "Users",
                  ],
                },
              },
              {
                name: "title",
                title: "Title",
                type: "string",
              },
              {
                name: "description",
                title: "Description",
                type: "text",
              },
            ],
          },
        ],
      },
    ],
    },
    {
      name: "appScreens", title: "App Screens", type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string" },
        { name: "description", type: "text" },
        { name: "image", type: "image", options: { hotspot: true } },
      ]}],
    },
    {
      name: "benefits", title: "Benefits", type: "array",
      of: [{ type: "object", fields: [
        { name: "title", type: "string" }, { name: "description", type: "text" } ]}],
    },
    {
      name: "faqs", title: "FAQs", type: "array",
      of: [{ type: "object", fields: [
        { name: "question", type: "string" }, { name: "answer", type: "text" } ]}],
    },
    {
      name: "downloadCTA", title: "Download CTA", type: "object",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "backgroundImage", type: "image", options: { hotspot: true } },
        { name: "primaryButton", type: "object", fields: [
          { name: "text", type: "string" }, { name: "link", type: "string" } ]},
        { name: "secondaryButton", type: "object", fields: [
          { name: "text", type: "string" }, { name: "link", type: "string" } ]},
      ],
    },
  ],
  preview: { prepare: () => ({ title: "Voima App Page" }) },
};