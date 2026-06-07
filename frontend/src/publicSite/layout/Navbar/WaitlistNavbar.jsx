import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WaitlistNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-3 sm:px-4">
      <motion.div
        animate={{
          maxWidth: scrolled ? 280 : 500,
          paddingLeft: scrolled ? 16 : 24,
          paddingRight: scrolled ? 16 : 24,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="
          mx-auto
          flex
          w-full
          items-center
          justify-between
          rounded-full
          border
          border-black/10
          bg-white/90
          py-3
          backdrop-blur-xl
          shadow-lg
        "
      >
        <motion.div
          animate={{
            x: scrolled ? 10 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Link
            to="/"
            className="
              font-display
              text-base
              font-bold
              tracking-wide
              text-[#BC1D26]
              sm:text-lg
            "
          >
            VOIMA
          </Link>
        </motion.div>

        <motion.div
          animate={{
            x: scrolled ? -10 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Link
            to="/voima-app"
            className="
              whitespace-nowrap
              rounded-full
              bg-[#BC1D26]
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              sm:px-5
              sm:text-sm
            "
          >
            Voima App
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}