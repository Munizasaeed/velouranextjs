
import Image from "next/image";
import Link from "next/link";

export default function StyleEditorial() {
  return (
    <section className="overflow-hidden bg-[#faf8f4] px-5 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-[#ded6cb] pb-5">
          <div>
            <p className="mb-3 text-[10px] tracking-[0.35em] text-[#987d66]">
              THE VELOURA JOURNAL
            </p>
            <h2 className="font-serif text-3xl text-[#342920] md:text-5xl">
              A little more you.
            </h2>
          </div>
          <span className="hidden text-xs tracking-widest text-[#8c8175] sm:block">
            STYLE NOTES — 01
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-5">
          <div className="group md:col-span-5">
            <div className="relative h-[360px] overflow-hidden md:h-[470px]">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary everyday fashion"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 bg-[#faf8f4] px-3 py-2 text-[10px] tracking-widest text-[#342920]">
                01 / EVERYDAY
              </span>
            </div>
            <div className="flex items-start justify-between pt-4">
              <div>
                <h3 className="font-serif text-2xl text-[#342920]">
                  Effortless Layers
                </h3>
                <p className="mt-1 text-sm text-[#8c8175]">
                  The art of keeping it simple.
                </p>
              </div>
              <span className="text-xl text-[#987d66]">↗</span>
            </div>
          </div>

          <div className="md:col-span-2 md:pt-20">
            <div className="relative h-[260px] overflow-hidden md:h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=700&q=85"
                alt="Minimal neutral fashion outfit"
                fill
                sizes="(max-width: 768px) 100vw, 17vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.25em] text-[#987d66]">
              02 — THE DETAILS
            </p>
          </div>

          <div className="md:col-span-5 md:pt-10">
            <p className="mb-5 text-xs leading-6 text-[#8c8175]">
              PERSONAL STYLE, WITHOUT THE RULES
            </p>
            <p className="max-w-md font-serif text-3xl leading-snug text-[#342920] md:text-4xl">
              Not just what you wear. It’s how you make it your own.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#74685d]">
              Build a wardrobe around pieces you love. Mix your favourites,
              find your rhythm, and let your everyday style tell your story.
            </p>
            <Link
              href="/products"
              className="mt-7 inline-flex border-b border-[#342920] pb-2 text-xs tracking-[0.2em] text-[#342920] transition-colors hover:text-[#987d66]"
            >
              FIND YOUR STYLE ↗
            </Link>

            <div className="relative mt-10 h-[200px] overflow-hidden md:ml-16 md:h-[230px]">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85"
                alt="Fashion wardrobe inspiration"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
