import { waitlistFormFields } from "@/publicSite/data/waitlistData";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Waitlist Submission:", formData);

    // API call later
  };

  return (
    <section className="px-6 py-2 bg-white">
      <div className="mx-auto max-w-5xl">

        <div
          className="
            overflow-hidden
            rounded-[48px]
            border border-black/5
            bg-white
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            lg:grid lg:grid-cols-[0.9fr_1.1fr]
          "
        >

          {/* LEFT PANEL */}

          <div
            className="
              bg-[#BC1D26]
              p-10
              text-white
              lg:p-14
            "
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-4
                py-2
              "
            >
              <ShieldCheck size={18} className="text-[#BC1D26]" />
              <span className="text-sm font-medium text-[#BC1D26]">
                Early Access
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-bold leading-tight text-white">
              Join the Voima Waitlist
            </h2>

            <p className="mt-6 text-white/80 leading-8">
              Be among the first to access the Voima App and receive
              updates about healthcare resources, community support,
              awareness campaigns and upcoming releases.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Priority access before public launch",
                "Exclusive product updates",
                "Community support opportunities",
                "Healthcare education resources",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-white" />

                  <p className="text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <div className="p-8 lg:p-14">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {waitlistFormFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="
                      mb-2
                      block
                      text-sm
                      font-semibold
                      text-black
                    "
                  >
                    {field.label}

                    {field.required && (
                      <span className="ml-1 text-[#BC1D26]">
                        *
                      </span>
                    )}
                  </label>

                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      required={field.required}
                      className="
                        h-14
                        w-full
                        rounded-2xl
                        border
                        border-black/10
                        bg-white
                        px-4
                        outline-none
                        transition
                        focus:border-[#BC1D26]
                        appearance-none
                        cursor-pointer
                        text-black
                      "
                    >
                      <option value="" className="text-black/50">
                        Select an option
                      </option>

                      {field.options?.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="text-black bg-white"
                        >
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
                      className="
                        h-14
                        w-full
                        rounded-2xl
                        border
                        border-black/10
                        px-4
                        outline-none
                        transition
                        focus:border-[#BC1D26]
                      "
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#BC1D26]
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-[1.01]
                "
              >
                Join Waitlist
                <ArrowRight size={18} />
              </button>

              <p className="text-center text-sm text-black/50">
                We respect your privacy and will never spam you.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}