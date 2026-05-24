"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ShoppingBag, X } from "lucide-react";
import { useCart } from "./CartProvider";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="
              fixed inset-0 z-[90]
              bg-black/70
              backdrop-blur-md
            "
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 240
            }}
            className="
              fixed right-0 top-0 z-[100]
              flex h-screen w-full max-w-md
              flex-col border-l border-white/10
              bg-[#050816]
            "
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-300/60">
                  SHONEN KITS
                </p>

                <h2 className="mt-1 text-2xl font-black text-white">
                  Your Cart
                </h2>
              </div>

              <button
                onClick={closeCart}
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-white/10
                  bg-white/[0.04] text-white
                  transition hover:bg-white/10
                "
              >
                <X size={18} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <div
                  className="
                    flex h-24 w-24 items-center justify-center
                    rounded-full border border-white/10
                    bg-white/[0.04]
                  "
                >
                  <ShoppingBag
                    size={40}
                    className="text-slate-500"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  Your Cart Is Empty
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                  Build your ultimate anime football collection.
                </p>

                <Link
                  href="/products"
                  onClick={closeCart}
                  className="
                    mt-8 inline-flex items-center gap-2
                    rounded-full bg-white px-6 py-3
                    text-sm font-black uppercase
                    tracking-wide text-slate-950
                    transition hover:bg-blue-200
                  "
                >
                  Explore Kits
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
                  {items.map((item) => (
                    <CartItem
                      key={`${item.productId}-${item.size}`}
                      item={item}
                    />
                  ))}
                </div>

                <div className="border-t border-white/10 p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      Subtotal
                    </p>

                    <p className="text-3xl font-black text-white">
                      ${subtotal.toFixed(2)}
                    </p>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Shipping & taxes calculated at checkout
                  </p>

                  <div className="mt-6 space-y-3">
                    <Link
                      href="/checkout"
                      onClick={closeCart}
                      className="
                        flex h-14 w-full items-center
                        justify-center rounded-full
                        bg-white text-sm font-black
                        uppercase tracking-wide
                        text-slate-950 transition
                        hover:bg-blue-200
                      "
                    >
                      Checkout
                    </Link>

                    <button
                      onClick={closeCart}
                      className="
                        flex h-14 w-full items-center
                        justify-center rounded-full
                        border border-white/10
                        bg-white/[0.04]
                        text-sm font-bold text-white
                        transition hover:bg-white/10
                      "
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}