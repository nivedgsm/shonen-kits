export const metadata = {
  title: "Shipping Policy | Shonen Kits",
  description:
    "Read the Shonen Kits shipping policy for order processing, delivery timelines, and India-wide shipping."
};

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Shipping Policy
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: 22 May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-2xl font-black text-white">
              1. Shipping Locations
            </h2>
            <p className="mt-3">
              Shonen Kits currently ships products across serviceable locations
              in India. Delivery availability may depend on courier coverage for
              the customer’s pincode.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              2. Order Processing Time
            </h2>
            <p className="mt-3">
              Orders are usually processed within 2-4 business days after order
              confirmation. Processing time may vary during high-demand periods,
              holidays, or operational delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              3. Estimated Delivery Time
            </h2>
            <p className="mt-3">
              Estimated delivery time is generally 5-10 business days after
              dispatch, depending on customer location, courier partner, and
              external conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              4. Shipping Charges
            </h2>
            <p className="mt-3">
              Shipping charges, if applicable, will be shown during checkout
              before order confirmation. Charges may vary based on order value,
              delivery location, or promotional offers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              5. Delivery Issues
            </h2>
            <p className="mt-3">
              If there is a delay, failed delivery attempt, incorrect address,
              or damaged package, customers should contact us at
              support@shonenkits.com with their order details.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}