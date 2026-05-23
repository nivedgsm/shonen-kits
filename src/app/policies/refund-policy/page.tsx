export const metadata = {
  title: "Refund & Cancellation Policy | Shonen Kits",
  description:
    "Read the Shonen Kits refund, return, and cancellation policy for online jersey orders."
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Refund & Cancellation Policy
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: 22 May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-2xl font-black text-white">
              1. Order Cancellation
            </h2>
            <p className="mt-3">
              Customers may request cancellation before the order is processed
              or shipped. Once an order has entered processing, printing,
              packing, or dispatch, cancellation may not be possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              2. Returns and Exchanges
            </h2>
            <p className="mt-3">
              Returns or exchanges may be accepted only for damaged, defective,
              or incorrect products received by the customer. Customers must
              contact us within 48 hours of delivery with order details and
              clear photos of the issue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              3. Non-Returnable Items
            </h2>
            <p className="mt-3">
              Products that are used, washed, damaged after delivery, missing
              original packaging, or ordered in the wrong size by the customer
              may not be eligible for return or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">4. Refunds</h2>
            <p className="mt-3">
              Approved refunds will be processed to the original payment method
              within 7-10 business days after verification. Refund timelines may
              vary depending on the payment provider or bank.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              5. How to Request Support
            </h2>
            <p className="mt-3">
              To request cancellation, return, exchange, or refund support,
              contact support@shonenkits.com with your order number, contact
              details, and issue description.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}