export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          About The Brand
        </p>

        <h2 className="mt-3 text-3xl font-black md:text-5xl">
          Built for Anime x Football Fans
        </h2>

        <p className="mt-5 leading-7 text-slate-300">
          Shonen Kits is a concept ecommerce brand creating anime-inspired
          football fanwear. Our products are designed for fans who enjoy both
          national team football culture and anime-style storytelling.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          This preview store currently uses dummy products for business and
          payment gateway verification. Final products, checkout, and order
          fulfillment will be added after approval.
        </p>
      </div>
    </section>
  );
}