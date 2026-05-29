// src/pages/CareerDetail.jsx

import { pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CareerDetail() {
  return (
    <motion.main
      {...pageTransition}
      className="bg-[#fafafa] pt-[90px]"
    >
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl">

          <span className="rounded-full bg-[#F47B3A]/10 px-5 py-2 text-sm font-medium text-[#F47B3A]">
            Internship
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-black">
            Project Manager
          </h1>

          <p className="mt-6 text-lg leading-9 text-black/65">
            Join Voima Initiative in building modern
            healthcare experiences that empower
            underserved communities.
          </p>

          {/* CONTENT */}
          <div className="mt-20 space-y-14">

            <div>
              <h2 className="text-3xl font-bold text-black">
                About The Role
              </h2>

              <p className="mt-6 leading-9 text-black/65">
                We are looking for an experienced Project Manager
                passionate about driving healthcare innovation,
                leading cross-functional teams, and delivering
                impactful solutions to underserved communities.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">
                Responsibilities
              </h2>

              <ul className="mt-6 space-y-4 text-black/65">
                <li>• Lead and coordinate project initiatives</li>
                <li>• Manage timelines and resource allocation</li>
                <li>• Facilitate cross-functional collaboration</li>
                <li>• Monitor project performance and deliverables</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-black">
                Requirements
              </h2>

              <ul className="mt-6 space-y-4 text-black/65">
                <li>• 3+ years project management experience</li>
                <li>• Strong stakeholder management skills</li>
                <li>• Agile/Scrum methodology knowledge</li>
                <li>• Passion for social impact</li>
              </ul>
            </div>

            {/* APPLY */}
            <a
              href="https://forms.gle/yourform"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3
                rounded-full bg-[#F47B3A]
                px-7 py-4 text-sm font-semibold
                text-white transition
                hover:scale-[1.02]
              "
            >
              Apply Now
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}