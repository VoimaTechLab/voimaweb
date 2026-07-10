import CTAImage from "@/assets/app/app.png";
import CommunityScreen from "@/assets/app/community.png";
import AppImage from "@/assets/app/DemoVideo.mp4";
import DashboardScreen from "@/assets/app/How_it_Works.png";
import ReminderImage from "@/assets/app/Webb_white.jpg";

import { Bell, HeartPulse, Users } from "lucide-react";


// VoimaHero 

export const heroData = {
  eyebrow: "Voima App",

  title: "Healthcare support, right in your hands.",

  description:
    "Track your health, stay informed, and connect with your community.",

  primaryCTA: {
    text: "Join Waitlist",
    link: "/waitlist",
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
  title: "Medication Reminders",

  slug: "medication-reminders",

  icon: Bell,

  description:
    "Never miss a dose with intelligent reminders.",

  heroImage: ReminderImage,

  content: [
    "Medication adherence is one of the biggest challenges for individuals managing chronic conditions.",

    "Voima provides smart reminders that adapt to user schedules and preferences.",

    "Notifications help users stay on track with medications, hydration, appointments, and wellness goals."
  ],

  highlights: [
    "Custom schedules",
    "Recurring reminders",
    "Missed dose tracking",
    "Health notifications"
  ]
},
{
  title: "Pain Tracking",

  slug: "pain-tracking",

  icon: HeartPulse,

  description:
    "Never miss a dose with intelligent reminders.",

  heroImage: ReminderImage,

  content: [
    "Medication adherence is one of the biggest challenges for individuals managing chronic conditions.",

    "Voima provides smart reminders that adapt to user schedules and preferences.",

    "Notifications help users stay on track with medications, hydration, appointments, and wellness goals."
  ],

  highlights: [
    "Custom schedules",
    "Recurring reminders",
    "Missed dose tracking",
    "Health notifications"
  ]
},
{
  title: "Community Support",

  slug: "community-support",

  icon: Users,

  description:
    "Never miss a dose with intelligent reminders.",

  heroImage: ReminderImage,

  content: [
    "Medication adherence is one of the biggest challenges for individuals managing chronic conditions.",

    "Voima provides smart reminders that adapt to user schedules and preferences.",

    "Notifications help users stay on track with medications, hydration, appointments, and wellness goals."
  ],

  highlights: [
    "Custom schedules",
    "Recurring reminders",
    "Missed dose tracking",
    "Health notifications"
  ]
},
{
  title: "Medication Reminders",

  slug: "medication-reminders",

  icon: Bell,

  description:
    "Never miss a dose with intelligent reminders.",

  heroImage: ReminderImage,

  content: [
    "Medication adherence is one of the biggest challenges for individuals managing chronic conditions.",

    "Voima provides smart reminders that adapt to user schedules and preferences.",

    "Notifications help users stay on track with medications, hydration, appointments, and wellness goals."
  ],

  highlights: [
    "Custom schedules",
    "Recurring reminders",
    "Missed dose tracking",
    "Health notifications"
  ]
},
];

// AppScreens

export const appScreens = [
  {
    title: "Dashboard",
    description:
      "A complete overview of your health journey.",
    image: DashboardScreen,
  },

  {
    title: "Medication Tracking",
    description:
      "Stay on top of treatments and routines.",
    image: DashboardScreen,
  },

  {
    title: "Community",
    description:
      "Join conversations and support networks.",
    image: DashboardScreen,
  },
];

// AppBenefits

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

// FAQs

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


// HowItWorks

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  title: "Take control of your sickle cell journey.",
  description:
    "A simple experience designed to help you monitor symptoms, stay informed, and connect with support.",

  steps: [
    {
      number: "01",
      iconName: "Bell",
      title: "Create Your Profile",
      description:
        "Set up your account and personalize your health journey.",
    },
    {
      number: "02",
      iconName: "Activity",
      title: "Track Your Health",
      description:
        "Monitor symptoms and important health indicators.",
    },
    {
      number: "03",
      iconName: "Users",
      title: "Connect & Learn",
      description:
        "Access resources and engage with the community.",
    },
  ],
};


// DownloadCTA

export const downloadCTA = {
  title: "Take control of your health journey today.",
  description:
    "Track wellness, receive personalized support, connect with community, and access healthcare resources all in one place.",

  backgroundImage: CTAImage,

  primaryButton: {
    text: "Join Waitlist",
    link: "/waitlist",
  },

  secondaryButton: {
    text: "Partner With Us",
    link: "/get-involved",
  },
};
export const demoData = {
  video: AppImage,
};