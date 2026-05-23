const trustItems = [
  {
    title: "Secure Checkout",
    description:
      "Online payments are processed through trusted payment partners with secure transaction handling.",
    stat: "Safe"
  },
  {
    title: "India-Wide Shipping",
    description:
      "We ship to serviceable pincodes across India with clear processing and delivery timelines.",
    stat: "Pan India"
  },
  {
    title: "Customer Support",
    description:
      "For order questions, product queries, and shipping support, our team is available by email.",
    stat: "24-48h"
  },
  {
    title: "Fanwear Quality",
    description:
      "Our jerseys are designed for anime fans, football lovers, casual fits, and matchday watch parties.",
    stat: "Premium"
  }
];

export default function TrustSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Why Shop With Us
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Built Like a Real Fanwear Store
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Shonen Kits focuses on clear product information, transparent
            policies, secure checkout, and reliable customer communication.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-black/20 p-5"
            >
              <p className="text-3xl font-black text-white">{item.stat}</p>
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}