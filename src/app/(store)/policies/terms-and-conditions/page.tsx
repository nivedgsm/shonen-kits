export const metadata = {
  title: "Terms & Conditions | Shonen Kits",
  description:
    "Read the Shonen Kits terms and conditions for using the website and purchasing products."
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Terms & Conditions
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: 22 May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-2xl font-black text-white">1. Overview</h2>
            <p className="mt-3">
              This website is operated by Shonen Kits. By accessing our website
              or purchasing products from us, you agree to be bound by these
              terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              2. Products and Pricing
            </h2>
            <p className="mt-3">
              We make reasonable efforts to display product information,
              pricing, colors, sizes, and availability accurately. Prices are
              listed in Indian Rupees and may change without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              3. Orders and Acceptance
            </h2>
            <p className="mt-3">
              Placing an order does not guarantee acceptance. We reserve the
              right to cancel or refuse orders due to stock issues, pricing
              errors, payment failure, suspected fraud, or operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">4. Payments</h2>
            <p className="mt-3">
              Payments may be processed through secure third-party payment
              providers. Orders are confirmed only after successful payment or
              applicable order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              5. Shipping and Delivery
            </h2>
            <p className="mt-3">
              Delivery timelines are estimates and may vary based on customer
              location, courier availability, weather, holidays, or operational
              delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              6. Intellectual Property
            </h2>
            <p className="mt-3">
              Website content, brand assets, product copy, layout, and original
              designs belong to Shonen Kits unless otherwise stated. Customers
              may not copy, reproduce, or misuse our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              7. Contact
            </h2>
            <p className="mt-3">
              For questions about these terms, contact us at
              support@shonenkits.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}