export default {
  name: "post",
  title: "Blog Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },

    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },

    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },

    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "readTime",
      title: "Read Time",
      type: "string",
    },

    {
      name: "story",
      title: "Story",
      type: "object",
      fields: [
        {
          name: "content",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text" }],
        },
        {
          name: "highlights",
          title: "Highlights",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    },

    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },

    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },

    {
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "author.name",
    },
  },
};