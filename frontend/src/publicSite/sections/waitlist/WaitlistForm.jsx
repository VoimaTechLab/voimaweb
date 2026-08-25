import { waitlistFormFields } from "@/publicSite/data/waitlistData";
import { waitlistService } from "@/services/waitlistService";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      email: formData.email || "",
      phone: formData.phone || "",
      location: formData.location || formData.country || "",
      role: formData.role || "",
    };
    if (!payload.email.trim()) {
      setError("Please provide your email.");
      return;
    }

    setStatus("loading");
    try {
      await waitlistService.join(payload);
      setStatus("success");
      setFormData({
        email: "",
        phone: "",
        location: "",
        role: "",
      });
    } catch (err) {
      setStatus("error");
      setError(err?.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="px-6 py-24 bg-white border-b-4 border-black">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal variant="scale-in">
          <div className="overflow-hidden border-4 border-black bg-white shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)] lg:grid lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT PANEL */}
            <div className="bg-[#BC1D26] p-6 sm:p-10 lg:p-12 text-white border-b-4 border-black lg:border-b-0 lg:border-r-4">
              <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 shadow-[3px_3px_0px_rgba(0,0,0,0.3)] mb-6">
                <ShieldCheck size={18} className="text-[#BC1D26]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#BC1D26]">Early Access</span>
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight text-white font-heading">
                Join the Voima Waitlist
              </h2>

              <p className="mt-4 sm:mt-6 text-white/90 leading-7 sm:leading-8 font-semibold text-sm sm:text-base">
                Be among the first to access the Voima App and receive updates about
                healthcare resources, community support, awareness campaigns and upcoming releases.
              </p>

              <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
                {[
                  "Priority access before public launch",
                  "Exclusive product updates",
                  "Community support opportunities",
                  "Healthcare education resources",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-3 w-3 bg-white border border-black shrink-0" />
                    <p className="text-white/95 font-semibold text-xs sm:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="p-6 sm:p-10 lg:p-12">
              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-8">
                  <div className="flex h-20 w-20 items-center justify-center border-4 border-black bg-[#BC1D26] shadow-[4px_4px_0px_rgba(0,0,0,1)] text-white">
                    <ShieldCheck size={36} />
                  </div>
                  <h3 className="mt-8 text-3xl font-black uppercase text-black font-heading">You're on the list! 🎉</h3>
                  <p className="mt-4 max-w-sm leading-8 text-black/75 font-semibold">
                    Thanks for joining. We'll notify you the moment the Voima App is ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {waitlistFormFields.map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="mb-2 block text-xs font-black uppercase tracking-wider text-black">
                        {field.label}
                        {field.required && <span className="ml-1 text-[#BC1D26]">*</span>}
                      </label>

                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          required={field.required}
                          className="h-14 w-full border-2 border-black bg-white px-4 font-semibold text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] outline-none transition focus:shadow-[6px_6px_0px_rgba(188,29,38,1)] appearance-none cursor-pointer"
                        >
                          <option value="" className="text-black/50">Select an option</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option} className="text-black bg-white">
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          value={formData[field.name] || ""}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.label}
                          className="h-14 w-full border-2 border-black px-4 font-semibold text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] outline-none transition focus:shadow-[6px_6px_0px_rgba(188,29,38,1)]"
                        />
                      )}
                    </div>
                  ))}

                  {error && (
                    <p className="border-2 border-black bg-[#BC1D26]/10 px-4 py-3 text-sm font-black text-[#BC1D26]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 border-2 border-black bg-[#BC1D26] py-4 text-sm font-black uppercase tracking-wider text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : (<>Join Waitlist <ArrowRight size={18} /></>)}
                  </button>

                  <p className="text-center text-xs font-semibold text-black/60">
                    We respect your privacy and will never spam you.
                  </p>
                </form>
              )}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}