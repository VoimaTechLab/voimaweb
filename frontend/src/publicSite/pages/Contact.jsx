import { fadeUp, pageTransition } from "@/publicSite/motion/variants";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Phone,
    Send
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <motion.main
      {...pageTransition}
      className="overflow-hidden bg-[#ffffff] pt-[90px]"
    >
      {/* HERO */}
      <section className="relative px-6 py-24">
        
        {/* Glow 
        <div className="absolute left-[-10%] top-0 h-[320px] w-[320px] rounded-full bg-[#F47B3A]/10 blur-3xl"></div>*/}

        <div className="relative mx-auto max-w-7xl">
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F47B3A]">
              Reach Out
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-primary-800 md:text-6xl">
              Let’s build healthier communities together.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65">
              Whether you want to partner with us,
              volunteer, support our mission, or simply
              learn more about Voima Initiative, our team
              would love to hear from you.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            
            {/* LEFT SIDE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[20px] border border-black/5 bg-[#800000] p-10 text-white"
            >
              
              {/* Glow */}
              <div className="absolute right-[-60px] top-[-60px] h-[180px] w-[180px] rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative z-10">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                  Contact Information
                </p>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                  We’re here to connect, support & collaborate.
                </h2>

                <p className="mt-6 leading-8 text-white/70">
                  Our team is based in Accra, Ghana,
                  working across advocacy, research,
                  healthcare innovation, and community
                  impact initiatives.
                </p>

                {/* INFO */}
                <div className="mt-12 space-y-8">
                  
                  {[
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Accra, Ghana",
                    },
                    {
                      icon: Mail,
                      label: "Email Address",
                      value: "info@voimainitiative.com",
                      href: "mailto:info@voimainitiative.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone Number",
                      value: "+1 603 276 9673",
                      href: "tel:+16032769673",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start gap-5"
                      >
                        <div
                          className="
                            flex h-14 w-14 items-center justify-center
                            rounded-2xl bg-white/10
                            backdrop-blur-xl
                          "
                        >
                          <Icon size={22} />
                        </div>

                        <div>
                          <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                            {item.label}
                          </p>

                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-2 block text-lg font-medium text-white transition hover:text-[#F47B3A]"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-2 text-lg font-medium text-white">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Banner */}
                <div
                  className="
                    mt-12 rounded-[20px]
                    border border-white/10
                    bg-white/10 p-6
                    backdrop-blur-xl
                  "
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                    Response Time
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    Within 24–48 Hours
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    We aim to respond quickly to every
                    message and partnership inquiry.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {status === "success" ? (
                <div
                  className="
                    flex h-full flex-col items-center justify-center
                    rounded-[18px] border border-black/5
                    bg-white p-14 text-center
                    shadow-[0_20px_80px_rgba(0,0,0,0.05)]
                  "
                >
                  <div
                    className="
                      flex h-20 w-20 items-center justify-center
                      rounded-full bg-[#F47B3A]/10
                    "
                  >
                    <Send
                      size={32}
                      className="text-[#F47B3A]"
                    />
                  </div>

                  <h3 className="mt-8 text-4xl font-bold text-black">
                    Message Sent
                  </h3>

                  <p className="mt-5 max-w-md leading-8 text-black/60">
                    Thank you for reaching out to Voima
                    Initiative. A member of our team
                    will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="
                    rounded-[40px]
                    border border-black/5
                    bg-white p-10
                    shadow-[0_20px_80px_rgba(0,0,0,0.05)]
                  "
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    
                    {/* NAME */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold text-black">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="
                          h-14 w-full rounded-2xl
                          border border-black/10
                          bg-[#fafafa] px-5
                          text-sm outline-none
                          transition focus:border-[#F47B3A]
                        "
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="mb-3 block text-sm font-semibold text-black">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="
                          h-14 w-full rounded-2xl
                          border border-black/10
                          bg-[#fafafa] px-5
                          text-sm outline-none
                          transition focus:border-[#F47B3A]
                        "
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="mt-6">
                    <label className="mb-3 block text-sm font-semibold text-black">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="
                        h-14 w-full rounded-2xl
                        border border-black/10
                        bg-[#fafafa] px-5
                        text-sm outline-none
                        transition focus:border-[#F47B3A]
                      "
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="mt-6">
                    <label className="mb-3 block text-sm font-semibold text-black">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more..."
                      required
                      className="
                        w-full rounded-[28px]
                        border border-black/10
                        bg-[#fafafa] p-5
                        text-sm outline-none
                        transition focus:border-[#F47B3A]
                      "
                    />
                  </div>

                  {/* BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
                      mt-8 flex w-full items-center justify-center gap-3
                      rounded-2xl bg-[#F47B3A]
                      px-7 py-5 text-sm font-semibold
                      text-white transition-all duration-300
                      hover:scale-[1.01]
                      hover:bg-[#de6c2f]
                      disabled:cursor-not-allowed
                      disabled:opacity-70
                    "
                  >
                    {status === "loading" ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}