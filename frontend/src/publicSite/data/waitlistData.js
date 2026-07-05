import Avatar1 from "@/assets/avatars/avatar-1.jpg";
import Avatar2 from "@/assets/avatars/avatar-2.jpg";
import Avatar3 from "@/assets/avatars/avatar-3.jpg";
import Avatar4 from "@/assets/avatars/avatar-4.jpg";

export const waitlistAvatars = [
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
]

export const waitlistData = {
  launchDate: "2026-12-01T00:00:00",

  eyebrow: "Voima App",

  title:
    "Your health companion for sickle cell awareness, support and community.",

  description:
    "Join the waitlist and be among the first to access the Voima App..",

  stats: {
    registered: 0,
    label: "People already on the waitlist"
  },

  form: {
    title: "Reserve Your Spot",

    description:
      "Sign up today and we'll notify you the moment Voima launches."
  },

  launchMessage: {
    title: "🎉 Voima Is Live!",

    description:
      "The wait is over. Thank you for believing in the vision. Welcome to Voima."
  }
};

export const features = [
  {
    title: "Personal Health Tracking",
    description:
      "Keep important health information organised in one place."
  },

  {
    title: "Community Support",
    description:
      "Connect with people who understand your journey."
  },

  {
    title: "Educational Resources",
    description:
      "Learn from verified information and awareness content."
  },

  {
    title: "Events & Programs",
    description:
      "Stay updated with outreach events and initiatives."
  }
];

export const waitlistFormFields = [

  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true
  },

  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: false
  },

  {
    name: "country",
    label: "Country",
    type: "text",
    required: true
  },

  {
    name: "role",
    label: "I am a...",
    type: "select",
    options: [
      "Person Living With Sickle Cell",
      "Parent / Guardian",
      "Healthcare Professional",
      "Researcher",
      "Volunteer",
      "Supporter"
    ]
  },

  {
    name: "hearAboutUs",
    label: "How did you hear about Voima?",
    type: "select",
    options: [
      "Instagram",
      "Facebook",
      "LinkedIn",
      "Friend",
      "Website",
      "Community Event",
      "Other"
    ]
  }
];
