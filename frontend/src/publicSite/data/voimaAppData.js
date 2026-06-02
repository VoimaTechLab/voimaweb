import CommunityScreen from "@/assets/app/community.png";
import DashboardScreen from "@/assets/app/dashboard.png";
import AppImage from "@/assets/app/DemoVideo.mp4";

export const heroData = {
  eyebrow: "Voima App",

  title: "Healthcare support, right in your hands.",

  description:
    "Track your health, stay informed, and connect with your community.",

  primaryCTA: {
    text: "Join Waitlist",
    link: "/get-involved",
  },

  secondaryCTA: {
    text: "Watch Demo",
    link: "#demo",
  },

  showcase: {
    //frontVideo: DemoApp,
    frontScreen: DashboardScreen,
    backScreen: CommunityScreen,
  },
};

export const features = [
  {
    title: "Health Tracking",
    description:
      "Monitor symptoms, hydration, medications, and wellness habits.",
  },

  {
    title: "Smart Reminders",
    description:
      "Never miss important medications, appointments, or daily routines.",
  },

  {
    title: "AI Support",
    description:
      "Receive intelligent guidance and personalized recommendations.",
  },

  {
    title: "Community Access",
    description:
      "Connect with people, mentors, and support groups.",
  },
];

export const appScreens = [
  {
    title: "Dashboard",
    description:
      "A complete overview of your health journey.",
    image: "/screens/dashboard.png",
  },

  {
    title: "Medication Tracking",
    description:
      "Stay on top of treatments and routines.",
    image: "/screens/medication.png",
  },

  {
    title: "Community",
    description:
      "Join conversations and support networks.",
    image: "/screens/community.png",
  },
];

export const benefits = [
  {
    title: "For Patients",
    description:
      "Manage health information and daily wellness in one place.",
  },

  {
    title: "For Caregivers",
    description:
      "Support loved ones with better visibility and communication.",
  },

  {
    title: "For Communities",
    description:
      "Strengthen awareness and improve access to health education.",
  },

  {
    title: "For Healthcare Partners",
    description:
      "Expand outreach and improve community engagement.",
  },
];

export const faqs = [
  {
    question: "When will the app launch?",
    answer:
      "Voima App is currently in development and testing.",
  },

  {
    question: "Will the app be free?",
    answer:
      "Core features will be accessible to all users.",
  },

  {
    question: "Which devices will be supported?",
    answer:
      "The app is planned for both Android and iOS devices.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Create Profile",
  },

  {
    number: "02",
    title: "Track Health",
  },

  {
    number: "03",
    title: "Receive Insights",
  },
];

export const downloadCTA = {
  title:
    "Ready to experience the future of community healthcare?",

  description:
    "Join the waitlist and be among the first to explore the Voima App.",

  primaryButton: {
    text: "Join Waitlist",
    link: "/get-involved",
  },

  secondaryButton: {
    text: "Partner With Us",
    link: "/partner-with-us",
  },
};

export const demoData = {
  video: AppImage,
};