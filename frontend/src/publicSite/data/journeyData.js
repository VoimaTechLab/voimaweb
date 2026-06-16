import { default as Founder1, default as Founder2 } from "@/assets/journey/founder-1.jpg";
import { default as Journey1, default as Journey2, default as Journey3, default as Journey4 } from "@/assets/journey/journey-1.jpg";
import Testimonial1 from "@/assets/journey/testimonial-1.jpg";
import Journey5 from "@/assets/journey/voima_website_prototype_01.mp4";

export const heroData = {
  eyebrow: "Our Journey",
  title: "Every milestone tells a story.",
  description:
    "From a simple vision to a growing movement, our journey is powered by communities, volunteers, partners, and individuals committed to creating a healthier future.",
};

export const milestones = [
  {
    year: "2021",
    slug: "foundation-year",
    title: "The Beginning",
    description:
      "Voima Initiative was founded with a vision of improving healthcare awareness, advocacy, and community support.",

    media: {
      type: "image",
      src: Journey1,
    },

    story: {
      content: [
        "Voima Initiative was established to bridge the gap between healthcare awareness and community action.",
        "Early outreach focused on local health seminars and volunteer-led screenings.",
        "This foundation year laid the groundwork for the impact that would follow."
      ],

      highlights: [
        "Organization established",
        "Initial volunteer recruitment",
        "Community engagement launched"
      ]
    },

    contributors: [
    {
      name: "Dr. Sarah Mensah",
      role: "Founding Director",
      image: Founder1,
      quote:
        "We believed healthcare awareness should be accessible to every community."
    },

    {
      name: "Kwame Boateng",
      role: "Community Coordinator",
      image: Founder2,
      quote:
        "The vision was simple: create impact through education and action."
    }
  ],
    contributorsSectionTitle: "The People Behind The Vision",
  gallery : [
    Journey1,
    Journey2,
    Journey3,
    Journey4,
    Journey1,
    Journey2,
  ]
  },

  {
    year: "2022",
    slug: "awareness-campaign",
    title: "Growing Awareness",
    description:
      "A nationwide campaign helped Voima raise awareness on preventive healthcare and connect with new communities.",

    media: {
      type: "video",
      src: Journey5,
    },

    story: {
      content: [
        "In 2022, Voima launched its first large-scale health awareness campaign.",
        "Workshops and school sessions reached families and young adults across the region.",
        "Partnerships with local clinics strengthened community trust and access to care."
      ],

      highlights: [
        "Countrywide campaign",
        "School and community workshops",
        "Clinic partnerships formed"
      ]
    },
    contributors: [
    {
      name: "Dr. Sarah Mensah",
      role: "Founding Director",
      image: Founder1,
      quote:
        "We believed healthcare awareness should be accessible to every community."
    },

    {
      name: "Kwame Boateng",
      role: "Community Coordinator",
      image: Founder2,
      quote:
        "The vision was simple: create impact through education and action."
    }
  ],
    contributorsSectionTitle: "Champions of Awareness",
  gallery : [
    Journey1,
    Journey2,
    Journey3,
    Journey4,
    Journey1,
    Journey2,
  ]
  },

  {
    year: "2023",
    slug: "volunteer-network",
    title: "Building Community",
    description:
      "Volunteer networks expanded and new training programs empowered community leaders to drive health education.",

    media: {
      type: "image",
      src: Journey3,
    },

    story: {
      content: [
        "The volunteer network grew to include regional ambassadors and community health advocates.",
        "Training sessions gave volunteers tools to deliver effective education and support.",
        "Community feedback helped refine programs and tailor them to local needs."
      ],

      highlights: [
        "Regional volunteer chapters",
        "Training curriculum launched",
        "Community-led initiatives"
      ]
    },
    contributors: [
    {
      name: "Dr. Sarah Mensah",
      role: "Founding Director",
      image: Founder1,
      quote:
        "We believed healthcare awareness should be accessible to every community."
    },

    {
      name: "Kwame Boateng",
      role: "Community Coordinator",
      image: Founder2,
      quote:
        "The vision was simple: create impact through education and action."
    }
  ],
   contributorsSectionTitle: "Community Leaders",
  gallery : [
    Journey1,
    Journey2,
    Journey3,
    Journey4,
    Journey1,
    Journey2,
  ]
  },

  {
    year: "2024",
    slug: "strategic-partnerships",
    title: "Stronger Together",
    description:
      "Voima partnered with healthcare providers and organizations to improve access to preventive services.",

    media: {
      type: "image",
      src: Journey4,
    },

    story: {
      content: [
        "Strategic partnerships brought new resources to Voima programs.",
        "Collaborative projects improved access to screenings and health education.",
        "Shared expertise helped scale our work sustainably."
      ],

      highlights: [
        "Healthcare partnerships",
        "Shared resources",
        "Expanded preventive services"
      ]
    },
    contributors: [
    {
      name: "Dr. Sarah Mensah",
      role: "Founding Director",
      image: Founder1,
      quote:
        "We believed healthcare awareness should be accessible to every community."
    },

    {
      name: "Kwame Boateng",
      role: "Community Coordinator",
      image: Founder2,
      quote:
        "The vision was simple: create impact through education and action."
    }
  ],
   contributorsSectionTitle: "Partners In Impact",
  gallery : [
    Journey1,
    Journey2,
    Journey3,
    Journey4,
    Journey1,
    Journey2,
  ]
  },

  {
    year: "2025",
    slug: "future-focus",
    title: "Future Forward",
    description:
      "The latest phase focuses on digital health education and sustainable regional support for long-term impact.",

    media: {
      type: "image",
      src: Journey1,
    },

    story: {
      content: [
        "The most recent stage emphasizes digital outreach and virtual health education.",
        "New programs are designed to support communities with sustainable, long-term healthcare resources.",
        "The journey continues with renewed energy, innovation, and community-led progress."
      ],

      highlights: [
        "Digital health launch",
        "Sustainable programming",
        "Regional support expansion"
      ]
    },
    contributors: [
    {
      name: "Dr. Sarah Mensah",
      role: "Founding Director",
      image: Founder1,
      quote:
        "We believed healthcare awareness should be accessible to every community."
    },

    {
      name: "Kwame Boateng",
      role: "Community Coordinator",
      image: Founder2,
      quote:
        "The vision was simple: create impact through education and action."
    }
  ],
   contributorsSectionTitle: "Driving The Future",
  gallery : [
    Journey1,
    Journey2,
    Journey3,
    Journey4,
    Journey1,
    Journey2,
  ]
  },
];

export const stats = [
  { value: "10+", label: "Programs" },
  { value: "50+", label: "Participants" },
  { value: "10+", label: "Partners" },
  { value: "5", label: "Countries" },
];

export const testimonials = [
{
  quote:
    "Voima helped me understand the importance of preventive healthcare.",

  name: "Ama Serwaa",

  role: "Program Participant",

  image: Testimonial1,

  location: "Accra, Ghana"
},
{
  quote:
    "Voima helped me understand the importance of preventive healthcare.",

  name: "Ama Serwaa",

  role: "Program Participant",

  image: Testimonial1,

  location: "Accra, Ghana"
},
{
  quote:
    "Voima helped me understand the importance of preventive healthcare.",

  name: "Ama Serwaa",

  role: "Program Participant",

  image: Testimonial1,

  location: "Accra, Ghana"
},
];

