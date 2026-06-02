import { downloadCTA } from "@/publicSite/data/voimaAppData";
import { Link } from "react-router-dom";

export default function DownloadCTA() {
  return (
    <section className="px-6 py-24">
      <div
        className="
          mx-auto
          max-w-7xl
          rounded-[48px]
          bg-[#BC1D26]
          p-16
          text-white
        "
      >
        <h2 className="max-w-3xl text-5xl font-bold">
          {downloadCTA.title}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-white/80">
          {downloadCTA.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to={downloadCTA.primaryButton.link}
            className="rounded-full bg-white px-7 py-4 font-semibold text-[#BC1D26]"
          >
            {downloadCTA.primaryButton.text}
          </Link>

          <Link
            to={downloadCTA.secondaryButton.link}
            className="rounded-full border border-white/20 px-7 py-4 font-semibold"
          >
            {downloadCTA.secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
}