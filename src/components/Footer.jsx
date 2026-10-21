
import Link from "next/link";

const shopLinks = [
  { label: "All Products", href: "/products" },
  { label: "New Arrivals", href: "/products" },
  { label: "Women's Fashion", href: "/products" },
];

const helpLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "About Veloura", href: "/about" },
  { label: "FAQs", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3eee7] text-[#342920]">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-12 md:pt-20">
        <div className="grid gap-12 border-b border-[#dcd2c6] pb-14 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#987d66]">
              A NOTE FROM VELOURA
            </p>

            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Good style.
              <br />
              Better everyday.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#817367]">
              Thoughtful fashion, timeless pieces, and little things
              that make getting dressed feel special.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-medium">
              Stay in the loop
            </p>

            <p className="mb-5 text-sm text-[#817367]">
              Discover new collections and style inspiration.
            </p>

           <div className="flex border-b border-[#9b8a79] pb-3">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#a3988d]"
              />

              <button
                type="submit"
                className="text-xs tracking-[0.15em] transition-colors hover:text-[#987d66]"
              >
                JOIN ↗
              </button>
          </div>

            <p className="mt-3 text-[11px] text-[#a3988d]">
              A little inspiration, delivered occasionally.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-3xl tracking-[0.12em]"
            >
              VELOURA
            </Link>

            <p className="mt-4 max-w-55 text-sm leading-6 text-[#817367]">
              Your style, your story. Made for the everyday moments.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.25em]">
              SHOP
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#817367] transition-colors hover:text-[#342920]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.25em]">
              INFORMATION
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#817367] transition-colors hover:text-[#342920]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[10px] tracking-[0.25em]">
              FOLLOW ALONG
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#817367]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#342920]"
              >
                Instagram ↗
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#342920]"
              >
                Pinterest ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#dcd2c6] py-6 text-[11px] text-[#8c8175] sm:flex-row sm:items-center sm:justify-between">
       <p>© 2026 Veloura. All rights reserved.</p>
          <p>Designed with intention. Worn with confidence.</p>
        </div>
      </div>
    </footer>
  );
}
