// src/pages/Donate.jsx

export default function Donate() {
  return (
    <main className="bg-[#fff] pt-[90px]">
      <section className="px-6 py-32">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#BC1D26]">
            Support Our Mission
          </p>

          <h1 className="mt-6 text-6xl font-bold text-[#BC1D26]">
            Every contribution creates impact.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-black/65">
            Your donations help fund healthcare
            innovation, outreach programs,
            community support, and research.
          </p>

          <a
            href="https://paystack.com/pay/voima"
            target="_blank"
            rel="noreferrer"
            className="
              mt-12 inline-flex items-center
              rounded-full bg-[#BC1D26]
              px-8 py-5 text-sm font-semibold
              duration-300 transition-all
              text-white hover:bg-[#A11922]
            "
          >
            Donate Securely
          </a>
        </div>
      </section>
    </main>
  );
}