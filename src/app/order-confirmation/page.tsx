import Link from "next/link";

export const metadata = {
  title: "Order Confirmation | Shonen Kits",
  description:
    "Your Shonen Kits order confirmation page for anime-inspired football jerseys."
};

export default function OrderConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-5xl">
          ✓
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Order Received
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Thank You for Your Order
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
          Your Shonen Kits order request has been received. A confirmation and
          payment update will be shared with you after checkout processing is
          enabled.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
          <h2 className="text-xl font-black">What happens next?</h2>

          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>Your order details are reviewed by our team.</span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>
                Once payment gateway processing is active, online payments will
                be handled securely through Razorpay.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              <span>
                Orders are usually processed within 2-4 business days after
                confirmation.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/products"
            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-blue-500"
          >
            Continue Shopping
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-8 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}