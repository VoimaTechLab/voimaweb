import ContactForm from "@/forms/ContactForm/ContactForm";
import { useContact } from "@/publicSite/hooks/useContact";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import FadeStagger from "@/components/animations/FadeStagger";
import Hero33 from "@/assets/Hero/Hero33.png";

export default function Contact() {
  const { contactHero, officeInfo, socialLinks } = useContact();

  return (
    <main className="overflow-hidden pt-[90px]">
      {/* Hero */}
      <section className="px-6 pt-16 sm:pt-20 pb-0 bg-[#fafafa] border-b-4 border-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-end">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6 pb-16 sm:pb-24 pt-2 lg:pt-3 lg:self-start">
              <ScrollReveal variant="fade-down">
                <div className="inline-block bg-[#BC1D26] border-2 border-black px-5 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-2">
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-white">
                    {contactHero.eyebrow}
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-black font-heading tracking-tight">
                  {contactHero.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal variant="fade-up" delay={0.2}>
                <p className="text-base sm:text-lg leading-7 sm:leading-9 text-black/75 font-semibold max-w-2xl">
                  {contactHero.description}
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column: Hero33 Image */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-end h-full">
              <ScrollReveal variant="fade-left" className="w-full flex items-end justify-center">
                <img
                  src={Hero33}
                  alt="Connect With Us"
                  className="w-full max-w-[360px] lg:max-w-full h-auto max-h-[460px] lg:max-h-[520px] object-contain object-bottom block align-bottom drop-shadow-2xl -mb-0"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="px-6 py-12 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <ScrollReveal variant="fade-right">
            <ContactForm />
          </ScrollReveal>

          {/* Office Information */}
          <ScrollReveal variant="fade-left" delay={0.2}>
            <div className="border-4 border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-black font-heading tracking-tight">
                Visit or Reach Out
              </h2>

              <FadeStagger className="mt-10 space-y-8" staggerSpeed="fast">
                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="font-black uppercase tracking-widest text-xs text-black">
                    Organization
                  </h3>
                  <p className="mt-2 text-xl font-bold text-black">
                    {officeInfo.title}
                  </p>
                </div>

                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="font-black uppercase tracking-widest text-xs text-black">
                    Address
                  </h3>
                  <div className="mt-2 text-xl font-bold text-black space-y-1">
                    {officeInfo.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>

                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="font-black uppercase tracking-widest text-xs text-black">
                    Email
                  </h3>
                  <p className="mt-2 text-xl font-bold text-black break-all">
                    {officeInfo.email}
                  </p>
                </div>

                <div className="border-b-2 border-black/10 pb-4">
                  <h3 className="font-black uppercase tracking-widest text-xs text-black">
                    Phone
                  </h3>
                  <p className="mt-2 text-xl font-bold text-black">
                    {officeInfo.phone}
                  </p>
                </div>
              </FadeStagger>

              {/* Socials */}
              <div className="mt-10">
                <h3 className="font-black uppercase tracking-widest text-xs text-black">
                  Follow Us
                </h3>

                <div className="mt-5 flex flex-wrap gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center
                        border-2 border-black bg-[#BC1D26]
                        px-5 py-3
                        text-xs font-black uppercase tracking-wider text-white
                        shadow-[4px_4px_0px_rgba(0,0,0,1)]
                        transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)]
                      "
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}