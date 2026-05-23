"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";

type ProductActionsProps = {
  product: {
    id: string;
    slug: string;
    title: string;
    country: string;
    price: number;
    compareAtPrice: number;
    emoji: string;
    gradient: string;
    sizes: string[];
  };
};

export default function ProductActions({ product }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0] ?? ""
  );
  const [addedMessage, setAddedMessage] = useState("");
  const { addItem } = useCart();

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
      size: selectedSize
    });

    setAddedMessage(`${product.title} - Size ${selectedSize} added to cart`);

    window.setTimeout(() => {
      setAddedMessage("");
    }, 2500);
  }

  function handleBuyNow() {
    handleAddToCart();
  }

  return (
    <>
      <div className="mt-8">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-white">
          Select Size
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {product.sizes.map((size) => {
            const isSelected = selectedSize === size;

            return (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={
                  isSelected
                    ? "flex h-12 min-w-14 items-center justify-center rounded-full border border-blue-400 bg-blue-500 px-5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition"
                    : "flex h-12 min-w-14 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-blue-500/10"
                }
              >
                {size}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-sm text-slate-400">
          Selected size:{" "}
          <span className="font-bold text-white">{selectedSize}</span>
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className="rounded-full bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
        >
          Add to Cart
        </button>

        <Link
          href="/cart"
          onClick={handleBuyNow}
          className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-blue-200"
        >
          Buy Now
        </Link>
      </div>

      {addedMessage ? (
        <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm font-semibold text-green-200">
          {addedMessage}
        </div>
      ) : null}
    </>
  );
}