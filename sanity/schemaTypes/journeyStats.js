export default {
  name: "journeyStats",
  title: "Journey Stats",
  type: "document",
  fields: [
    {
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "value",
              title: "Value",
              type: "string",
              validation: (R) => R.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (R) => R.required(),
            },
          ],
        },
      ],
    },
  ],
};