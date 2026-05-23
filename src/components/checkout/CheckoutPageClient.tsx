"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/format";

const SHIPPING_FEE = 79;

type CheckoutForm = {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
};

const initialForm: CheckoutForm = {
  fullName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: ""
};

export default function CheckoutPageClient() {
  const { items, subtotal } = useCart();
  const router = useRouter();
  const [form, setForm] = useState<CheckoutForm>(initialForm);

  const shipping = items.length > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  function updateField(field: keyof CheckoutForm, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/order-confirmation");
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Checkout
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Your cart is empty
          </h1>

          <p className="mt-5 max-w-xl text-slate-400">
            Add a jersey to your cart before continuing to checkout.
          </p>

          <Link
            href="/products"
            className="mt-8 rounded-full bg-blue-600 px-8 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-blue-500"
          >
            Shop Jerseys
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Secure Checkout
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Complete Your Order
          </h1>

          <p className="mt-5 max-w-2xl text-slate-400">
            Enter your shipping details and review your order before continuing
            to payment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <section>
              <h2 className="text-2xl font-black">Shipping Details</h2>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Full Name
                  </label>
                  <input
                    value={form.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(event) =>
                      updateField("phone", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Address Line 1
                  </label>
                  <input
                    value={form.addressLine1}
                    onChange={(event) =>
                      updateField("addressLine1", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="House number, street, area"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Address Line 2
                  </label>
                  <input
                    value={form.addressLine2}
                    onChange={(event) =>
                      updateField("addressLine2", event.target.value)
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="Apartment, landmark, optional"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    City
                  </label>
                  <input
                    value={form.city}
                    onChange={(event) =>
                      updateField("city", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="City"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    State
                  </label>
                  <input
                    value={form.state}
                    onChange={(event) =>
                      updateField("state", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="State"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-300">
                    Pincode
                  </label>
                  <input
                    value={form.pincode}
                    onChange={(event) =>
                      updateField("pincode", event.target.value)
                    }
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400"
                    placeholder="Pincode"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-black">Payment Method</h2>

              <div className="mt-5 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">
                      Online Payment
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Pay securely using UPI, cards, net banking, wallets, and
                      other supported payment methods.
                    </p>
                  </div>

                  <div className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-slate-950">
                    Razorpay Ready
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-black">UPI</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Google Pay, PhonePe, Paytm, BHIM
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-black">Cards</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Debit and credit cards
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-sm font-black">Net Banking</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Supported Indian banks
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Payment gateway integration is currently in preview mode for
                approval. Final live payments will be processed through
                Razorpay after activation.
              </p>
            </section>

            <section className="rounded-3xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-black">Order Notes</h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>
                    Please check your size, address, and phone number before
                    placing the order.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>
                    Orders are usually processed within 2-4 business days after
                    confirmation.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>
                    By placing this order, you agree to our terms, shipping
                    policy, and refund policy.
                  </span>
                </li>
              </ul>
            </section>

            <button
              type="submit"
              className="w-full rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Place Order Securely
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              You will be redirected to the payment provider once live payment
              processing is enabled.
            </p>
          </form>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0"
                >
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient}`}
                  >
                    <span className="text-3xl">{item.emoji}</span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold">{item.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Size {item.size} × {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-bold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="font-semibold text-white">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Shipping</span>
                <span className="font-semibold text-white">
                  {formatPrice(shipping)}
                </span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-black">Total</span>
                  <span className="text-lg font-black">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4">
              <p className="text-xs leading-5 text-blue-100">
                Orders are usually processed within 2-4 business days and
                shipped across India.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Need Help?
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Contact support@shonenkits.com for order or payment questions.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}