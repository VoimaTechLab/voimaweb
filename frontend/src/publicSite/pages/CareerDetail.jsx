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

          <div className="mt-16">

            <h2 className="text-3xl font-bold">
              Overview
            </h2>

            <p className="mt-6 text-lg leading-9 text-black/70">
              {job.overview}
            </p>

          </div>

          <div className="mt-16">

            <h2 className="text-3xl font-bold">
              Responsibilities
            </h2>

            <ul className="mt-8 space-y-4">
              {job.responsibilities.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="mt-16">

            <h2 className="text-3xl font-bold">
              Requirements
            </h2>

            <ul className="mt-8 space-y-4">
              {job.requirements.map((item, index) => (
                <li key={index}>
                  • {item}
                </li>
              ))}
            </ul>

          </div>

          <Link
            to="/get-involved"
            className="
              mt-16
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#BC1D26]
              px-8
              py-4
              font-semibold
              text-white
            "
          >
            Apply Now
          </Link>

        </div>
      </section>

    </main>
  );
}