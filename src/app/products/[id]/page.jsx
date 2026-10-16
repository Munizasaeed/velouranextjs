import Image from "next/image";
import { notFound } from "next/navigation";
export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  if (response.status === 404) {
  notFound();
}
  if (!response.ok) {
    throw new Error("Unable to load product details.");
  }

  const product = await response.json();

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-12 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-stone-100">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
            {product.category}
          </p>

          <h1 className="mt-4 font-heading text-3xl text-stone-900 sm:text-5xl">
            {product.title}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-stone-900">
            ${product.price.toFixed(2)}
          </p>

          <p className="mt-5 leading-7 text-stone-600">
            {product.description}
          </p>

          <p className="mt-4 text-sm text-stone-500">
            ★ {product.rating} · {product.stock} in stock
          </p>

          <button
            type="button"
            className="mt-8 rounded-full bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}