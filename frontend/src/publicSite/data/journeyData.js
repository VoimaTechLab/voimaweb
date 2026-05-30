// src/publicSite/data/journeyData.js

import { default as Journey1, default as Journey2, default as Journey3, default as Journey4 } from "@/assets/journey/journey-1.jpg";

export const heroData = {
  eyebrow: "Our Journey",
  title: "Every milestone tells a story.",
  description:
    "From a simple vision to a growing movement, our journey is powered by communities, volunteers, partners, and individuals committed to creating a healthier future.",
};

export const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "Voima Initiative was founded with a vision of improving healthcare awareness, advocacy, and community support.",
    image: Journey1,
  },
  {
    year: "2022",
    title: "Community Outreach",
    description:
      "Our first outreach programs connected us with students, families, and healthcare advocates.",
    image: Journey2,
  },
  {
    year: "2023",
    title: "Partnerships & Growth",
    description:
      "We expanded collaborations with volunteers, organizations, and institutions.",
    image: Journey3,
  },
  {
    year: "2024",
    title: "Technology & Innovation",
    description:
      "The development of the Voima digital ecosystem began, bringing healthcare support closer to communities.",
    image: Journey4,
  },
];

export const stats = [
  { value: "10+", label: "Programs" },
  { value: "500+", label: "Participants" },
  { value: "20+", label: "Partners" },
  { value: "5", label: "Regions" },
];

export const stories = [
  {
    quote:
      "Meeting students who had never received sickle cell awareness training showed us how important education really is.",
    author: "Volunteer",
  },
  {
    quote:
      "The outreach program changed how I understand preventive healthcare and community wellbeing.",
    author: "Participant",
  },
  {
    quote:
      "Being part of Voima gave me an opportunity to contribute to something meaningful.",
    author: "Community Member",
  },
];

export const gallery = [
  Journey1,
  Journey2,
  Journey3,
  Journey4,
  Journey1,
  Journey2,
];