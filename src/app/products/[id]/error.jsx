
"use client";

export default function ProductDetailsError({ reset }) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#faf9f6] px-4 py-16">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
          Something went wrong
        </p>

        <h2 className="mt-4 font-heading text-3xl text-stone-900">
          We could not load this product
        </h2>

        <p className="mt-4 text-sm leading-6 text-stone-600">
          Sorry, the product details are temporarily unavailable.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
