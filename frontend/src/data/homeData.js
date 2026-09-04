import Hero09 from "@/assets/Hero/hero09.png";
import Burden195K from "@/assets/impact/burden_195k.png";
import Burden24M from "@/assets/impact/burden_24m.png";
import Burden500K from "@/assets/impact/burden_500k.png";
import Burden6M from "@/assets/impact/burden_6m.png";
import StoryAdvocate from "@/assets/impact/story_advocate.jpg";
import StoryAmina from "@/assets/impact/story_amina.jpg";
import StoryMensah from "@/assets/impact/story_mensah.jpg";
import NewsAiImage from "@/assets/news/news_ai.png";
import NewsCommunityImage from "@/assets/news/news_community.png";
import NewsYouthImage from "@/assets/news/news_youth.png";
import SdgBackgroundImage from "@/assets/ourImpact.png";
import CommunityImg from "@/assets/programs/prog_support.jpg";
import AdvocacyImg from "@/assets/programs/trace_advocacy.jpg";
import ResearchImg from "@/assets/programs/trace_research.jpg";
import TechImg from "@/assets/programs/trace_tech.jpg";
import Reach15kImg from "@/assets/reach/reach_15k.jpg";
import Reach80Img from "@/assets/reach/reach_80.jpg";
import Reach500Img from "@/assets/tools/tool_app.jpg";
import Reach350Img from "@/assets/tools/tool_screening.jpg";
import EducationImg from "@/assets/tools/tool_training.jpg";
import VoimaAppDemo from "@/assets/Voima_App_Demo.mp4";
import { default as ImpactVideo } from "@/assets/voima_website_prototype (2).mp4";

export const heroSlides = [
  {
    id: "ai-powered-care-support",
    eyebrow: "AI-Powered Care Support",
    titleBefore: "Transforming",
    titleAfter: "Chronic Care Management",
    description:
      "Voima is an AI-powered personalized companion helping people living with chronic conditions, starting with sickle cell disease, understand rising health risks early, take preventive action, and escalate care when needed before crises happen through proactive support, timely insights, and community-driven care.",
    primaryBtn: "Join Waitlist",
    primaryLink: "/waitlist",
    secondaryBtn: "Learn More",
    secondaryLink: "/about",
  },

  {
    id: "why-voima-exists",
    eyebrow: "Why Voima Exists",
    titleBefore: "Health Crises Don't Start",
    titleAfter: "When the Pain Starts",
    description:
      "Sickle cell crises rarely happen without warning. Triggers like stress, dehydration, weather, and poor sleep build over time. Voima helps detect risks early so action can happen fast before crisis strikes.",
    primaryBtn: "Our Mission",
    primaryLink: "/about",
    secondaryBtn: "See Impact",
    secondaryLink: "/our-journey",
  },

  {
    id: "beyond-awareness",
    eyebrow: "Beyond Awareness",
    titleBefore: "Patients Aren't Failing",
    titleAfter: "The System Is",
    description:
      "Millions live with chronic disease, yet care remains reactive. Voima combines technology, research, advocacy, and community support to build a future of proactive care.",
    primaryBtn: "Partner With Us",
    primaryLink: "/get-involved",
    secondaryBtn: "Get Involved",
    secondaryLink: "/get-involved",
  },
];

export const whoIsVoima = {
  title: "WHAT IS",
  titleAccent: "VOIMA?",

  heading:
    "We’re a global healthcare non-profit supporting the next generation of patients, caregivers, and medical leaders to tackle sickle cell disease in new ways.",

  description:
    "We empower community health workers and families through engaging digital symptom tracking, early infant diagnostic screening, and regional clinic outreach to move your ideas for change forward!",

  cta: {
    text: "LEARN MORE",
    link: "/about",
  },

  socialChannels: [
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/voimainitiative",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/company/voimainitiative",
    },
    {
      name: "FACEBOOK",
      href: "https://www.facebook.com/voimainitiative",
    },
    {
      name: "X",
      href: "https://x.com/voimainitiative",
    },
  ],

  image: null,
};

// OUR STORY HOME
export const storySection = {
  eyebrow: "Our Story",

  title:
    "A mission born from loss, driven by the need for better care.",

  paragraphs: [
    "For millions living with sickle cell disease, pain crises are often treated as sudden and unpredictable. But in reality, these crises frequently build over time through patterns, triggers, and warning signs that go unnoticed until it is too late.",

    "This reality became deeply personal to Voima's founder through the loss of a close friend, Elijah, who lived with sickle cell disease. Despite his strength and resilience, Elijah endured repeated pain crises and the burden of navigating a healthcare system that often responded only after his condition had worsened.",

    "His story revealed a painful truth: sickle cell care is still largely reactive. Voima was created from the belief that care should begin long before pain becomes a crisis. By combining technology, research, advocacy, and community support, we are building a future where people living with sickle cell disease can detect risks earlier, act sooner, and live healthier lives.",
  ],

  quote:
    "Health crises do not start when the pain starts. Early action changes outcomes.",

  cta: {
    text: "Read our Journey",
    link: "/our-journey",
  },

  image: null,
};


