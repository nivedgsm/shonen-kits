"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useCart } from "@/components/cart/CartProvider";

import GlowCard from "@/components/shared/GlowCard";
import Toast from "@/components/shared/Toast";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

import MobilePurchaseBar from "./MobilePurchaseBar";

import { Product } from "@/types/product";

type ProductActionsProps = {
  product: Product;
};

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0] ?? ""
  );

  const [quantity, setQuantity] = useState(1);

  const [showToast, setShowToast] = useState(false);

  const { addItem } = useCart();

  useEffect(() => {
    if (!showToast) return;

    const timeout = window.setTimeout(() => {
      setShowToast(false);
    }, 2600);

    return () => clearTimeout(timeout);
  }, [showToast]);

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      title: product.title,
      country: product.country,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      emoji: product.emoji,
      gradient: product.gradient,
      size: selectedSize,
      quantity,
    });

    setShowToast(true);
  }

  function handleBuyNow() {
    handleAddToCart();
  }

  return (
    <>
      <div className="space-y-6">
        <GlowCard className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p
                className="
                  text-sm font-black uppercase
                  tracking-[0.2em] text-white
                "
              >
                Select Size
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Choose your preferred fit.
              </p>
            </div>

            <Badge>
              READY TO SHIP
            </Badge>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {product.sizes.map((size) => {
              const isSelected = selectedSize === size;

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={
                    isSelected
                      ? `
                        flex h-12 min-w-14 items-center
                        justify-center rounded-full
                        border border-blue-400
                        bg-blue-500 px-5
                        text-sm font-bold text-white
                        shadow-lg shadow-blue-500/25
                        transition duration-300
                      `
                      : `
                        flex h-12 min-w-14 items-center
                        justify-center rounded-full
                        border border-white/15
                        bg-white/[0.03] px-5
                        text-sm font-bold text-white
                        transition duration-300
                        hover:border-blue-400
                        hover:bg-blue-500/10
                      `
                  }
                >
                  {size}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-400">
                Selected Size
              </p>

              <p className="mt-1 text-lg font-black text-white">
                {selectedSize}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) =>
                    Math.max(1, prev - 1)
                  )
                }
                className="
                  flex h-11 w-11 items-center
                  justify-center rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  text-lg font-black text-white
                  transition duration-300
                  hover:bg-white/10
                "
              >
                −
              </button>

              <div
                className="
                  flex h-11 min-w-12
                  items-center justify-center
                  rounded-full border
                  border-white/10
                  bg-white/[0.04]
                  px-4 text-sm font-black
                  text-white
                "
              >
                {quantity}
              </div>

              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
                className="
                  flex h-11 w-11 items-center
                  justify-center rounded-full
                  border border-white/10
                  bg-white/[0.04]
                  text-lg font-black text-white
                  transition duration-300
                  hover:bg-white/10
                "
              >
                +
              </button>
            </div>
          </div>
        </GlowCard>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button
            onClick={handleAddToCart}
            className="
              h-14 text-sm font-black
              uppercase tracking-wide
            "
          >
            Add to Cart
          </Button>

          <Link
            href="/checkout"
            onClick={handleBuyNow}
          >
            <Button
              variant="secondary"
              className="
                h-14 w-full text-sm
                font-black uppercase
                tracking-wide
              "
            >
              Buy Now
            </Button>
          </Link>
        </div>
      </div>

      <MobilePurchaseBar
        product={product}
        onAddToCart={handleAddToCart}
      />

      <Toast
        show={showToast}
        title="Added To Cart"
        description={`${product.title} • Size ${selectedSize}`}
      />
    </>
  );
}