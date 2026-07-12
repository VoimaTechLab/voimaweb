

export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",

  fields: [
    {
      name: "image",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    },

{
  name: "linkedin",
  title: "LinkedIn",
  type: "url",
},

{
  name: "github",
  title: "GitHub",
  type: "url",
},

{
  name: "twitter",
  title: "Twitter / X",
  type: "url",
},

{
  name: "website",
  title: "Website",
  type: "url",
},
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
};