// OUR IMPACT SECTION
export const impactSection = {
  eyebrow: "The Burden",

  title:
    "The burden of sickle cell disease demands earlier intervention.",

  areas: [
    {
      title: "6M+",
      description:
        "Over 6 million people live with sickle cell disease across Africa, yet many lack access to continuous, personalized healthcare.",
      image: Burden6M,
      backTitle: "Closing the Care Gap",
      backStory:
        "Over 6 million people live with sickle cell disease across Africa, yet many lack access to continuous, personalized healthcare.",
    },

    {
      title: "500K",
      description:
        "About 500,000 babies are born with sickle cell globally each year. Early newborn screening dramatically improves survival.",
      image: Burden500K,
      backTitle: "Early Infant Detection",
      backStory:
        "About 500,000 babies are born with sickle cell globally each year. Early newborn screening dramatically improves survival.",
    },

    {
      title: "24M+",
      description:
        "24M+ painful crises occur annually in Africa. Intelligent symptom monitoring helps anticipate triggers before emergencies.",
      image: Burden24M,
      backTitle: "Anticipating Pain Crises",
      backStory:
        "24M+ painful crises occur annually in Africa. Intelligent symptom monitoring helps anticipate triggers before emergencies.",
    },

    {
      title: "195K+",
      description:
        "195,000+ deaths occur yearly due to delayed detection. Training community health workers transforms long-term outcomes.",
      image: Burden195K,
      backTitle: "Saving Lives via Early Action",
      backStory:
        "195,000+ deaths occur yearly due to delayed detection. Training community health workers transforms long-term outcomes.",
    },
  ],

  banner: {
    badge: "Why It Matters",

    title: "Earlier action can change the trajectory.",

    description:
      "Sickle cell disease is not only a medical challenge. It is a community, healthcare, and systems challenge that requires earlier intervention.",

    image: Hero09,

    videoSrc: ImpactVideo,
  },
};


// STORY SHIFT SECTION 
export const storyShiftSection = {
  eyebrow: "VOIMA IMPACT SHIFTERS",
  title: "Stories of Change &",
  titleAccent: "Resilience",

  stories: [
    {
      id: "amina-baby-malik",
      quote:
        "“HAVING VOIMA'S SYMPTOM TRACKER MEANS I CAN ANTICIPATE MY SON'S CRISES BEFORE HE FALLS ILL. IT GAVE OUR FAMILY OUR LIVES BACK.”",
      author: "Amina & Baby Malik",
      meta: "Caregiver & Mother, Accra, Ghana",
      story:
        "Amina was able to detect early hydration drops and fever spikes in 2-year-old Malik, preventing emergency hospitalization through early clinic outreach.",
      badge: "Early Diagnosis",
      iconName: "HeartPulse",
      image: StoryAmina,
    },
    {
      id: "kweku-mensah",
      quote:
        "“BEFORE VOIMA, WE HAD NO REGIONAL CLINIC DATA ON SICKLE CELL CRISES. NOW WE RECEIVE REAL-TIME ALERTS AND MOBILE TESTING KITS.”",
      author: "Dr. Kweku Mensah",
      meta: "Clinical Director, Kumasi, Ghana",
      story:
        "Dr. Mensah and his team have conducted over 4,500 infant screenings using Voima's mobile healthcare protocols, reducing infant mortality by 40%.",
      badge: "Clinical Impact",
      iconName: "Stethoscope",
      image: StoryMensah,
    },
    {
      id: "kofi-mensah",
      quote:
        "“LIVING WITH SICKLE CELL USED TO MEAN LIVING IN CONSTANT FEAR OF PAIN. NOW WE HAVE A COMMUNITY THAT SUPPORTS US EVERY STEP.”",
      author: "Kofi Mensah, 24",
      meta: "Youth Patient Advocate, Accra, Ghana",
      story:
        "Kofi leads local patient workshops and uses the Voima app to log daily wellness metrics, empowering youth with sickle cell to live without limits.",
      badge: "Community Care",
      iconName: "ShieldCheck",
      image: StoryAdvocate,
    },
  ],
};

