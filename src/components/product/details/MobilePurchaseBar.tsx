"use client";

import Button from "@/components/ui/Button";

import { Product } from "@/types/product";

import { formatPrice } from "@/lib/format";

type Props = {
  product: Product;
  onAddToCart: () => void;
};

export default function MobilePurchaseBar({
  product,
  onAddToCart,
}: Props) {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-40
        border-t border-white/10
        bg-[#050816]/90
        backdrop-blur-2xl
        lg:hidden
      "
    >
      <div
        className="
          flex items-center justify-between
          gap-4 px-4 py-4
        "
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Shonen Kits
          </p>

          <p className="mt-1 text-xl font-black text-white">
            {formatPrice(product.price)}
          </p>
        </div>

        <Button
          onClick={onAddToCart}
          className="
            h-12 min-w-[170px]
            rounded-full text-sm
            font-black uppercase
            tracking-wide
          "
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}