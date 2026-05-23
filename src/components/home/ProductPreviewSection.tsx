import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ProductPreviewSection() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Featured Kits
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            National Team Energy,
            <span className="block text-slate-400">Anime Soul.</span>
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-sm leading-7 text-slate-400">
            Designed for anime fans, football lovers, casual streetwear fits,
            and matchday watch parties.
          </p>

          <Link
            href="/products"
            className="mt-5 inline-flex rounded-full border border-white/15 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            View All Products
          </Link>
        </div>
      </div>

      <div className="grid w-full gap-6 md:grid-cols-3">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}