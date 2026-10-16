"use client";

export default function Error({ reset }) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-[#faf9f6] px-4 py-16">
      <div className="max-w-md text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
          Something Went Wrong
        </p>

        <h2 className="font-heading text-3xl text-stone-900 sm:text-4xl">
          Unable to Load This Collection
        </h2>

        <p className="mt-4 text-sm leading-6 text-stone-500">
          We could not load the products right now. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}