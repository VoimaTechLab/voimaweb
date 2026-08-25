import { useWaitlist } from "@/publicSite/hooks/useWaitlist";
import {
  Bell,
  CalendarDays,
  HeartPulse,
  MessageCircleHeart,
  ShieldCheck,
  Users,
} from "lucide-react";

const leftFeatures = [
  {
    icon: HeartPulse,
    title: "Health Tracking",
    description:
      "Monitor symptoms, wellness and personal health records in one place.",
  },

  {
    icon: Bell,
    title: "Smart Reminders",
    description:
      "Never miss medication schedules, appointments or important tasks.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Records",
    description:
      "Your health information stays protected and accessible whenever needed.",
  },
];

const rightFeatures = [
  {
    icon: Users,
    title: "Community Support",
    description:
      "Connect with people who understand your journey and experiences.",
  },

  {
    icon: CalendarDays,
    title: "Events & Programs",
    description:
      "Stay updated on awareness campaigns and community initiatives.",
  },

  {
    icon: MessageCircleHeart,
    title: "Trusted Resources",
    description:
      "Access educational content and verified healthcare information.",
  },
];

const allFeatures = [...leftFeatures, ...rightFeatures];

function ExperienceCard({ feature }) {
  const Icon = feature.icon;

  return (
    <div
      className="
        group
        h-full
        w-full
        border-2
        border-black
        bg-white
        p-5
        shadow-[6px_6px_0px_rgba(0,0,0,1)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[8px_8px_0px_rgba(188,29,38,1)]
        sm:p-6
        lg:w-[300px]
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          border-2
          border-black
          bg-[#BC1D26]
          text-white
          shadow-[3px_3px_0px_rgba(0,0,0,1)]
          transition-transform
          duration-300
          group-hover:-translate-y-0.5
        "
      >
        <Icon size={22} strokeWidth={2.2} />
      </div>

      <h3 className="mt-5 text-lg font-black uppercase text-black font-heading sm:text-xl">
        {feature.title}
      </h3>

      <p className="mt-3 text-sm font-semibold leading-7 text-black/70 sm:text-base">
        {feature.description}
      </p>
    </div>
  );
}

export default function AppMockup() {
    const { appMockup } = useWaitlist();

  const {
    eyebrow,
    title,
    description,
    image,
  } = appMockup;
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-[#BC1D26]">
            The Experience
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-[#BC1D26]">
            Healthcare support built around real life.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-black/60">
            Track wellness, receive reminders, access support,
            connect with community and stay informed.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:hidden">
          {allFeatures.map((feature, index) => (
            <ExperienceCard key={index} feature={feature} />
          ))}
        </div>

        {/* Mockup Area */}

        <div className="relative mt-16 min-h-[760px] lg:mt-28 lg:min-h-[850px]">

          {/* Glow */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#BC1D26]/10
              blur-[120px]
            "
          />

          {/* LEFT FEATURES */}

          <div
            className="
              absolute
              left-12
              top-1/2
              hidden
              -translate-y-1/2
              lg:flex
              flex-col
              gap-8
            "
          >
            {leftFeatures.map((feature, index) => {
              return (
                <ExperienceCard key={index} feature={feature} />
              );
            })}
          </div>

          {/* PHONE */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              className="
                relative
                h-[720px]
                w-[345px]
                rounded-[65px]
                border-[10px]
                border-black
                bg-white
                shadow-[0_40px_120px_rgba(0,0,0,0.15)]
              "
            >

              {/* Notch 

              <div
                className="
                  absolute
                  left-1/2
                  top-3
                  h-7
                  w-36
                  -translate-x-1/2
                  rounded-full
                  bg-black
                "
              />*/}

              {/* App UI */}

              <img 
                src= {image} 
                alt= {title}
                className="h-full w-full rounded-[50px] object-cover"
              />



            </div>
          </div>

          {/* RIGHT FEATURES */}

          <div
            className="
              absolute
              right-12
              top-1/2
              hidden
              -translate-y-1/2
              lg:flex
              flex-col
              gap-8
            "
          >
            {rightFeatures.map((feature, index) => {
              return (
                <ExperienceCard key={index} feature={feature} />
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
