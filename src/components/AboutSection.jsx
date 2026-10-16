
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Timeless over trends",
    description:
      "We believe great style isn't about following every trend. It's about finding pieces you'll love wearing again and again.",
  },
  {
    number: "02",
    title: "Less, but meaningful",
    description:
      "A thoughtful wardrobe begins with pieces that feel right, work together, and reflect your personal style.",
  },
  {
    number: "03",
    title: "Made to feel like you",
    description:
      "Fashion should feel personal. Our inspiration comes from everyday moments, individual expression, and quiet confidence.",
  },
];

export default function AboutSection() {
  return (
    <main className="bg-[#faf8f4] text-[#342920]">
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] tracking-[0.35em] text-[#987d66]">
            OUR STORY · VELOURA
          </p>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <h1 className="font-serif text-5xl leading-tight md:col-span-7 md:text-7xl">
              Style is personal.
              <br />
              <span className="italic text-[#987d66]">
                Make it yours.
              </span>
            </h1>

            <p className="max-w-md text-sm leading-7 text-[#817367] md:col-span-5 md:pb-2 md:text-base">
              Veloura is inspired by the beauty of everyday dressing:
              thoughtful choices, timeless silhouettes, and the confidence
              that comes from feeling like yourself.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-12">
            <div className="relative h-[350px] overflow-hidden md:col-span-8 md:h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85"
                alt="Fashion and personal style"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-between bg-[#eee5da] p-7 md:col-span-4 md:p-9">
              <span className="font-serif text-5xl text-[#987d66]">
                V.
              </span>

              <div>
                <p className="mb-4 text-[10px] tracking-[0.3em] text-[#987d66]">
                  THE VELOURA POINT OF VIEW
                </p>

                <h2 className="font-serif text-3xl leading-snug md:text-4xl">
                  A wardrobe that feels like home.
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#817367]">
                  Not more clothes. More meaning in what you choose to wear.
                  That s the feeling we want every Veloura piece to inspire.
                </p>
              </div>

              <span className="mt-10 text-xs tracking-[0.2em] text-[#987d66]">
                SIMPLE · THOUGHTFUL · TIMELESS
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5ddd3] px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-xl">
            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#987d66]">
              WHAT WE BELIEVE
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              The little things make the difference.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t border-[#cfc2b4] pt-5"
              >
                <span className="text-xs tracking-widest text-[#987d66]">
                  {value.number}
                </span>

                <h3 className="mt-6 font-serif text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#817367]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center md:px-12 md:py-28">
        <p className="mb-5 text-[10px] tracking-[0.3em] text-[#987d66]">
          YOUR STYLE, YOUR STORY
        </p>

        <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
          Find pieces that feel like you.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#817367]">
          Explore everyday favourites and discover your own way to wear them.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex border border-[#342920] px-7 py-4 text-xs tracking-[0.2em] transition-colors duration-300 hover:bg-[#342920] hover:text-[#faf8f4]"
        >
          EXPLORE THE COLLECTION ↗
        </Link>
      </section>
    </main>
  );
}
