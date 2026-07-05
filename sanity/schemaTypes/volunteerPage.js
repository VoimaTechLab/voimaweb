export default {
  name: "volunteerPage",
  title: "Volunteer Page",
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
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Volunteer Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageTitle",
      title: "Image Title",
      type: "string",
    },
    {
      name: "imageDescription",
      title: "Image Description",
      type: "text",
    },
  ],

  preview: {
    prepare: () => ({
      title: "Volunteer Page",
    }),
  },
};