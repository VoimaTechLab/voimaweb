import CTAImage from "@/assets/app/app.png";
import AppImage from "@/assets/app/DemoVideo.mp4";
import DashboardScreen from "@/assets/app/How_it_works.png";
import BackScreen from "@/assets/app/profile1.png";
import ToolAppImg from "@/assets/tools/tool_app.jpg";
import ToolScreeningImg from "@/assets/tools/tool_screening.jpg";
import TraceTechImg from "@/assets/programs/trace_tech.jpg";
import TraceResearchImg from "@/assets/programs/trace_research.jpg";
import StoryAminaImg from "@/assets/impact/story_amina.jpg";
import NewsCommunityImg from "@/assets/news/news_community.png";
import ReminderImage from "@/assets/app/Webb_white.jpg";

import { Activity, Bell, Bot, Brain, HeartPulse, Shield, Users } from "lucide-react";

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
    frontScreen: DashboardScreen,
    backScreen: BackScreen,
  },
};

export const features = [
  {
    title: "Crisis Risk Alerts",
    slug: "crisis-risk-alerts",
    icon: Brain,
    iconName: "Brain",
    description:
      "Receive early warnings when your health patterns suggest rising sickle cell crisis risk.",
    heroImage: TraceTechImg,
    content: [
      "Sickle cell crises rarely occur without warning—triggers like temperature shifts, dehydration, fatigue, and stress accumulate over time.",
      "Voima analyzes daily health check-ins and symptom patterns to alert users when their crisis risk index rises.",
      "Timely notifications empower individuals and caregivers to take proactive preventive measures before severe pain sets in."
    ],
    highlights: [
      "Proactive crisis risk warnings",
      "Trigger pattern detection",
      "Environmental & weather alerts",
      "Preventive action guidance"
    ]
  },
  {
    title: "Pain & Trigger Tracking",
    slug: "pain-trigger-tracking",
    icon: HeartPulse,
    iconName: "HeartPulse",
    description:
      "Understand what triggers pain episodes and how your body responds over time.",
    heroImage: ToolScreeningImg,
    content: [
      "Tracking pain severity and bodily locations provides critical insight into individual sickle cell patterns.",
      "Log pain episodes using standardized visual scales, pinpoint anatomical locations, and record suspected environmental triggers.",
      "Historical data helps users and clinical teams identify personal trends, treatment efficacy, and recovery timelines."
    ],
    highlights: [
      "Interactive body pain mapping",
      "Pain severity scale logs",
      "Trigger identification",
      "Historical episode trends"
    ]
  },
  {
    title: "Personalized Health Insights",
    slug: "personalized-health-insights",
    icon: Bot,
    iconName: "Bot",
    description:
      "Receive insights tailored specifically to your body, habits, and health history.",
    heroImage: TraceResearchImg,
    content: [
      "Every person's journey with sickle cell disease is unique, requiring personalized care rather than generic advice.",
      "Voima's intelligent algorithms evaluate logged habits, hydration levels, and symptom history to provide customized wellness recommendations.",
      "Receive tailored guidance on hydration targets, rest cycles, and lifestyle adjustments that keep you feeling your best."
    ],
    highlights: [
      "Tailored wellness recommendations",
      "Habit & hydration analysis",
      "Custom health summaries",
      "Personalized daily tips"
    ]
  },
  {
    title: "Medication Reminders",
    slug: "medication-reminders",
    icon: Bell,
    iconName: "Bell",
    description:
      "Stay consistent with medications, supplements, and treatment routines.",
    heroImage: ToolAppImg,
    content: [
      "Maintaining a consistent medication and treatment regimen is essential for long-term health and crisis prevention.",
      "Voima provides intelligent reminder schedules tailored to hydroxyurea, penicillin prophylaxis, folic acid, and custom prescriptions.",
      "Caregivers and patients receive smart notifications that adjust for routines, time zones, and missed-dose recovery."
    ],
    highlights: [
      "Custom dosage schedules",
      "Prescription refill alerts",
      "Missed dose tracking",
      "Treatment adherence logs"
    ]
  },
  {
    title: "Caregiver Support",
    slug: "caregiver-support",
    icon: Shield,
    iconName: "Shield",
    description:
      "Keep trusted loved ones informed so they can support early and effectively.",
    heroImage: StoryAminaImg,
    content: [
      "Sickle cell care is a collaborative effort involving family members, guardians, and trusted caregivers.",
      "Voima allows patients to securely share health updates, symptom logs, and emergency notifications with designated care partners.",
      "Caregivers stay informed in real time, enabling timely support during rising risk periods or acute pain crises."
    ],
    highlights: [
      "Real-time caregiver sync",
      "Emergency alert notifications",
      "Shared health logs",
      "Secure family access"
    ]
  },
  {
    title: "Community Support",
    slug: "community-support",
    icon: Users,
    iconName: "Users",
    description:
      "Connect with fellow warriors, families, and supportive community networks.",
    heroImage: NewsCommunityImg,
    content: [
      "Living with sickle cell disease is easier when surrounded by a supportive community that understands your lived experience.",
      "Engage in moderated peer groups, exchange coping strategies, and access community-led events and resources.",
      "Voima connects warriors and families across Africa and the world to foster solidarity, hope, and collective empowerment."
    ],
    highlights: [
      "Warrior peer networks",
      "Caregiver support groups",
      "Community wellness events",
      "Shared lived experiences"
    ]
  }
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