import Link from "next/link";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const shopLinks = [
  {
    label: "All Products",
    href: "/products",
  },
  {
    label: "India Edition",
    href: "/products",
  },
  {
    label: "Japan Edition",
    href: "/products",
  },
  {
    label: "Brazil Edition",
    href: "/products",
  },
  {
    label: "Size Guide",
    href: "/size-guide",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const policyLinks = [
  {
    label: "Privacy Policy",
    href: "/policies/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/policies/terms-and-conditions",
  },
  {
    label: "Refund Policy",
    href: "/policies/refund-policy",
  },
  {
    label: "Shipping Policy",
    href: "/policies/shipping-policy",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-lg shadow-blue-600/20">
                SK
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-black uppercase tracking-wide text-white">
                    Shonen Kits
                  </p>

                  <Badge>
                    BETA
                  </Badge>
                </div>

                <p className="-mt-1 text-xs font-medium text-slate-400">
                  Anime Football Jerseys
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Premium anime-inspired football jerseys designed for fans who
              live between national pride, matchday energy, and shonen
              storytelling.
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
                    className="text-sm text-slate-400 transition duration-300 hover:text-white"
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
                    className="text-sm text-slate-400 transition duration-300 hover:text-white"
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
              <p>support@shonenkits.com</p>

              <p>Kerala, India</p>

              <p>Mon - Sat · 10 AM - 6 PM</p>
            </div>

            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col gap-3 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 Shonen Kits. All rights reserved.
            </p>

            <p>
              Anime-inspired football fanwear brand from India.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}