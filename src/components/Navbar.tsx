"use client";

import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Shop",
    href: "/products"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Contact",
    href: "/contact"
  },
  {
    label: "FAQ",
    href: "/faq"
  },
  {
    label: "Size Guide",
    href: "/size-guide"
  }
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={closeMenu} className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/25 transition group-hover:scale-105">
            SK
          </div>

          <div>
            <p className="text-lg font-black uppercase tracking-wide">
              Shonen Kits
            </p>
            <p className="-mt-1 text-xs font-medium text-slate-400">
              Anime Football Jerseys
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            onClick={closeMenu}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10"
            aria-label="Open cart"
          >
            <ShoppingBag size={19} />

            {totalItems > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1 text-xs font-black text-white">
                {totalItems}
              </span>
            ) : null}
          </Link>

          <Link
            href="/products"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-blue-200 md:inline-flex"
          >
            Shop Now
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/cart"
              onClick={closeMenu}
              className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-sm font-bold text-blue-100 transition hover:bg-blue-500/20"
            >
              Cart {totalItems > 0 ? `(${totalItems})` : ""}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}