import { features } from "@/publicSite/data/voimaAppData";
import { Link } from "react-router-dom";

import { Activity, Bell, Bot, Users } from "lucide-react";

const iconMap = {Bell,Activity,Bot,Users,};

export default function AppFeatures() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl">
          <span
            className="
              inline-flex
              px-4 py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#BC1D26]
            "
          >
            Core Features
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26]">
            Everything you need in one place.
          </h2>

          <p className="mt-6 text-lg leading-9 text-black/65">
            Designed to support healthier habits,
            informed decisions, and stronger
            communities through one seamless platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-black/5
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-3
                  hover:border-[#BC1D26]/15
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-40
                    w-40
                    rounded-full
                    bg-[#BC1D26]/5
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#BC1D26]/10
                    text-[#BC1D26]
                    transition-all
                    duration-500
                    group-hover:scale-110
                    group-hover:bg-[#BC1D26]
                    group-hover:text-white
                  "
                >
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-bold text-[#BC1D26]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-black/65">
                  {feature.description}
                </p>

                {/* Footer */}
                <Link
                  to={`/voima-app/${feature.slug}`}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#BC1D26]
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  Learn More →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}