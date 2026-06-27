import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Hero.gif"
          alt="Luxury bell tent in countryside"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">

        <p className="mb-4 tracking-[0.3em] text-xs uppercase text-[var(--sand)]">
          Luxury Glamping Experiences
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Norfolk Bell Tent Hire
        </h1>

        <p className="text-lg md:text-xl text-white/80 mb-10">
          Beautiful bell tents for weddings, festivals, birthdays and unforgettable weekends across Norfolk & Suffolk.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <a href="#packages" className="btn-primary inline-block">
  View Packages
</a>

<a
  href="#contact"
  className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition inline-block"
>
  Get a Quote
</a>

        </div>

      </div>
    </section>
  );
}