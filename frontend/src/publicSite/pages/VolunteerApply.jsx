import { volunteerService } from "@/services/volunteerService";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useVolunteerPage } from "../hooks/useVolunteerPage";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function VolunteerApply() {
  const volunteer = useVolunteerPage();

  const {
    eyebrow,
    title,
    description,
    image,
    imageTitle,
    imageDescription,
  } = volunteer;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    motivation: "",
  });

  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.motivation.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    setStatus("loading");

    try {
      await volunteerService.apply(formData);

      setStatus("success");

      setFormData({
        fullName: "",
        email: "",
        motivation: "",
      });
    } catch (err) {
      setStatus("error");

      setError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };
  return (
    <main className="bg-[#fafafa] pt-[90px]">
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              overflow-hidden
              border-4 border-black
              bg-white
              shadow-[8px_8px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_rgba(0,0,0,1)]
              lg:grid
              lg:grid-cols-[1fr_0.9fr]
            "
          >
            {/* FORM SIDE */}
            <ScrollReveal variant="fade-right">
            <div className="p-6 sm:p-10 lg:p-14">
              <div className="inline-block bg-[#BC1D26] border-2 border-black px-4 py-1.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] mb-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                  {eyebrow}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
                {title}
              </h1>

              <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-black/75 font-semibold">
                {description}
              </p>

              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-10">
                  <div className="flex h-16 w-16 items-center justify-center border-2 border-black bg-[#BC1D26] text-white shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                    <ShieldCheck
                      size={28}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                    Application Submitted 🎉
                  </h3>

                  <p className="mt-4 max-w-sm text-base leading-7 font-semibold text-black/75">
                    Thank you for applying to volunteer with
                    Voima. We'll review your application and
                    contact you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 sm:mt-12 space-y-6"
                >
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    className="h-14 w-full border-2 border-black px-5 font-semibold outline-none transition focus:shadow-[4px_4px_0px_rgba(188,29,38,1)]"
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full border-2 border-black px-5 font-semibold outline-none transition focus:shadow-[4px_4px_0px_rgba(188,29,38,1)]"
                  />

                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Why do you want to volunteer?"
                    className="w-full border-2 border-black p-5 font-semibold outline-none transition focus:shadow-[4px_4px_0px_rgba(188,29,38,1)]"
                  />

                  {error && (
                    <p className="border-2 border-black bg-[#BC1D26]/10 px-4 py-3 text-sm font-black text-[#BC1D26]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 border-2 border-black bg-[#BC1D26] py-4 text-sm font-black uppercase tracking-wider text-white shadow-[4px_4px_0px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] disabled:opacity-60"
                  >
                    {status === "loading"
                      ? "Submitting..."
                      : (
                        <>
                          Submit Application
                          <ArrowRight size={18} />
                        </>
                      )}
                  </button>
                </form>
              )}
            </div>
            </ScrollReveal>

            {/* IMAGE SIDE */}
            <ScrollReveal variant="fade-left" delay={0.2}>
            <div
              className="
                relative
                hidden
                overflow-hidden
                bg-[#BC1D26]
                lg:block
              "
            >
              <img
                src={image}
                alt="Volunteer with Voima"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/50
                  via-black/10
                  to-transparent
                "
              />

              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white/20
                    backdrop-blur
                  "
                >
                  <HeartHandshake size={28} />
                </div>

                <h2 className="text-3xl font-bold text-white">
                  {imageTitle}
                </h2>

                <p className="mt-4 text-white/80 leading-8">
                {imageDescription}
                </p>
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}