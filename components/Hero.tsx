export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2F5D50]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
          Luxury Glamping Experiences
        </p>

        <h1 className="mb-6 text-5xl font-bold md:text-7xl">
          Norfolk Bell Tent Hire
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-200 md:text-xl">
          Beautiful bell tents for weddings, festivals, birthdays, garden
          parties and unforgettable weekends across Norfolk & Suffolk.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-amber-600 px-8 py-4 font-semibold transition hover:bg-amber-700">
            View Packages
          </button>

          <button className="rounded-lg border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
}