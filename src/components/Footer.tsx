import Link from "next/link";

const shopLinks = [
  {
    label: "All Products",
    href: "/products"
  },
  {
    label: "India Edition",
    href: "/products"
  },
  {
    label: "Japan Edition",
    href: "/products"
  },
  {
    label: "Brazil Edition",
    href: "/products"
  },
  {
    label: "Size Guide",
    href: "/size-guide"
  },
  {
    label: "FAQ",
    href: "/faq"
  }
];

const policyLinks = [
  {
    label: "Privacy Policy",
    href: "/policies/privacy-policy"
  },
  {
    label: "Terms & Conditions",
    href: "/policies/terms-and-conditions"
  },
  {
    label: "Refund Policy",
    href: "/policies/refund-policy"
  },
  {
    label: "Shipping Policy",
    href: "/policies/shipping-policy"
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
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

          <p className="mt-5 text-sm leading-7 text-slate-400">
            Premium anime-inspired football jerseys designed for fans who live
            between national pride, matchday energy, and shonen storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Shop
          </h3>

          <ul className="mt-5 space-y-3">
            {shopLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Policies
          </h3>

          <ul className="mt-5 space-y-3">
            {policyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
            Contact
          </h3>

          <div className="mt-5 space-y-3 text-sm text-slate-400">
            <p>Email: support@shonenkits.com</p>
            <p>Location: Kerala, India</p>
            <p>Support Hours: Mon - Sat, 10 AM - 6 PM</p>
          </div>

          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Shonen Kits. All rights reserved.</p>
          <p>Anime-inspired football fanwear brand from India.</p>
        </div>
      </div>
    </footer>
  );
}