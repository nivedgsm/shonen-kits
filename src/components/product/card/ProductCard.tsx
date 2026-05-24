"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import Badge from "@/components/ui/Badge";
import GlowCard from "@/components/shared/GlowCard";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
  y: -6,
  transition: {
    duration: 0.25,
  },
}}
      className="group h-full"
    >
      <Link href={`/product/${product.slug}`}>
        <GlowCard className="overflow-hidden border border-white/5 bg-[#0B1120]/90 backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#020617]
                via-[#020617]/10
                to-transparent
              "
            />

            <div className="absolute left-4 top-4">
              <Badge>
                {product.country}
              </Badge>
            </div>

            <div
              className="
                absolute inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]
              "
            />
          </div>

          <div className="space-y-3 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-blue-300/70">
                SHONEN KITS
              </p>

              <h3
                className="
                  mt-2
                  text-lg
                  font-semibold
                  text-white
                  transition-colors
                  duration-300
                  group-hover:text-blue-100
                "
              >
                {product.title}
              </h3>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold text-white">
                  ${product.price}
                </p>

                {product.compareAtPrice && (
                  <p className="text-sm text-zinc-500 line-through">
                    ${product.compareAtPrice}
                  </p>
                )}
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-blue-200
                  backdrop-blur-md
                "
              >
                View Kit
              </div>
            </div>
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}