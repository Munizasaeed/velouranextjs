
export default function Loading() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        {/* Image skeleton */}
        <div className="aspect-[4/5] animate-pulse rounded-2xl bg-stone-200" />

        {/* Product information skeleton */}
        <div className="flex flex-col justify-center gap-5">
          <div className="h-3 w-24 animate-pulse rounded bg-stone-200" />

          <div className="h-10 w-3/4 animate-pulse rounded bg-stone-200" />

          <div className="h-7 w-28 animate-pulse rounded bg-stone-200" />

          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
            <div className="h-4 w-full animate-pulse rounded bg-stone-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-stone-200" />
          </div>

          <div className="h-4 w-32 animate-pulse rounded bg-stone-200" />

          <div className="h-14 w-full animate-pulse rounded-full bg-stone-200" />
        </div>
      </div>
    </main>
  );
}
