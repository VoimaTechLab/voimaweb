import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/journey" },
  { label: "Events", href: "/events" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-500
          ${
            scrolled
              ? `
                bg-white/75
                backdrop-blur-2xl
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                border-b border-black/5
                rounded-b-[18px]
              `
              : `
                bg-white
                rounded-b-[8px]
              `
          }
        `}
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center
            px-20 transition-all duration-500
            ${
              scrolled
                ? "h-[60px]"
                : "h-[80px]"
            }
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            className={`
              text-3xl font-bold tracking-tight font-display
              transition-colors duration-300
              ${
                scrolled
                  ? "text-[#A11922]"
                  : "text-[#BC1D26]"
              }
            `}
          >
            Voima 
          </Link>

          {/* Desktop Nav */}
          <nav className="ml-auto hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `
                    relative text-sm font-medium transition-all duration-300
                    ${
                      scrolled
                        ? "text-[#800000] hover:text-black"
                        : "text-primary-700 hover:text-maroon"
                    }
                    ${isActive ? "text-[#111]" : "#800020"}
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link
            to="/get-involved"
            className="
              ml-8 hidden items-center gap-2
              rounded-full bg-[#BC1D26]
              px-5 py-3 text-sm font-semibold
              text-white transition-all duration-300
              hover:scale-[1.03]
              hover:bg-[#BC1D26]/90
              md:flex
            "
          >
            Get Involved
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`
              ml-auto flex md:hidden
              transition-colors duration-300
              ${
                scrolled
                  ? "text-black"
                  : "text-white"
              }
            `}
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed inset-0 z-[90]
                bg-black/40 backdrop-blur-sm
              "
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 260,
              }}
              className="
                fixed right-0 top-0 z-[100]
                flex h-screen w-[320px]
                flex-col bg-white p-8
              "
            >
              <div className="mb-12 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#BC1D26] font-display">
                  Voima
                </h2>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-black"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        rounded-2xl px-5 py-4
                        text-base font-medium transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#BC1D26]/10 text-[#BC1D26]"
                            : "text-black/70 hover:bg-black/5"
                        }
                      `
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <Link
                to="/get-involved"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-auto flex items-center justify-center gap-2
                  rounded-2xl bg-[#BC1D26]
                  px-5 py-4 text-sm font-semibold
                  text-white transition-all duration-300
                  hover:bg-[#BC1D26]/90
                "
              >
                Get Involved
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}