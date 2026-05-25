import {
  Globe,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="rounded-t-[48px] relative overflow-hidden border-t border-white/10 bg-[#800000] text-white">
      
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-20%] h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute bottom-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-primary-400/10 blur-3xl"></div>

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-16 px-10 py-20 lg:grid-cols-5">
        
        {/* Brand Section */}
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            <div className="h-3 w-3 rounded-full bg-primary-400"></div>

            <span className="text-sm font-medium tracking-wide text-white/80">
              Voima Initiative
            </span>
          </div>

          <h2 className="mt-8 max-w-md text-4xl font-bold leading-tight text-white">
           Building Healthier lives Using AI
          </h2>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/60">
            Voima Initiative is committed to building transformative
            opportunities for communities through education, innovation,
            leadership, sustainability, and youth empowerment initiatives.
          </p>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">

            {/* Facebook */}
            <a
                href="/"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:bg-primary-400/10 hover:text-primary-400"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M22 12A10 10 0 1 0 10.5 21.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8H16l-.4 2.9h-2v7A10 10 0 0 0 22 12Z" />
                </svg>
            </a>

            {/* Instagram */}
            <a
                href="/"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:bg-primary-400/10 hover:text-primary-400"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm11 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
            </a>

            {/* LinkedIn */}
            <a
                href="/"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:bg-primary-400/10 hover:text-primary-400"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M4.98 3.5C4.98 4.9 3.86 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1 4.98 2.1 4.98 3.5ZM.5 8h4V24h-4V8Zm7 0h3.8v2.2h.1c.5-1 1.9-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.4V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.8V24h-4V8Z" />
                </svg>
            </a>

            </div>
        
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Navigation
          </h3>

          <ul className="mt-6 space-y-4 text-white/60">
            {[
              "Home",
              "About",
              "Programs",
              "Events",
              "News",
              "Contact",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="/"
                  className="group inline-flex items-center gap-2 transition hover:text-white"
                >
                  {item}

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Programs
          </h3>

          <ul className="mt-6 space-y-4 text-white/60">
            {[
              { name: "AI Healthcare", href: "/programs/ai-healthcare" },
              { name: "Education Initiatives", href: "/programs/education" },
              { name: "Community Programs", href: "/programs/community" },
              { name: "Youth Empowerment", href: "/programs/youth" },
              { name: "Sustainability", href: "/programs/sustainability" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white ">
            Contact
          </h3>

          <div className="mt-6 space-y-5 text-white/60">
            
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-primary-400" />

              <p className="leading-7">
                Accra, Ghana
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-1 text-primary-400" />

              <p className="leading-7">
                hello@voimainitiative.com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-1 text-primary-400" />

              <p className="leading-7">
                +233 00 000 0000
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-8">
            <p className="mb-4 text-sm uppercase tracking-wider text-white/40">
              Newsletter
            </p>

            <div className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-primary-50 px-5 py-4 text-sm outline-none text-black placeholder:text-black/30"
              />

              <button className="bg-primary-400 px-5 text-sm font-semibold text-black transition hover:bg-primary-500">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/40 md:flex-row">
          
          <p>
            © {new Date().getFullYear()} Voima Initiative. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="/" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="/" className="transition hover:text-white">
              Terms of Service
            </a>

            <a href="/" className="transition hover:text-white">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;