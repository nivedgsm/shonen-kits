import ProductCard from "@/components/product/card/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Shop Jerseys | Shonen Kits",
  description:
    "Shop anime-inspired football jerseys from Shonen Kits. Explore national team inspired fanwear made for anime and football fans."
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Shop Collection
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Anime Inspired Football Jerseys
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400 md:text-lg">
            Explore Shonen Kits jerseys inspired by national team football
            culture, anime energy, and streetwear-ready fan style.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}