// TRACE FRAMEWORK 
export const traceFrameworkSection = {
  eyebrow: "#TRACE FRAMEWORK",

  title: "The Pillars Driving Our",

  titleAccent: "Impact.",

  description:
    "Our comprehensive methodology connects cutting-edge technology with grassroots community support, clinical research, advocacy, and education.",

  pillars: [
    {
      id: 1,
      letter: "T",
      title: "Technology",
      description:
        "Building AI-powered tools for personalized and proactive care.",
      detail:
        "Intelligent digital platforms, crisis prediction algorithms, and mobile trackers designed for real-world patient needs.",
      image: TechImg,
      badge: "AI & Digital Health",
      link: "/voima-app",
    },

    {
      id: 2,
      letter: "R",
      title: "Research",
      description:
        "Generating evidence and insights that improve prevention and health outcomes.",
      detail:
        "Collaborating with clinical partners and analyzing real-world patient data to uncover proactive intervention pathways.",
      image: ResearchImg,
      badge: "Clinical Evidence",
      link: "/about",
    },

    {
      id: 3,
      letter: "A",
      title: "Advocacy",
      description:
        "Driving awareness and stronger conversations around proactive care and health equity.",
      detail:
        "Elevating sickle cell disease priorities across public health agendas, policy forums, and global healthcare dialogues.",
      image: AdvocacyImg,
      badge: "Policy & Awareness",
      link: "/events",
    },

    {
      id: 4,
      letter: "C",
      title: "Community",
      description:
        "Creating support systems for patients, caregivers, and families.",
      detail:
        "Building safe, empowering spaces where lived experiences are shared and care circles provide continuous support.",
      image: CommunityImg,
      badge: "Caregiver Networks",
      link: "/get-involved",
    },

    {
      id: 5,
      letter: "E",
      title: "Education",
      description:
        "Providing accessible health knowledge that empowers better decisions.",
      detail:
        "Equipping patients, caregivers, and grassroots health workers with practical medical literacy and prevention guides.",
      image: EducationImg,
      badge: "Health Literacy",
      link: "/blog",
    },
  ],
};

// GLOBAL REACH
export const globalReachSection = {
  eyebrow: "REGIONAL REACH & IMPACT",

  title: "Mobilizing Care Across",

  titleAccent: "Sub-Saharan Africa",

  description:
    "Voima Initiative works on the ground with regional healthcare networks, rural clinic outreach teams, and community advocates.",

  stats: [
    {
      id: 1,
      value: "15K+",
      number: 15,
      suffix: "K+",
      label: "Reached",
      description:
        "Through awareness campaigns, outreach programs, and education.",
      detail:
        "Direct patient outreach, community health workshops, and educational screenings spanning multiple regional clusters.",
      badge: "Public Outreach",
      image: Reach15kImg,
    },
    {
      id: 2,
      value: "80+",
      number: 80,
      suffix: "+",
      label: "Interviews",
      description:
        "Deep conversations with patients and caregivers shaping our product.",
      detail:
        "Qualitative research gathering real-world clinical stories and daily SCD pain tracking challenges.",
      badge: "Patient Insights",
      image: Reach80Img,
    },
    {
      id: 3,
      value: "350+",
      number: 350,
      suffix: "+",
      label: "Community Members",
      description:
        "Growing community supporting better sickle cell care.",
      detail:
        "Active network of patients, advocates, family caregivers, and grassroots healthcare volunteers.",
      badge: "Advocacy Network",
      image: Reach350Img,
    },
    {
      id: 4,
      value: "500+",
      number: 500,
      suffix: "+",
      label: "Waitlist Signups",
      description:
        "Strong demand for proactive sickle cell support.",
      detail:
        "Early adoption pipeline from individuals seeking smart digital crisis tracking tools and care alerts.",
      badge: "Early Access",
      image: Reach500Img,
    },
  ],
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

// APP SHOWCASE SECTION DATA
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
  videoSrc: VoimaAppDemo,
};

export const impactStatsSection = {
  eyebrow: "OUR IMPACT",
  title: "Creating measurable change across sickle cell communities.",
  description:
    "Every conversation, partnership, and initiative brings us closer to transforming sickle cell care in Africa.",

  stats: [
    {
      title: "15K+ Reached",
      description:
        "Through awareness campaigns, outreach programs, and education.",
    },
    {
      title: "80+ Interviews",
      description:
        "Deep conversations with patients and caregivers shaping our product.",
    },
    {
      title: "350+ Community Members",
      description:
        "Growing community supporting better sickle cell care.",
    },
    {
      title: "500+ Waitlist Signups",
      description:
        "Strong demand for proactive sickle cell support.",
    },
  ],
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
    "Join us in building a future where sickle cell care becomes proactive, accessible, and life-changing.",
  description:
    "Whether you are a patient, caregiver, clinician, researcher, or partner, there is a place for you in building the future of sickle cell care with Voima.",
  primaryCta: {
    text: "Get Involved",
    link: "/get-involved",
  },
  secondaryCta: {
    text: "Partner With Us",
    link: "/get-involved",
  },
};

