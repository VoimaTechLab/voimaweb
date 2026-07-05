import { volunteerService } from "@/services/volunteerService";
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useVolunteerPage } from "../hooks/useVolunteerPage";

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
              rounded-[48px]
              border border-black/5
              bg-white
              shadow-[0_20px_80px_rgba(0,0,0,0.06)]
              lg:grid
              lg:grid-cols-[1fr_0.9fr]
            "
          >
            {/* FORM SIDE */}
            <div className="p-8 lg:p-14">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-[#BC1D26]/10
                  px-4 py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#BC1D26]
                "
              >
                {eyebrow}
              </span>

              <h1 className="mt-6 text-4xl font-bold text-[#BC1D26] md:text-5xl">
                {title}
              </h1>

              <p className="mt-6 max-w-xl leading-8 text-black/60">
                {description}
              </p>

              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#BC1D26]/10">
                    <ShieldCheck
                      size={32}
                      className="text-[#BC1D26]"
                    />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-black">
                    Application Submitted 🎉
                  </h3>

                  <p className="mt-4 max-w-sm leading-8 text-black/60">
                    Thank you for applying to volunteer with
                    Voima. We'll review your application and
                    contact you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-12 space-y-6"
                >
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Full Name"
                    className="h-14 w-full rounded-2xl border border-black/10 px-5 outline-none transition focus:border-[#BC1D26]"
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email Address"
                    className="h-14 w-full rounded-2xl border border-black/10 px-5 outline-none transition focus:border-[#BC1D26]"
                  />

                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Why do you want to volunteer?"
                    className="w-full rounded-2xl border border-black/10 p-5 outline-none transition focus:border-[#BC1D26]"
                  />

                  {error && (
                    <p className="rounded-xl bg-[#BC1D26]/10 px-4 py-3 text-sm font-medium text-[#BC1D26]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#BC1D26] py-4 font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60"
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

            {/* IMAGE SIDE */}
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
          </div>
        </div>
      </section>
    </main>
  );
}