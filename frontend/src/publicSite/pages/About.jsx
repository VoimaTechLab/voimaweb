// src/publicSite/pages/About.jsx

import { pageTransition } from "@/publicSite/motion/variants"
import { motion } from "framer-motion"

import AboutHero from "@/publicSite/sections/about/AboutHero"
import GalleryCTA from "@/publicSite/sections/about/GalleryCTA"
import MissionVision from "@/publicSite/sections/about/MissionVision"
import StorySection from "@/publicSite/sections/about/StorySection"
import TeamSection from "@/publicSite/sections/about/TeamSection"
import TraceFramework from "@/publicSite/sections/about/TraceFramework"
import SDGSection from "../sections/home/SDGSection"

export default function About() {
  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-white pt-[90px]"
    >
      <AboutHero />

      <StorySection />

      <MissionVision />

      <SDGSection />

      <TraceFramework />

      <TeamSection />

      <GalleryCTA />
    </motion.main>
  )
}