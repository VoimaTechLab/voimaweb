import { useCareerRole } from "@/publicSite/hooks/useCareerRole";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function CareerDetail() {
  const { slug } = useParams();

  const { job, loading } = useCareerRole(slug);

  if (loading) return null;

  if (!job) {
    return (
      <section className="py-40 text-center">
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-black font-heading tracking-tight">
          Role Not Found
        </h1>

        <Link
          to="/careers"
          className="mt-8 inline-flex items-center gap-2 bg-[#BC1D26] border-2 border-black px-6 py-3 font-black uppercase tracking-widest text-white shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
        >
          <ArrowLeft size={16} />
          Back To Careers
        </Link>
      </section>
    );
  }

  return (
    <main className="bg-white pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <Link
            to="/careers"
            className="
              inline-flex
              items-center
              gap-2
              border-2
              border-black
              bg-white
              px-5
              py-3
              text-xs
              font-black
              uppercase
              tracking-wider
              text-black
              shadow-[3px_3px_0px_rgba(0,0,0,1)]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#BC1D26]
              hover:text-white
            "
          >
            <ArrowLeft size={16} />
            Back To Careers
          </Link>

          <ScrollReveal variant="fade-up">
            <div className="mt-12">
              <span className="inline-flex border-2 border-black bg-[#BC1D26] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                {job.type}
              </span>

              <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#BC1D26] font-heading tracking-tight">
                {job.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {job.location}
                </span>

                <span className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {job.department}
                </span>

                <span className="border-2 border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {job.experience}
                </span>

              </div>
            </div>
          </ScrollReveal>

          {/* Overview */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <section className="mt-16 border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                Overview
              </h2>

              <p className="mt-6 text-base sm:text-lg font-semibold leading-8 sm:leading-9 text-black/75">
                {job.overview}
              </p>
            </section>
          </ScrollReveal>

          {/* Responsibilities */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <section className="mt-10 border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                Responsibilities
              </h2>

              <ul className="mt-8 grid gap-4">
                {job.responsibilities?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 border-2 border-black bg-[#fafafa] p-4 text-sm font-semibold leading-7 text-black/75 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:text-base"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-[#BC1D26]" size={18} />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* Requirements */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <section className="mt-10 border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                Requirements
              </h2>

              <ul className="mt-8 grid gap-4">
                {job.requirements?.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 border-2 border-black bg-[#fafafa] p-4 text-sm font-semibold leading-7 text-black/75 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:text-base"
                  >
                    <CheckCircle2 className="mt-1 shrink-0 text-[#BC1D26]" size={18} />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          {/* Benefits */}
          {job.benefits?.length > 0 && (
            <ScrollReveal variant="fade-up" delay={0.1}>
              <section className="mt-10 border-2 border-black bg-white p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:p-8">

                <h2 className="text-2xl sm:text-3xl font-black uppercase text-black font-heading">
                  Benefits
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  {job.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="
                        border-2
                        border-black
                        bg-[#fafafa]
                        p-6
                        shadow-[4px_4px_0px_rgba(0,0,0,1)]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-[6px_6px_0px_rgba(188,29,38,1)]
                      "
                    >
                      <div className="flex items-start gap-3">

                        <CheckCircle2 className="mt-1 shrink-0 text-[#BC1D26]" size={18} />

                        <p className="font-semibold leading-8 text-black/75">
                          {benefit}
                        </p>

                      </div>
                    </div>
                  ))}

                </div>

              </section>
            </ScrollReveal>
          )}

          <ScrollReveal variant="fade-up" delay={0.1}>
            <a
              href={job.applicationLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                mt-16
                inline-flex
                items-center
                gap-3
                border-2
                border-black
                px-8
                py-4
                text-sm
                font-black
                uppercase
                tracking-wider
                shadow-[5px_5px_0px_rgba(0,0,0,1)]
                transition-all
                duration-200
                ${
                  job.applicationLink
                    ? "bg-[#BC1D26] text-white hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_rgba(0,0,0,1)]"
                    : "cursor-not-allowed bg-gray-200 text-gray-500"
                }
              `}
            >
              Apply Now
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}
