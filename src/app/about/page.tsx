export const metadata = {
  title: "About Us | Shonen Kits",
  description:
    "Learn about Shonen Kits, an India-based anime-inspired football jersey brand."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          About Us
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Anime Football Jerseys Built for Matchday Culture
        </h1>

        <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
          <p>
            Shonen Kits is an India-based ecommerce brand focused on
            anime-inspired football fanwear. We create jersey designs that bring
            together national team football energy, anime-style storytelling,
            and modern streetwear appeal.
          </p>

          <p>
            Our products are made for fans who enjoy football, anime, gaming,
            watch parties, casual styling, and collector-style merchandise. Each
            kit is designed to feel bold, expressive, and wearable beyond just
            match day.
          </p>

          <p>
            We currently offer selected football jersey designs inspired by
            global football culture. Our goal is to build a reliable online
            store where customers across India can discover and order unique
            fanwear with a smooth shopping experience.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">Our Style</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Anime-inspired visuals, football culture, bold colors, and
              streetwear-ready jersey design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">Our Customers</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Football fans, anime fans, jersey collectors, students, creators,
              and casual streetwear lovers.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">Our Service</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Online ordering, India-wide shipping, customer support, and clear
              policies for a trustworthy shopping experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}