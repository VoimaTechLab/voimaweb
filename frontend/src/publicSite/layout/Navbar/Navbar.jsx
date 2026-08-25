import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Journey", href: "/our-journey" },
  { label: "Voima App", href: "/voima-app" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`
          fixed left-0 top-0 z-50 w-full
          bg-white
          transition-all duration-300
          ${scrolled ? "shadow-[0_8px_0px_rgba(0,0,0,1)]" : "shadow-[0_4px_0px_rgba(0,0,0,1)]"}
        `}
      >
        {/* Sleek Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full h-2 sm:h-3 translate-y-full pointer-events-none z-[-1]">
          <svg viewBox="0 -2 1200 16" preserveAspectRatio="none" className="w-full h-full block overflow-visible">
            {/* White fill */}
            <polygon points="0,0 280,8 600,2 920,9 1200,4 1200,-6 0,-6" fill="white" />
            {/* Black stroke */}
            <polyline points="0,0 280,8 600,2 920,9 1200,4" fill="none" stroke="black" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="miter" />
          </svg>
        </div>
        <div
          className={`
            mx-auto flex max-w-7xl items-center
            px-6 md:px-10 transition-all duration-300
            ${scrolled ? "h-[56px]" : "h-[68px] sm:h-[72px]"}
          `}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className="text-3xl font-black tracking-tight font-display text-[#BC1D26] hover:text-black transition-colors duration-200"
          >
            Voima
          </Link>

          {/* Desktop Nav */}
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `
                    relative px-4 py-2 text-sm font-black uppercase tracking-wide
                    transition-all duration-150
                    ${
                      isActive
                        ? "bg-[#BC1D26] text-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                        : "text-black hover:bg-black hover:text-white border-2 border-transparent hover:border-black"
                    }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/get-involved"
            className="
              group
              ml-6 hidden items-center gap-2
              bg-[#BC1D26] text-white
              border-2 border-black
              px-6 py-3
              text-sm font-black uppercase tracking-wide
              shadow-[4px_4px_0px_rgba(0,0,0,1)]
              transition-all duration-150
              hover:-translate-y-0.5
              hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
              md:flex
            "
          >
            Get Involved
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              ml-auto flex items-center justify-center
              h-11 w-11
              border-2 border-black
              bg-white text-black
              shadow-[3px_3px_0px_rgba(0,0,0,1)]
              md:hidden
              hover:bg-black hover:text-white
              transition-all duration-150
            "
            aria-label="Open Menu"
          >
            <Menu size={22} />
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
              className="fixed inset-0 z-[90] bg-black/60"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="
                fixed right-0 top-0 z-[100]
                flex h-screen w-[85vw] max-w-[320px]
                flex-col
                bg-white
                border-l-4 border-black
                shadow-[-8px_0px_0px_rgba(0,0,0,1)]
                p-8
              "
            >
              {/* Drawer Header */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-2xl font-black uppercase tracking-tight text-[#BC1D26]">
                  Voima
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex h-10 w-10 items-center justify-center
                    border-2 border-black bg-white text-black
                    shadow-[3px_3px_0px_rgba(0,0,0,1)]
                    hover:bg-black hover:text-white
                    transition-all duration-150
                  "
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    end={link.href === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `
                        px-5 py-3.5
                        text-sm font-black uppercase tracking-wide
                        border-2 transition-all duration-150
                        ${
                          isActive
                            ? "bg-[#BC1D26] text-white border-black shadow-[3px_3px_0px_rgba(0,0,0,1)]"
                            : "text-black border-transparent hover:bg-black hover:text-white hover:border-black"
                        }
                      `
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                to="/get-involved"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-auto flex items-center justify-center gap-2
                  bg-[#BC1D26] text-white
                  border-2 border-black
                  px-5 py-4
                  text-sm font-black uppercase tracking-wide
                  shadow-[4px_4px_0px_rgba(0,0,0,1)]
                  hover:-translate-y-0.5
                  hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                  transition-all duration-150
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