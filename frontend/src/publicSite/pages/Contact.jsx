import ContactForm from "@/forms/ContactForm/ContactForm";

import {
  contactHero,
  officeInfo,
  socialLinks
} from "@/publicSite/data/contactData";

export default function Contact() {
  return (
    <main className="overflow-hidden pt-[90px]">

      {/* Hero */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
              {contactHero.eyebrow}
            </p>

            <h1 className="mt-6 text-6xl font-bold leading-tight text-[#BC1D26]">
              {contactHero.title}
            </h1>

            <p className="mt-8 text-lg leading-9 text-black/65">
              {contactHero.description}
            </p>
          </div>

        </div>
      </section>

      {/* Contact Methods 
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

          {contactMethods.map((method, index) => {
            const Icon = iconMap[method.icon];

            return (
              <div
                key={index}
                className="
                  rounded-[32px]
                  border border-black/5
                  bg-white
                  p-8
                  shadow-sm
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-2xl
                    bg-[#BC1D26]/10
                    text-[#BC1D26]
                  "
                >
                  {Icon && <Icon size={24} />}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#BC1D26]">
                  {method.title}
                </h3>

                <p className="mt-2 font-medium text-black">
                  {method.value}
                </p>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {method.description}
                </p>
              </div>
            );
          })}

        </div>
      </section>*/}

      {/* Contact Form + Info */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

          {/* Contact Form */}
          <ContactForm />

          {/* Office Information */}
          <div>

            <h2 className="text-4xl font-bold text-[#BC1D26]">
              Visit or Reach Out
            </h2>

            <div className="mt-10 space-y-8">

              <div>
                <h3 className="font-semibold text-black">
                  Organization
                </h3>

                <p className="mt-2 text-black/65">
                  {officeInfo.title}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">
                  Address
                </h3>

                <div className="mt-2 space-y-1 text-black/65">
                  {officeInfo.address.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-black">
                  Email
                </h3>

                <p className="mt-2 text-black/65">
                  {officeInfo.email}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-black">
                  Phone
                </h3>

                <p className="mt-2 text-black/65">
                  {officeInfo.phone}
                </p>
              </div>

            </div>

            {/* Socials */}
            <div className="mt-12">

              <h3 className="font-semibold text-black">
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
                      rounded-full
                      border border-black/10
                      px-5 py-3
                      text-sm font-medium
                      transition
                      hover:bg-[#BC1D26]
                      hover:text-[#fff]
                    "
                  >
                    {social.name}
                  </a>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}