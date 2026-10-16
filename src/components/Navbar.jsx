
"use client";
import Link from "next/link";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Product", href: "/products" },
    { name: "Contact", href: "/contact" },

  ];
  const pathname = usePathname();

  return (
    <header className="relative border-b border-stone-200 bg-[#faf8f4] px-5 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
  pathname === link.href
    ? "text-amber-800"
    : "text-stone-700 hover:text-amber-800"
}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Centered brand name */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-semibold tracking-widest text-[#8a6b52]"
        >
          VELOURA
        </Link>

        {/* Desktop login text */}
        <Link
          href="/login"
          className="hidden text-sm font-semibold text-stone-800 hover:text-amber-800 md:block"
        >
          Login
        </Link>

        {/* Mobile login icon */}
     <Link
  href="/login"
  aria-label="Login"
  className="text-stone-800 transition-colors hover:text-amber-800 md:hidden"
>
  <UserRound size={22} strokeWidth={1.7} />
</Link>
      </nav>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-b border-stone-200 bg-[#faf8f4] px-5 py-6 shadow-sm md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors ${
  pathname === link.href
    ? "text-amber-800"
    : "text-stone-700 hover:text-amber-800"
}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
