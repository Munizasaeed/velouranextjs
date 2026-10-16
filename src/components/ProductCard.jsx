import Image from "next/image";
import Link from "next/link";
export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative aspect-4/5 overflow-hidden bg-stone-100">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700">
          {product.category}
        </span>

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-stone-700 shadow-sm transition hover:bg-stone-900 hover:text-white"
        >
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h2 className="line-clamp-1 text-base font-medium text-stone-900">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-lg font-semibold text-stone-900">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-stone-500">
            ★ {product.rating}
          </p>
        </div>

     <Link
  href={`/products/${product.id}`}
  className="mt-4 block rounded-full bg-stone-900 px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-stone-700"
>
  View Product
</Link>
      </div>
    </article>
  );
}