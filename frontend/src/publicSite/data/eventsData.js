import Event1 from "@/assets/events/event-1.jpg";
import Event2 from "@/assets/events/event-2.jpg";
import Event3 from "@/assets/events/event-3.jpg";

import EventVideo1 from "@/assets/events/event-video.mp4";

export const eventsHero = {
  eyebrow: "Events & Programs",

  title:
    "Connecting communities through education, advocacy and action.",

  description:
    "Discover outreach programs, awareness campaigns, training workshops and community initiatives led by Voima Initiative.",
};

export const featuredEvent = {
  slug: "sickle-cell-awareness-summit-2025",

  coverMedia: {
    type: "image",
    src: Event1,
  },

  date: "July 15, 2025",

  location: "Accra, Ghana",

  category: "Summit",

  title: "Sickle Cell Awareness Summit",

  description:
    "A national gathering bringing together healthcare professionals, advocates, students and families to discuss awareness, prevention and support systems.",
};

export const events = [
  {
    slug: "sickle-cell-awareness-summit-2025",

    title: "Sickle Cell Awareness Summit",

    category: "Summit",

    date: "July 15, 2025",

    location: "Accra, Ghana",

    excerpt:
      "Bringing together experts and communities for meaningful conversations around awareness and support.",

    coverMedia: {
      type: "image",
      src: Event1,
    },

    content: [
      "The Sickle Cell Awareness Summit brought together healthcare professionals, advocates, students, and families from across Ghana.",

      "Participants engaged in educational sessions, networking opportunities, and discussions on improving support systems for people living with sickle cell disease.",

      "The summit highlighted the importance of awareness, research, and community collaboration in driving long-term impact.",
    ],

    highlights: [
      {
        title: "500+ Attendees",
        description:
          "Community members, healthcare professionals and students participated.",
      },

      {
        title: "20 Healthcare Experts",
        description:
          "Leading specialists shared insights and recommendations.",
      },

      {
        title: "10 Partner Organizations",
        description:
          "Organizations collaborated to increase impact and reach.",
      },

      {
        title: "Health Screenings",
        description:
          "Participants received free screening and educational materials.",
      },
    ],

    gallery: [
      {
        type: "image",
        src: Event1,
      },

      {
        type: "image",
        src: Event2,
      },

      {
        type: "video",
        src: EventVideo1,
      },

      {
        type: "image",
        src: Event3,
      },
    ],
  },

  {
    slug: "community-health-outreach-2025",

    title: "Community Health Outreach",

    category: "Outreach",

    date: "August 8, 2025",

    location: "Kumasi, Ghana",

    excerpt:
      "Delivering healthcare education and screenings directly to local communities.",

    coverMedia: {
      type: "video",
      src: EventVideo1,
    },

    content: [
      "The outreach program focused on health education, awareness and access to preventive care.",

      "Volunteers engaged community members through interactive sessions and health screenings.",

      "The initiative reinforced the importance of local partnerships in healthcare advocacy.",
    ],

    highlights: [
      {
        title: "1,000+ Residents",
        description:
          "Community members participated throughout the program.",
      },

      {
        title: "Volunteer Engagement",
        description:
          "Dozens of volunteers supported education and logistics.",
      },

      {
        title: "Free Consultations",
        description:
          "Attendees received guidance from healthcare professionals.",
      },
    ],

    gallery: [
      {
        type: "image",
        src: Event2,
      },

      {
        type: "video",
        src: EventVideo1,
      },

      {
        type: "image",
        src: Event3,
      },
    ],
  },
];