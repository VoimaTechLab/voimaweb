// src/publicSite/data/blogData.js

import { default as Blog1, default as Blog2, default as Blog3, default as Blog4 } from "@/assets/blog/blog-1.jpg";

export const blogHero = {
  eyebrow: "Stories & Insights",

  title:
    "Real stories, research, awareness and community impact.",

  description:
    "Explore community stories, healthcare education, sickle cell awareness, research uppublishedAts and insights from the Voima community."
};

export const featuredPost = {
  slug: "living-with-sickle-cell-strength-through-community",

  category: "Community Stories",

  title:
    "Living With Sickle Cell: Finding Strength Through Community",

  excerpt:
    "A personal story of resilience, support and navigating everyday life while living with sickle cell disease.",

  author: {
    name: "Ama Serwaa",
    initials: "AS",
    avatar: null,
    role: "Community Member",
  },

  publishedAt: "2026-05-12",

  readTime: "6 min read",

  media: {
    type: "image",
    src: Blog1,
    alt: "altTypeBasedonImage/Video",
  },

  story: {
    content: [
      "Living with sickle cell disease comes with unique challenges that require strength and perseverance.",
      "Community support has played a significant role in helping many individuals navigate daily life.",
      "Through awareness, education and shared experiences, more people are finding hope and support."
    ],

    highlights: [
      "Community Support",
      "Resilience",
      "Awareness",
      "Education"
    ]
  }
};

export const categories = [
  "All",
  "Community Stories",
  "Research",
  "Healthcare Tips",
  "Technology",
  "Events",
  "Voima UppublishedAts"
];

export const posts = [
  {
    slug: "understanding-sickle-cell-early-signs",

    category: "Healthcare Tips",

    title:
      "Understanding Early Signs Of Sickle Cell Complications",

    excerpt:
      "Recognizing symptoms early can improve outcomes and quality of life.",

    author: {
        name: "Voima Editorial",
        initials: "VE",
        avatar: null,
        role: "Admin"
    },

    publishedAt: "2026-05-12",

    readTime: "5 min read",

    media: {
      type: "image",
      src: Blog2,
      alt: "altTypeBasedonImage/Video",
    },

    story: {
      content: [
        "Early intervention remains one of the most important factors in managing sickle cell complications.",
        "Understanding warning signs allows families and individuals to seek medical support sooner.",
        "Healthcare education continues to play a major role in improving long-term outcomes."
      ],

      highlights: [
        "Early symptom recognition",
        "Preventive healthcare",
        "Community awareness",
        "Better long-term outcomes"
      ]
    }
  },

  {
    slug: "future-of-digital-healthcare",

    category: "Technology",

    title:
      "The Future Of Digital Healthcare In Africa",

    excerpt:
      "Exploring how technology is transforming healthcare accessibility.",

    author: {
        name: "Voima Research",
        initials: "VR",
        avatar: null,
        role: "Research Team",
    },

    publishedAt: "2026-05-12",

    readTime: "7 min read",

    media: {
      type: "image",
      src: Blog3,
      alt: "altTypeBasedonImage/Video",
    },

    story: {
      content: [
        "Digital healthcare continues to evolve across Africa.",
        "Mobile applications are becoming critical tools for healthcare access.",
        "The Voima App is part of this growing ecosystem."
      ],

      highlights: [
        "Mobile healthcare",
        "Accessibility",
        "AI support",
        "Digital innovation"
      ]
    }
  }
];

export const communityStories = [
  {
    slug: "my-sickle-cell-journey",

    title: "My Journey Living With Sickle Cell",

    author: {
      name: "Community Member",
      initials: "CM",
      avatar: null,
      role: "Voima Community",
    },

    location: "Accra, Ghana",

    excerpt:
      "A story of resilience, education and support.",

    image: Blog4,
    alt: "altTypeBasedonImage/Video",

    source: "Voima App",

    story: {
      content: [
        "My journey with sickle cell has shaped who I am today.",
        "There have been challenges, but support from family and healthcare professionals helped me push forward.",
        "Sharing stories creates awareness and encourages others facing similar situations."
      ],

      highlights: [
        "Resilience",
        "Family Support",
        "Healthcare Awareness",
        "Community Impact"
      ]
    }
  }
];