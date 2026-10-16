export default function Loading() {
  return (
    <section className="bg-[#faf9f6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <div className="mb-4 h-3 w-36 animate-pulse rounded bg-stone-200" />
          <div className="h-10 w-72 max-w-full animate-pulse rounded bg-stone-200" />
          <div className="mt-4 h-4 w-96 max-w-full animate-pulse rounded bg-stone-200" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="aspect-[4/5] rounded-2xl bg-stone-200" />
              <div className="mt-4 h-4 w-3/4 rounded bg-stone-200" />
              <div className="mt-3 h-4 w-1/3 rounded bg-stone-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}