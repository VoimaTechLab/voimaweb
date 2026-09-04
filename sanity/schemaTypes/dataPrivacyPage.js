export default {
  name: "dataPrivacyPage",
  title: "Data Privacy Page",
  type: "document",

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
      validation: (Rule) => Rule.required(),
    },

    {
      name: "description",
      title: "Introduction",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    },

    {
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
    },

    {
      name: "sections",
      title: "Privacy Policy Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },

            {
              name: "content",
              title: "Content",
              type: "text",
              rows: 8,
            },

            {
              name: "items",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
          preview: {
            select: {
              title: "title",
            },
          },
        },
      ],
    },

    {
      name: "contactEmail",
      title: "Privacy Contact Email",
      type: "string",
    },
  ],

  preview: {
    prepare: () => ({
      title: "Data Privacy Page",
    }),
  },
};