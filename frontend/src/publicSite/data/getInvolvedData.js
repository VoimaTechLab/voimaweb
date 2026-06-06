// getInvolvedData.js

import Story from "@/assets/ourStory.jpg";

export const heroData = {
  eyebrow: "Join The Movement",

  title:
    "Help us build healthier futures through advocacy, technology & community impact.",

  description:
    "Every volunteer, donor, partner, and supporter helps us move closer to a future where chronic conditions no longer limit quality healthcare access.",
};

export const volunteerData = {
  badge: "Volunteer Opportunities",

  title:
    "Use your skills to create meaningful community impact.",

  description:
    "We welcome passionate individuals from healthcare, technology, education, media, outreach and design backgrounds.",

  image: Story,

  stats: {
    number: "500+",
    text: "Volunteers and supporters helping us expand our reach.",
  },

  opportunities: [
    "Community outreach & awareness campaigns",
    "Healthcare education initiatives",
    "Creative, design & media support",
    "Technology & digital innovation",
  ],
};

export const donationData = {
  badge: "Support Our Mission",

  title:
    "Every donation creates measurable impact.",

  description:
    "Your support funds education, outreach, advocacy programs, digital healthcare tools and patient support systems.",

  stats: [
    {
      number: "10K+",
      label: "Communities Reached",
    },

    {
      number: "200+",
      label: "Workshops Organized",
    },

    {
      number: "24/7",
      label: "Digital Health Access",
    },

    {
      number: "100%",
      label: "Community Focused",
    },
  ],
};

export const jobs = [
  {
    slug: "project-manager",
    title: "Project Manager",
    type: "Internship",
    location: "Remote",
  },

  {
    slug: "community-programs-manager",
    title: "Community Programs Manager",
    type: "Full Time",
    location: "Accra, Ghana",
  },
];

export const values = [
  {
    icon: "HeartHandshake",
    title: "Compassion",
  },

  {
    icon: "Sparkles",
    title: "Innovation",
  },

  {
    icon: "ShieldCheck",
    title: "Integrity",
  },

  {
    icon: "Globe2",
    title: "Community",
  },
];

export const careersCTA = {
  badge: "Career Opportunities",

  title:
    "Build solutions that improve healthcare access across Africa.",

  description:
    "Join a growing team of innovators, healthcare advocates, researchers, designers and technologists working to create meaningful impact through community programs and digital health.",

  primaryButton: {
    label: "View Open Roles",
    link: "/careers",
  },

  secondaryButton: {
    label: "Contact Our Team",
    link: "/contact",
  },
};