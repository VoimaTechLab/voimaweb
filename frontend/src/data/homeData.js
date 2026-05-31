import HeroImage from "@/assets/content/app/hero-app.jpg";
import InnovationImage from "@/assets/content/app/innovation.jpg";
import JourneyStoryImage from "@/assets/content/journey/story.jpg";
import SdgBackgroundImage from "@/assets/ourImpact.png";
import StoryImage from "@/assets/ourStory.jpg";
import { default as AppDemoVideo, default as ImpactVideo } from "@/assets/voima_website_prototype.mp4";
import BlogImage from "@/assets/Web_red.jpg";
import {
  BookOpenText,
  Brain,
  BrainCircuit,
  Globe,
  HeartPulse,
  Users,
} from "lucide-react";

export const heroSlides = [
  {
    id: "preventive-care",
    eyebrow: "Building Healthier Lives Using AI",
    title: {
      before: "Fighting Sickle Cell Together",
      highlight: "Through Preventive Care.",
    },
    description:
      "Voima is building proactive and personalized support systems for people living with sickle cell disease and chronic conditions.",
    image: HeroImage,
    primaryBtn: "Explore Events",
    primaryLink: "/events",
    secondaryBtn: "Our Story",
    secondaryLink: "/our-journey",
  },
  {
    id: "human-experiences",
    eyebrow: "A Mission Rooted In Real Stories",
    title: {
      before: "Technology Inspired By",
      highlight: "Human Experiences.",
    },
    description:
      "Voima was founded after witnessing firsthand the devastating impact of sickle cell disease on families, patients, and communities.",
    image: JourneyStoryImage,
    primaryBtn: "Read Our Journey",
    primaryLink: "/our-journey",
    secondaryBtn: "About Voima",
    secondaryLink: "/about",
  },
  {
    id: "ai-powered-care",
    eyebrow: "Healthcare Innovation",
    title: {
      before: "The Future Of",
      highlight: "AI-Powered Care.",
    },
    description:
      "We are creating intelligent healthcare tools that help patients better understand their health and anticipate crises earlier.",
    image: InnovationImage,
    primaryBtn: "Explore The App",
    primaryLink: "/voima-app",
    secondaryBtn: "Contact Us",
    secondaryLink: "/contact",
  },
];

export const impactSection = {
  eyebrow: "Our Impact",
  title: "Creating measurable change across communities.",
  areas: [
    {
      icon: HeartPulse,
      title: "Patient Support",
      description:
        "Providing proactive support systems and resources for individuals living with sickle cell disease.",
      iconBgClassName: "bg-[#BC1D26]/10",
      iconColorClassName: "text-[#BC1D26]",
    },
    {
      icon: Brain,
      title: "AI Health Insights",
      description:
        "Building intelligent tools that help patients better understand symptoms, triggers, and early warning signs.",
      iconBgClassName: "bg-[#F47B3A]/10",
      iconColorClassName: "text-[#F47B3A]",
    },
    {
      icon: Globe,
      title: "Community Advocacy",
      description:
        "Raising awareness and empowering communities through education, outreach, and public engagement.",
      iconBgClassName: "bg-[#1D9E75]/10",
      iconColorClassName: "text-[#1D9E75]",
    },
    {
      icon: BookOpenText,
      title: "Education & Research",
      description:
        "Supporting healthcare education, research initiatives, and improved access to accurate medical knowledge.",
      iconBgClassName: "bg-black/5",
      iconColorClassName: "text-black",
    },
  ],
  banner: {
    badge: "Community Impact",
    title:
      "Every statistic represents a real life, a real family, and a future worth fighting for.",
    description:
      "Voima Initiative is committed to improving awareness, advocacy, early diagnosis, and access to care for sickle cell communities across Africa and beyond.",
    videoSrc: ImpactVideo,
  },
};

export const missionSection = {
  eyebrow: "Our Mission",
  title:
    "Empowering sickle cell communities through innovation, awareness, and AI-driven healthcare support.",
  steps: [
    {
      number: "01",
      title: "Awareness & Education",
      description:
        "Creating awareness around sickle cell disease through community outreach and accessible health education.",
    },
    {
      number: "02",
      title: "Early Screening",
      description:
        "Encouraging early diagnosis and preventive care to reduce avoidable complications and child mortality.",
    },
    {
      number: "03",
      title: "Voima App",
      description:
        "Building intelligent digital tools that help individuals with SCD manage care and access support.",
    },
    {
      number: "04",
      title: "Community Impact",
      description:
        "Partnering with healthcare providers, advocates, and communities to create long-term sustainable change.",
    },
  ],
};

export const storySection = {
  eyebrow: "Our Story",
  title: "Building hope through collaboration, empathy, and innovation.",
  description:
    "Born from loss and fueled by purpose, Voima was founded in 2023 by Emmanuel and young leaders to build AI-powered healthcare solutions that help people anticipate crises, understand their health, and reclaim their lives — because no one should face chronic illness alone.",
  quote:
    "Technology alone cannot solve healthcare inequality, but human-centered innovation can transform how people experience care.",
  image: StoryImage,
  imageAlt: "Voima Initiative community story",
  cta: {
    text: "Read Our Journey",
    link: "/our-journey",
  },
};

