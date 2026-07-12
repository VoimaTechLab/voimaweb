

export default {
  name: "careerPage",
  title: "Career Page",
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
      name: "roles",
      title: "Open Roles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "careerRole" }],
        },
      ],
    },

    {
        name: "membersEyebrow",
        title: "Members Eyebrow",
        type: "string",
        },

    {
        name: "membersTitle",
        title: "Members Title",
        type: "string",
    },

    {
        name: "membersDescription",
        title: "Members Description",
        type: "text",
        rows: 3,
    },

    {
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "teamMember" }],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Career Page",
      };
    },
  },
};

