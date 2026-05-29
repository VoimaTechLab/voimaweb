// src/pages/VolunteerApply.jsx

export default function VolunteerApply() {
  return (
    <main className="bg-[#fafafa] pt-[90px]">
      <section className="px-6 py-28">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-5xl font-bold text-black">
            Volunteer With Voima
          </h1>

          <form className="mt-14 space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-5 outline-none"
            />

            <textarea
              rows={6}
              placeholder="Why do you want to volunteer?"
              className="w-full rounded-2xl border border-black/10 bg-white px-5 py-5 outline-none"
            />

            <button
              className="
                w-full rounded-full bg-[#F47B3A]
                py-5 text-sm font-semibold text-white
              "
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}