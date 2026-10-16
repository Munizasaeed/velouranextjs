import ProductCard from "@/components/ProductCard";

export default async function ProductList() {
const response = await fetch(
      "https://dummyjson.com/products/category/womens-dresses",
        {
    next: { revalidate: 60 },
  }
    );
  
 if (!response.ok) {
      throw new Error("There is some issue fetching products.");
    }
    const data = await response.json();
 const products = data.products;

  return (
    <section className="bg-[#faf9f6] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
              Thoughtfully Selected
            </p>

            <h1 className="font-heading text-3xl text-stone-900 sm:text-4xl lg:text-5xl">
              Explore Our Collection
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-500 sm:text-base">
              Discover everyday essentials and timeless styles made for you.
            </p>
          </div>

          <p className="text-sm text-stone-500">
            {products.length} pieces
          </p>
        </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        
      </div>
    </section>
  );
}