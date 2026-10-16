
import Image from "next/image";

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 md:flex-row md:gap-12 md:px-10 lg:gap-20 lg:py-24">

      {/* Left side */}
      <div className="w-full md:w-1/2">
        <h1 className="mb-5 text-xs font-medium tracking-[0.25em] text-[#8a6b52] sm:text-sm">
          NEW SEASON · 2026
        </h1>

        <h2 className="mb-6 font-(--font-playfair) text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
          Elegance in Every
          <span className="block italic">Everyday Moment.</span>
        </h2>

        <p className="mb-8 max-w-lg text-sm leading-7 text-stone-600 sm:text-base">
          Discover timeless essentials and effortlessly elegant styles,
          thoughtfully chosen for your everyday wardrobe.
        </p>

        <button className="bg-stone-900 px-7 py-3.5 text-sm text-white transition-colors hover:bg-amber-800">
          Explore Collection →
        </button>
      </div>

      {/* Right side */}
<div className="relative h-100 w-full md:h-137.5 md:w-1/2">
  <Image
    src="/images/hero.jpg"
    alt="Fashion model wearing an elegant outfit"
    fill
    priority
    sizes="(max-width: 767px) 100vw, 50vw"
    className="object-cover object-center"
  />
</div>

    </section>
  );
}
