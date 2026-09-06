export default {
  name: "faqSection",
  title: "FAQ Section",
  type: "object",

  fields: [
    {
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      initialValue: "FREQUENTLY ASKED QUESTIONS",
    },

    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Got Questions? We Have",
    },

    {
      name: "highlightedTitle",
      title: "Highlighted Title",
      type: "string",
      initialValue: "Answers",
    },
    {
      name: "backgroundImage",
      title: "FAQ Background Image",
      type: "image",
      options: { hotspot: true },
    },

    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [
        {
          type: "object",
          name: "faqItem",
          title: "FAQ",

          fields: [
            {
              name: "question",
              title: "Question",
              type: "string",
              validation: (Rule) => Rule.required(),
            },

            {
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 5,
              validation: (Rule) => Rule.required(),
            },
          ],

          preview: {
            select: {
              title: "question",
              subtitle: "answer",
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      highlightedTitle: "highlightedTitle",
    },

    prepare({ title, highlightedTitle }) {
      return {
        title: title || "FAQ Section",
        subtitle: highlightedTitle
          ? `Highlighted: ${highlightedTitle}`
          : "FAQ Section",
      };
    },
  },
};