"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "./CartProvider";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItem
  } = useCart();

  return (
    <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4">
      <div
        className="
          flex h-24 w-20 shrink-0 items-center justify-center
          rounded-2xl bg-gradient-to-br text-3xl
        "
      >
        {item.emoji}
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300/60">
              {item.country}
            </p>

            <h3 className="mt-1 text-sm font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-xs text-slate-400">
              Size {item.size}
            </p>
          </div>

          <button
            onClick={() =>
              removeItem(item.productId, item.size)
            }
            className="text-slate-500 transition hover:text-red-400"
          >
            <Trash2 size={16} />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
            <button
              onClick={() =>
                decreaseQuantity(item.productId, item.size)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/10"
            >
              <Minus size={14} />
            </button>

            <span className="w-6 text-center text-sm font-bold text-white">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                increaseQuantity(item.productId, item.size)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition hover:bg-white/10"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="text-right">
            <p className="text-lg font-black text-white">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}