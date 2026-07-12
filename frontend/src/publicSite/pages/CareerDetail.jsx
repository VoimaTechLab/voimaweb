import { useCareerRole } from "@/publicSite/hooks/useCareerRole";
import { Link, useParams } from "react-router-dom";

export default function CareerDetail() {
  const { slug } = useParams();

  const { job, loading } = useCareerRole(slug);

  if (loading) return null;

  if (!job) {
    return (
      <section className="py-40 text-center">
        <h1 className="text-5xl font-bold text-[#BC1D26]">
          Role Not Found
        </h1>

        <Link
          to="/careers"
          className="mt-8 inline-flex rounded-full bg-[#BC1D26] px-6 py-3 text-white"
        >
          Back To Careers
        </Link>
      </section>
    );
  }

  return (
    <main className="pt-[90px]">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">

          <Link
            to="/careers"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-black/10
              px-5
              py-3
              transition
              hover:border-[#BC1D26]
              hover:text-[#BC1D26]
            "
          >
            ← Back To Careers
          </Link>

          <div className="mt-12">
            <span className="rounded-full bg-[#BC1D26]/10 px-4 py-2 text-sm text-[#BC1D26]">
              {job.type}
            </span>

            <h1 className="mt-6 text-6xl font-bold text-[#BC1D26]">
              {job.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full bg-black/5 px-4 py-2">
                {job.location}
              </span>

              <span className="rounded-full bg-black/5 px-4 py-2">
                {job.department}
              </span>

              <span className="rounded-full bg-black/5 px-4 py-2">
                {job.experience}
              </span>

            </div>
          </div>

          {/* Overview */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Overview
            </h2>

            <p className="mt-6 text-lg leading-9 text-black/70">
              {job.overview}
            </p>
          </section>

          {/* Responsibilities */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Responsibilities
            </h2>

            <ul className="mt-8 space-y-4">
              {job.responsibilities?.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <span className="mt-1 text-[#BC1D26]">•</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Requirements */}

          <section className="mt-16">
            <h2 className="text-3xl font-bold">
              Requirements
            </h2>

            <ul className="mt-8 space-y-4">
              {job.requirements?.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3"
                >
                  <span className="mt-1 text-[#BC1D26]">•</span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}

          {job.benefits?.length > 0 && (
            <section className="mt-16">

              <h2 className="text-3xl font-bold">
                Benefits
              </h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                {job.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="
                      rounded-3xl
                      border
                      border-black/5
                      bg-[#BC1D26]/5
                      p-6
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#BC1D26]/20
                    "
                  >
                    <div className="flex items-start gap-3">

                      <div className="mt-1 h-3 w-3 rounded-full bg-[#BC1D26]" />

                      <p className="leading-8 text-black/70">
                        {benefit}
                      </p>

                    </div>
                  </div>
                ))}

              </div>

            </section>
          )}

          <a
            href={job.applicationLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              mt-16
              inline-flex
              items-center
              gap-3
              rounded-full
              px-8
              py-4
              font-semibold
              transition-all
              duration-300
              ${
                job.applicationLink
                  ? "bg-[#BC1D26] text-white hover:scale-[1.02] hover:bg-[#a31821]"
                  : "cursor-not-allowed bg-gray-200 text-gray-500"
              }
            `}
          >
            Apply Now
          </a>

        </div>
      </section>
    </main>
  );
}