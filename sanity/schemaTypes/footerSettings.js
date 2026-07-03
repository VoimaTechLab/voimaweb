export default {
  name: "footerSettings",
  title: "Footer Settings",
  type: "document",
  fields: [
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "title",
      title: "Footer Title",
      type: "text",
      rows: 3,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },

    {
      name: "navigationLinks",
      title: "Navigation Links",
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
              name: "path",
              title: "Path",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "programLinks",
      title: "Program Links",
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
              name: "path",
              title: "Path",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "facebook",
          title: "Facebook",
          type: "url",
        },
        {
          name: "instagram",
          title: "Instagram",
          type: "url",
        },
        {
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        },
      ],
    },

    {
      name: "location",
      title: "Location",
      type: "string",
    },

    {
      name: "email",
      title: "Email",
      type: "string",
    },

    {
      name: "phone",
      title: "Phone",
      type: "string",
    },

    {
      name: "bottomLinks",
      title: "Bottom Links",
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
              name: "path",
              title: "Path",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};