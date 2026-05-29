// src/components/ui/StatCard/StatCard.jsx

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

export default function StatCard({
  value,
  suffix,
  label,
  description,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const count = useCountUp(
    value,
    2000,
    isInView
  );

  return (
    <div
      ref={ref}
      className="
        group relative overflow-hidden
        rounded-[32px]
        border border-black/5
        bg-white/90
        p-10
        backdrop-blur-xl
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#F47B3A]/20
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute right-[-40px] top-[-40px]
          h-[120px] w-[120px]
          rounded-full
          bg-[#F47B3A]/10
          blur-3xl
          transition-all duration-500
          group-hover:bg-[#F47B3A]/20
        "
      />

      {/* Accent Line */}
      <div
        className="
          mb-7 h-1 w-16
          rounded-full
          bg-[#F47B3A]
        "
      />

      {/* Number */}
      <div
        className="
          flex items-end
          text-4xl font-bold
          font-display
          tracking-tight
          text-[#800000]
          md:text-5xl
        "
      >
        <span>
          {count.toLocaleString()}
        </span>

        {suffix && (
          <span className="ml-1 text-[#F47B3A]">
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <h3
        className="
          mt-5 text-xl
          font-semibold
          leading-snug
          text-[#800]
          font-display
        "
      >
        {label}
      </h3>

      {/* Description */}
      {description && (
        <p
          className="
            mt-3
            leading-7
            text-black/60
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}