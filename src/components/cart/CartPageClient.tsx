"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { formatPrice } from "@/lib/format";

const SHIPPING_FEE = 79;

export default function CartPageClient() {
  const {
    items,
    subtotal,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart
  } = useCart();

  const shipping = items.length > 0 ? SHIPPING_FEE : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#050816] text-white">
        <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Your Cart
          </p>

          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Your cart is empty
          </h1>

          <p className="mt-5 max-w-xl text-slate-400">
            Explore our anime-inspired football jerseys and add your favorite
            kit to the cart.
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
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Your Cart
            </p>

            <h1 className="mt-4 text-4xl font-black md:text-6xl">
              Review Your Order
            </h1>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="w-fit rounded-full border border-white/15 px-5 py-2.5 text-xs font-black uppercase tracking-wide text-white transition hover:bg-white/10"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={`${item.productId}-${item.size}`}
                className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-4 md:grid-cols-[160px_1fr]"
              >
                <Link
                  href={`/products/${item.slug}`}
                  className={`flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-6xl">{item.emoji}</span>
                </Link>

                <div className="flex flex-col justify-between gap-5">
                  <div className="flex flex-col justify-between gap-4 md:flex-row">
                    <div>
                      <p className="text-sm font-semibold text-blue-300">
                        {item.country} Edition
                      </p>

                      <Link href={`/products/${item.slug}`}>
                        <h2 className="mt-1 text-2xl font-black transition hover:text-blue-300">
                          {item.title}
                        </h2>
                      </Link>

                      <p className="mt-2 text-sm text-slate-400">
                        Size:{" "}
                        <span className="font-bold text-white">
                          {item.size}
                        </span>
                      </p>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="text-2xl font-black">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                      <p className="text-sm text-slate-500">
                        {formatPrice(item.price)} each
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center rounded-full border border-white/10 bg-black/20 p-1">
                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.productId, item.size)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="flex h-9 min-w-10 items-center justify-center text-sm font-black">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.productId, item.size)
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.productId, item.size)}
                      className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-red-200 transition hover:bg-red-500/20"
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Order Summary</h2>

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

            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/products"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Continue Shopping
            </Link>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Taxes, discounts, and final shipping options will be confirmed at
              checkout.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}