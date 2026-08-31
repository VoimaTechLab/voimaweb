export default {
  name: "scdResourcesPage",
  title: "SCD Resources Page",
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
      rows: 5,
      validation: (Rule) => Rule.required(),
    },

    {
      name: "categories",
      title: "Resource Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Category Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },

            {
              name: "description",
              title: "Category Description",
              type: "text",
              rows: 3,
            },

            {
              name: "resources",
              title: "Resources",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Resource Title",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    },

                    {
                      name: "description",
                      title: "Resource Description",
                      type: "text",
                      rows: 4,
                    },

                    {
                      name: "url",
                      title: "Resource URL",
                      type: "url",
                    },

                    {
                      name: "type",
                      title: "Resource Type",
                      type: "string",
                      options: {
                        list: [
                          "Article",
                          "Guide",
                          "Organization",
                          "Research",
                          "Video",
                          "Emergency",
                          "Other",
                        ],
                      },
                    },
                  ],

                  preview: {
                    select: {
                      title: "title",
                      subtitle: "type",
                    },
                  },
                },
              ],
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
      name: "disclaimer",
      title: "Disclaimer",
      type: "text",
      rows: 5,
    },
  ],

  preview: {
    prepare: () => ({
      title: "SCD Resources Page",
    }),
  },
};