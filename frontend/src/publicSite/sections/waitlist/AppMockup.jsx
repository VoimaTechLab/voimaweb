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

          <h2 className="mt-6 text-5xl font-bold text-[#BC1D26]">
            Healthcare support built around real life.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-black/60">
            Track wellness, receive reminders, access support,
            connect with community and stay informed.
          </p>
        </div>

        {/* Mockup Area */}

        <div className="relative mt-28 min-h-[850px]">

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
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    w-[300px]
                    rounded-[32px]
                    border
                    border-black/5
                    bg-white/90
                    p-6
                    backdrop-blur-xl
                    shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#BC1D26]/10
                    "
                  >
                    <Icon
                      size={22}
                      className="text-[#BC1D26]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#BC1D26]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {feature.description}
                  </p>
                </div>
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
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="
                    w-[300px]
                    rounded-[32px]
                    border
                    border-black/5
                    bg-white/90
                    p-6
                    backdrop-blur-xl
                    shadow-[0_15px_60px_rgba(0,0,0,0.08)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#BC1D26]/10
                    "
                  >
                    <Icon
                      size={22}
                      className="text-[#BC1D26]"
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#BC1D26]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-black/60">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}