// PROGRAMS PREVIEW SECTION
export const programsPreviewSection = {
  eyebrow: "OUR EVENTS",
  title: "Programs Creating Real Impact",
  description:
    "From technology and research to advocacy and community support, our programs are designed to make sickle cell care more proactive and accessible.",
};
//not in use because there is  programs preview section //
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
      image: NewsAiImage,
      description:
        "Voima Initiative introduces intelligent healthcare support tools designed to help individuals living with sickle cell disease manage symptoms proactively.",
    },
    {
      title: "Community Outreach Program Reaches Hundreds",
      date: "April 30, 2026",
      image: NewsCommunityImage,
      description:
        "Healthcare education and awareness campaigns continue expanding access to information and support across underserved communities.",
    },
    {
      title: "Youth Leaders Join Healthcare Innovation Summit",
      date: "April 12, 2026",
      image: NewsYouthImage,
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

export const faqSection = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",

  title: "Got Questions? We Have Answers",

  faqs: [
    {
      question: "What is the Voima Initiative?",
      answer:
        "Voima Initiative is a healthcare organization and digital platform dedicated to transforming sickle cell disease outcomes in Africa through early infant screening, AI crisis prediction tools, and regional clinic outreach.",
    },

    {
      question: "How does the Voima Mobile App anticipate pain crises?",
      answer:
        "The Voima app tracks daily hydration levels, weather/temperature triggers, and early symptom logs to send personalized preventive guidance and emergency alerts to caregivers before a pain crisis escalates.",
    },

    {
      question: "How can clinics and health workers partner with Voima?",
      answer:
        "Healthcare facilities can join our partner network to receive rapid newborn screening protocols, diagnostic kits, and digital patient management tools. Visit our Get Involved page to sign up.",
    },

    {
      question: "Is patient data safe and private on the Voima platform?",
      answer:
        "Yes. All medical logs and patient records are encrypted end-to-end using strict HIPAA and GDPR compliant health data security standards.",
    },

    {
      question: "How can I support or donate to Voima Initiative?",
      answer:
        "You can support our mission by sponsoring newborn screening kits, funding community health worker training workshops, or partnering as an institutional donor. Contact us or visit our Get Involved page.",
    },
  ],
};

// DATA FOR NEW SECTIONS IN HOME PAGE

/*whoIsVoima
export const whoIsVoimaSection = {
  title: ["WHAT IS", "VOIMA?"],

  mission:
    "We’re a global healthcare non-profit supporting the next generation of patients, caregivers, and medical leaders to tackle sickle cell disease in new ways.",

  description:
    "We empower community health workers and families through engaging digital symptom tracking, early infant diagnostic screening, and regional clinic outreach to move your ideas for change forward!",

  cta: {
    label: "LEARN MORE",
    href: "/about",
  },

  socialChannels: [
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/voimainitiative",
    },
    {
      name: "LINKEDIN",
      href: "https://www.linkedin.com/company/voimainitiative",
    },
    {
      name: "FACEBOOK",
      href: "https://www.facebook.com/voimainitiative",
    },
    {
      name: "X",
      href: "https://x.com/voimainitiative",
    },
  ],

  image: Voima2,
  imageAlt: "Voima Initiative Community",
};*/


/* ourStoryHomeSection
export const ourStoryHomeSection = {
  eyebrow: "Our Story",

  quote:
    "Health crises do not start when the pain starts. Early action changes outcomes.",

  title:
    "A mission born from loss, driven by the need for better care.",

  paragraphs: [
    "For millions living with sickle cell disease, pain crises are often treated as sudden and unpredictable. But in reality, these crises frequently build over time through patterns, triggers, and warning signs that go unnoticed until it is too late.",

    "This reality became deeply personal to Voima's founder through the loss of a close friend, Elijah, who lived with sickle cell disease. Despite his strength and resilience, Elijah endured repeated pain crises and the burden of navigating a healthcare system that often responded only after his condition had worsened.",

    "His story revealed a painful truth: sickle cell care is still largely reactive. Voima was created from the belief that care should begin long before pain becomes a crisis. By combining technology, research, advocacy, and community support, we are building a future where people living with sickle cell disease can detect risks earlier, act sooner, and live healthier lives.",
  ],

  cta: {
    text: "Read our Journey",
    link: "/our-journey",
  },

  image: LeaderImage,
  imageAlt: "Voima Leader",
};*/