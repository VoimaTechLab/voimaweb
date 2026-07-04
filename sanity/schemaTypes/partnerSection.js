export default {
  name: "partnersSection",
  title: "Partners Section",
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
      type: "text",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "partners",
      title: "Partners",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Partner Name",
              type: "string",
            },
            {
              name: "website",
              title: "Website",
              type: "url",
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare: () => ({
      title: "Partners Section",
    }),
  },
};