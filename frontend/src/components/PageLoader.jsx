import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff]">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Brand Logo Mark */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full border-4 border-[#BC1D26]/15 border-t-[#BC1D26]"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 1.1,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-8 h-8 rounded-full bg-[#BC1D26]/10"
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="text-[#BC1D26] tracking-[0.25em] uppercase text-xs font-bold font-display"
        >
          VOIMA INITIATIVE
        </motion.p>
      </div>
    </div>
  );
}