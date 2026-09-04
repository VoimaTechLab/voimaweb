import CommunityImage from "@/assets/PC_Red.webp";
import { default as StoryImage } from "../../assets/ourStory.webp";
import AppDemo from "../../assets/voima_website_prototype_01.mp4";


import emmanuelImg from "@/assets/Leaders/Emmanuel.webp";
import cherrynImg from "@/assets/Leaders/Cherryn.webp";
import spendiloveImg from "@/assets/Leaders/Spendilove.webp";
import mildredImg from "@/assets/Leaders/Mildred.webp";

/*
ABOUT HERO
*/

export const heroData = {
  eyebrow: "Who We Are",

  title:
    "Building healthier communities through innovation, advocacy & impact.",

  description:
    "Voima Initiative exists to create proactive, compassionate, and sustainable healthcare systems for underserved communities affected by chronic health conditions across Africa.",

  image: StoryImage,

  stats: {
    value: "10K+",
    label:
      "Communities reached through advocacy, education, wellness campaigns, and outreach programs.",
  },

  cta: {
    primary: {
      text: "Join Our Mission",
      link: "/get-involved",
    },

    secondary: {
      text: "See Our Journey",
      link: "/our-journey",
    },
  },
};

/*
OUR STORY
*/

export const storyData = {
  eyebrow: "Our Story",

  title: "A mission born from lived experience.",

  descriptionOne:
    "Voima Initiative was founded from a deep desire to ensure that individuals and families affected by chronic illnesses never feel isolated, unsupported, or invisible.",

  descriptionTwo:
    "What began as a vision for awareness and advocacy has evolved into a growing movement focused on healthcare innovation, community support, education, and digital transformation.",

  image: StoryImage,
};

/*
MISSION & VISION
*/

export const missionVisionData = {
  eyebrow: "Mission & Vision",

  title:
    "Creating a future where healthcare becomes proactive, inclusive & human-centered.",

  description:
    "Voima Initiative is building sustainable systems of support through technology, advocacy, education, and community-driven healthcare innovation.",

  mission: {
    title:
      "Empowering communities through proactive healthcare support.",

    content:
      "Our mission is to improve the quality of life for individuals living with chronic conditions by building accessible tools, educational systems, digital healthcare experiences, and compassionate support networks.",
  },

  vision: {
    title:
      "A world where everyone has the tools to thrive.",

    content:
      "We envision a future where healthcare inequities are reduced and underserved communities gain access to the support, education, and technology needed to live healthier and more empowered lives.",
  },
};

/*
TRACE FRAMEWORK
*/

export const traceFramework = [
  {
    title: "Technology",
    description:
      "Building digital tools that improve healthcare access, wellness tracking, and patient support.",
  },

  {
    title: "Research",
    description:
      "Using data, insights, and lived experiences to shape better healthcare solutions.",
  },

  {
    title: "Advocacy",
    description:
      "Amplifying awareness around sickle cell disease, chronic illnesses, and healthcare equity.",
  },

  {
    title: "Community",
    description:
      "Creating strong support systems and meaningful human connection through outreach.",
  },

  {
    title: "Education",
    description:
      "Empowering individuals through health literacy, education, and awareness programs.",
  },
];

/*
TEAM SECTION
*/

export const teamData = {
  eyebrow: "Leadership",
  title: "Meet the people building Voima.",
  description:
    "A mission-driven team combining technology, healthcare, and community to transform SCD care.",

  members: [
    {
      name: "Emmanuel Dey",
      role: "Founder & CTO",
      image: emmanuelImg,
      bio: "Dartmouth College (CS & Design). Product Manager at DALI Lab. AI + Product Experience. Passionate about building technology that makes healthcare more predictive, personal, and accessible for SCD patients.",
      linkedin: "https://www.linkedin.com/in/emmanuel1010",
    },
    {
      name: "Cherrlyn Ahiamble",
      role: "Programs Director",
      image: cherrynImg,
      bio: "Physician Associate. 5+ years of experience in health programs. Project design & management. Drives partnerships, community engagement, and program execution to ensure real-world impact.",
      linkedin: "#",
    },
    {
      name: "Spendilove Asamoah",
      role: "Research Director",
      image: spendiloveImg,
      bio: "Primary Health Clinician. Special interest in SCD care & outcomes. Research & data driven. Leads our research strategy to understand patient needs, track outcomes, and inform product decisions.",
      linkedin: "#",
    },
    {
      name: "Mildred Adjei",
      role: "Partnership and Strategy",
      image: mildredImg,
      bio: "Leads our partnerships, strategic growth, and engagement initiatives to expand Voima's footprint and impact.",
      linkedin: "#",
    },
  ],
};


/*
GALLERY CTA
*/

export const galleryData = {
  eyebrow: "Community Gallery",

  title:
    "Every photo tells a story of impact, growth, and belonging.",

  description:
    "Explore moments from outreach programs, healthcare campaigns, student cohorts, workshops, volunteer activities, and community events that continue to shape the Voima journey.",

  image: CommunityImage,

  cta: {
    text: "Visit Gallery",
    link: "/our-journey#gallery",
  },
};
/*
APP SECTION
*/

export const appData = {
  eyebrow: "Voima App",

  title:
    "Healthcare support designed for everyday life.",

  description:
    "The Voima App helps individuals manage chronic conditions through education, wellness tracking, reminders, community support, and AI-powered guidance.",

  features: [
    "Medication reminders",
    "Hydration tracking",
    "AI-powered support",
    "Wellness monitoring",
    "Community engagement",
  ],

  floatingCards: [
    {
      title: "AI",
      subtitle: "Smart Health Support",
    },
    {
      title: "24/7",
      subtitle: "Personalized Care",
    },
  ],

  cta: {
    text: "Explore The Platform",
    link: "/voima-app",
  },

  video: AppDemo,
};