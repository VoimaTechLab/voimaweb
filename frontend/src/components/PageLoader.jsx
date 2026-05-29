import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff]">
      
      <div className="flex flex-col items-center gap-6">

        {/* Spinner */}
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-white/20 border-t-[#A11922]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
          }}
          className="text-black/70 tracking-[0.2em] uppercase text-sm"
        >
          VOIMA WEBSITE
        </motion.p>

      </div>

    </div>
  );
}