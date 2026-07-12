export default {
  name: "careerRole",
  title: "Career Role",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Role Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 5,
    },

    {
      name: "type",
      title: "Employment Type",
      type: "string",
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "department",
      title: "Department",
      type: "string",
    },

    {
      name: "experience",
      title: "Experience",
      type: "string",
    },

    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    },
    {
        name: "applicationLink",
        title: "Application Link",
        type: "url",
        description: "Google Form or external application URL",
        validation: (Rule) => Rule.uri({
            scheme: ["http", "https"],
        }),
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "department",
    },
  },
};