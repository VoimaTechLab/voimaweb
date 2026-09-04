export default {
  name: "contactSupportPage",
  title: "Contact Support Page",
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
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    },

    {
      name: "supportEmail",
      title: "Support Email",
      type: "string",
    },

    {
      name: "supportPhone",
      title: "Support Phone",
      type: "string",
    },

    {
      name: "supportHours",
      title: "Support Hours",
      type: "string",
    },

    {
      name: "sections",
      title: "Support Information",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Section Title",
              type: "string",
            },

            {
              name: "content",
              title: "Content",
              type: "text",
              rows: 6,
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
      name: "contactLinks",
      title: "Contact Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },

            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare: () => ({
      title: "Contact Support Page",
    }),
  },
};