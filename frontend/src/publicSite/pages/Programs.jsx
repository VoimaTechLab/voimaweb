import {
    fadeUp,
    pageTransition,
    stagger,
} from "@/publicSite/motion/variants";
import { motion } from "framer-motion";

import {
    ArrowRight,
    CalendarDays,
    FlaskConical,
    HeartHandshake,
    Megaphone,
    Microscope,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import Impact from "../../assets/ourImpact.png";

const programs = [
  {
    icon: Users,
    title: "Community Outreach",
    subtitle: "People-first healthcare support",
    description:
      "We organize outreach programs, wellness campaigns, support groups, and educational workshops that empower individuals and families affected by sickle cell disease.",
    color: "#800000",
    text: "text-white",
    iconBg: "bg-white/10",
  },

  {
    icon: FlaskConical,
    title: "Research & Advocacy",
    subtitle: "Driving evidence-based impact",
    description:
      "Voima collaborates with healthcare professionals, institutions, and researchers to advance awareness, improve healthcare policies, and support data-driven sickle cell advocacy initiatives.",
    color: "#F47B3A",
    text: "text-white",
    iconBg: "bg-white/10",
  },

  {
    icon: CalendarDays,
    title: "Events & Campaigns",
    subtitle: "Creating awareness through action",
    description:
      "From awareness walks to community conferences and wellness experiences, our events create spaces for education, connection, advocacy, and support.",
    color: "#ffffff",
    text: "text-black",
    border: "border border-black/5",
    iconBg: "bg-[#F47B3A]/10",
  },
];

const featuredEvents = [
  {
    title: "World Sickle Cell Awareness Summit",
    image: Impact ,
    category: "Conference",
  },

  {
    title: "Youth Wellness & Education Drive",
    image: Impact,
    category: "Community",
  },

  {
    title: "Healthcare Innovation Roundtable",
    image: Impact,
    category: "Research",
  },
];

export default function Programs() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-[#ffff] pt-[90px]"
    >
      {/* HERO */}
      <section className="relative px-6 py-28">
        
        {/* Glow 
        <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="relative mx-auto max-w-7xl">
          
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Our Programs
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-primary-800">
              Building sustainable healthcare impact through community,
              research & advocacy.
            </h1>

            <p className="mt-8 text-lg leading-9 text-black/65">
              Voima Initiative develops interconnected programs
              designed to improve awareness, strengthen support
              systems, and drive innovation around sickle cell
              disease and chronic healthcare challenges.
            </p>
          </div>

          {/* Program Cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-20 grid gap-8 lg:grid-cols-3"
          >
            {programs.map((program, index) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`
                    relative overflow-hidden rounded-[36px]
                    p-10 transition-all duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    ${program.border || ""}
                  `}
                  style={{
                    background: program.color,
                  }}
                >
                  
                  {/* Glow */}
                  <div className="absolute right-[-50px] top-[-50px] h-[180px] w-[180px] rounded-full bg-white/10 blur-3xl"></div>

                  <div
                    className={`
                      relative z-10 flex h-16 w-16
                      items-center justify-center
                      rounded-2xl ${program.iconBg}
                    `}
                  >
                    <Icon
                      size={30}
                      className={program.text}
                    />
                  </div>

                  <div className="relative z-10 mt-8">
                    <p
                      className={`
                        text-sm uppercase tracking-[0.2em]
                        ${
                          program.text === "text-white"
                            ? "text-white/60"
                            : "text-black/40"
                        }
                      `}
                    >
                      {program.subtitle}
                    </p>

                    <h2
                      className={`
                        mt-5 text-4xl font-bold leading-tight
                        ${program.text}
                      `}
                    >
                      {program.title}
                    </h2>

                    <p
                      className={`
                        mt-6 leading-9
                        ${
                          program.text === "text-white"
                            ? "text-white/75"
                            : "text-black/60"
                        }
                      `}
                    >
                      {program.description}
                    </p>

                    <Link
                      to="/contact"
                      className={`
                        mt-10 inline-flex items-center gap-2
                        text-sm font-semibold transition
                        ${
                          program.text === "text-white"
                            ? "text-white"
                            : "text-[#F47B3A]"
                        }
                      `}
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PROGRAM DETAILS */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
                How We Work
              </p>

              <h2 className="mt-6 text-5xl font-bold leading-tight text-primary-800">
                Programs designed for real-world impact.
              </h2>

              <p className="mt-8 text-lg leading-9 text-black/65">
                Our initiatives combine education,
                technology, research, healthcare advocacy,
                and community support to create long-term
                sustainable change.
              </p>

              <div className="mt-12 grid gap-6">
                
                {[
                  {
                    icon: HeartHandshake,
                    title: "Community Support",
                    desc:
                      "Safe spaces and support systems for families and individuals.",
                  },

                  {
                    icon: Microscope,
                    title: "Research & Innovation",
                    desc:
                      "Driving conversations around healthcare technology and data.",
                  },

                  {
                    icon: Megaphone,
                    title: "Public Advocacy",
                    desc:
                      "Increasing awareness and improving healthcare accessibility.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        flex gap-5 rounded-[28px]
                        border border-black/5
                        bg-[#ffff] p-6
                      "
                    >
                      <div
                        className="
                          flex h-14 w-14 items-center
                          justify-center rounded-2xl
                          bg-[#F47B3A]/10 text-[#F47B3A]
                        "
                      >
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-primary-800">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-8 text-black/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Banner */}
            <div
              className="
                relative overflow-hidden rounded-[40px]
                bg-[#800000] p-12 text-white
              "
            >
              
              <div className="absolute bottom-[-80px] right-[-80px] h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl"></div>

              <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                Impact Goals
              </p>

              <h3 className="mt-6 text-5xl font-bold leading-tight text-white">
                Building healthcare systems that care beyond treatment.
              </h3>

              <p className="mt-8 leading-9 text-white/75">
                We believe the future of healthcare
                must include emotional support,
                digital access, education,
                community engagement, and proactive care.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6">
                
                {[
                  "Awareness Campaigns",
                  "Community Outreach",
                  "Healthcare Advocacy",
                  "Youth Education",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      rounded-2xl border border-white/10
                      bg-white/5 px-5 py-4
                      backdrop-blur-xl
                    "
                  >
                    <p className="text-sm font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS / CMS PREVIEW */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
                Events & Updates
              </p>

              <h2 className="mt-5 text-5xl font-bold leading-tight text-black">
                Featured community experiences.
              </h2>
            </div>

            <Link
              to="/events"
              className="
                inline-flex items-center gap-2
                text-sm font-semibold text-[#F47B3A]
              "
            >
              View All Events
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Event Cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="
                  overflow-hidden rounded-[34px]
                  border border-black/5 bg-white
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#F47B3A]">
                    {event.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-black">
                    {event.title}
                  </h3>

                  <Link
                    to="/events"
                    className="
                      mt-6 inline-flex items-center gap-2
                      text-sm font-semibold text-[#800000]
                    "
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CMS NOTE */}
          <div
            className="
              mt-16 rounded-[32px]
              border border-dashed border-black/10
              bg-white p-8 text-center
            "
          >
            <p className="text-black/60">
              These sections can later be connected directly
              to the CMS (like Sanity) so events, programs,
              articles, and updates automatically appear here.
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}