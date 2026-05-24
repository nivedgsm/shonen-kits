export const metadata = {
  title: "Contact Us | Shonen Kits",
  description:
    "Contact Shonen Kits for order support, product questions, shipping queries, and customer assistance."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Contact Us
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          We’re Here to Help
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
          For product questions, order support, shipping queries, or general
          assistance, you can contact the Shonen Kits support team using the
          details below.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Customer Support</h2>

            <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
              <p>
                <span className="font-bold text-white">Email:</span>{" "}
                support@shonenkits.com
              </p>

              <p>
                <span className="font-bold text-white">Location:</span> Kerala,
                India
              </p>

              <p>
                <span className="font-bold text-white">Support Hours:</span>{" "}
                Monday to Saturday, 10:00 AM to 6:00 PM IST
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
            <h2 className="text-2xl font-black">Response Time</h2>

            <p className="mt-4 text-sm leading-7 text-blue-100">
              We usually respond to customer support queries within 24-48
              business hours. Please include your order details if your query is
              related to an existing purchase.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-black">Business Information</h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            Shonen Kits is operated as an online ecommerce brand from India. The
            website is intended for customers purchasing anime-inspired football
            jerseys and related fanwear products.
          </p>
        </div>
      </section>
    </main>
  );
}