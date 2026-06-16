import { fadeUp } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import { useGetInvolved } from "../../hooks/useGetInvolved";

export default function GetInvolvedHero() {
  const { heroData } = useGetInvolved();
  return (
    <section className="relative px-6 py-28">

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
            {heroData.eyebrow}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#BC1D26] md:text-7xl">
            {heroData.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65">
            {heroData.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
}