export const appShowcaseSection = {
  eyebrow: "Voima App",
  title: "Smarter support for people living with sickle cell disease.",
  description:
    "Designed with empathy and powered by AI, the Voima app combines intelligent health tracking, reminders, and proactive insights to help users better understand their bodies, reduce avoidable crises, and feel more in control. Voima transforms healthcare support into a more personal, accessible, and empowering experience for patients and families.",
  primaryCta: {
    text: "Explore The App",
    link: "/voima-app",
  },
  secondaryCta: {
    text: "Learn More",
    link: "/contact",
  },
  storeLinks: [
    { label: "App Store", link: "/voima-app", variant: "light" },
    { label: "Google Play", link: "/voima-app", variant: "dark" },
  ],
  floatingCard: {
    title: "AI Health Assistant",
    description:
      "Smart symptom tracking, reminders, crisis prevention, and personalized support.",
  },
  videoSrc: AppDemoVideo,
};

export const sdgSection = {
  eyebrow: "Sustainable Development Goals",
  title: "Supporting the United Nations Sustainable Development Goals",
  goals: [
    {
      number: "03",
      image: SdgBackgroundImage,
      color: "#4C9F38",
      title: "Good Health & Well-Being",
      description:
        "Improving awareness, early intervention, and healthcare access for individuals living with sickle cell disease.",
    },
    {
      number: "04",
      image: SdgBackgroundImage,
      color: "#C5192D",
      title: "Quality Education",
      description:
        "Providing accessible education, awareness campaigns, and health literacy programs within communities.",
    },
    {
      number: "09",
      image: SdgBackgroundImage,
      color: "#FD6925",
      title: "Industry & Innovation",
      description:
        "Leveraging AI-powered healthcare tools and digital innovation to improve patient support systems.",
    },
    {
      number: "10",
      image: SdgBackgroundImage,
      color: "#DD1367",
      title: "Reduced Inequalities",
      description:
        "Addressing healthcare disparities affecting underserved communities across Africa and beyond.",
    },
  ],
};

export const ctaSection = {
  title:
    "Join us in building a future where healthcare support is proactive, accessible, and life-changing.",
  description:
    "Through technology, advocacy, education, and community action, Voima Initiative is creating innovative healthcare solutions that empower individuals living with sickle cell disease and other chronic conditions.",
  primaryCta: {
    text: "Get Involved",
    link: "/get-involved",
  },
  secondaryCta: {
    text: "Support Our Mission",
    link: "/donate",
  },
};

export const programsPreviewSection = {
  eyebrow: "Our Programs",
  title:
    "Initiatives designed to improve healthcare access, awareness, and long-term community support.",
  description:
    "Through advocacy, education, technology, and partnerships, Voima Initiative is creating sustainable healthcare solutions for individuals living with sickle cell disease.",
  programs: [
    {
      title: "SCD Awareness Campaigns",
      description:
        "Educating communities about sickle cell disease, early detection, stigma reduction, and preventive healthcare.",
      icon: HeartPulse,
    },
    {
      title: "AI Health Support Tools",
      description:
        "Building intelligent digital tools that help individuals manage symptoms, monitor triggers, and access support earlier.",
      icon: BrainCircuit,
    },
    {
      title: "Community & Patient Support",
      description:
        "Creating support systems for patients, caregivers, and families through advocacy, outreach, and partnerships.",
      icon: Users,
    },
  ],
};

export const eventsPreviewSection = {
  eyebrow: "Upcoming Events",
  title:
    "Bringing communities together through awareness, innovation, and advocacy.",
  description:
    "Join upcoming Voima Initiative events focused on healthcare awareness, youth empowerment, community support, and AI-driven healthcare innovation.",
  events: [
    {
      date: "August 24, 2026",
      title: "SCD Community Awareness Walk",
      location: "Accra, Ghana",
      description:
        "A public awareness campaign bringing together patients, families, advocates, and healthcare professionals.",
    },
    {
      date: "September 12, 2026",
      title: "Youth Leadership & Health Summit",
      location: "Kumasi, Ghana",
      description:
        "Empowering young leaders through healthcare education, innovation, mentorship, and advocacy discussions.",
    },
    {
      date: "October 05, 2026",
      title: "AI & Healthcare Innovation Forum",
      location: "Virtual Event",
      description:
        "Exploring how artificial intelligence can improve proactive healthcare support and patient outcomes.",
    },
  ],
  banner: {
    title: "Every event is an opportunity to inspire awareness and save lives.",
    description:
      "From awareness walks to innovation forums and youth summits, Voima Initiative creates spaces where communities can connect, learn, and drive meaningful healthcare change.",
    cta: {
      text: "Explore All Events",
      link: "/events",
    },
  },
};

export const newsPreviewSection = {
  eyebrow: "Latest Blog",
  title: "Stories, innovations, and updates from our community.",
  description:
    "Stay updated with the latest initiatives, healthcare innovation, outreach programs, and impact stories from Voima Initiative.",
  articles: [
    {
      title: "Voima Launches AI-Powered SCD Support Initiative",
      date: "May 18, 2026",
      image: BlogImage,
      description:
        "Voima Initiative introduces intelligent healthcare support tools designed to help individuals living with sickle cell disease manage symptoms proactively.",
    },
    {
      title: "Community Outreach Program Reaches Hundreds",
      date: "April 30, 2026",
      image: BlogImage,
      description:
        "Healthcare education and awareness campaigns continue expanding access to information and support across underserved communities.",
    },
    {
      title: "Youth Leaders Join Healthcare Innovation Summit",
      date: "April 12, 2026",
      image: BlogImage,
      description:
        "Young innovators, advocates, and healthcare professionals gathered to discuss technology-driven healthcare solutions for chronic conditions.",
    },
  ],
  banner: {
    title:
      "Sharing stories that inspire awareness, innovation, and meaningful action.",
    description:
      "Explore the latest updates, healthcare insights, community initiatives, and stories driving change through Voima Initiative.",
    cta: {
      text: "Explore All Blog",
      link: "/blog",
    },
  },
};
