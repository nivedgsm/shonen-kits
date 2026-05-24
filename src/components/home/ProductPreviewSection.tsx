import Link from "next/link";

import ProductCard from "@/components/product/card/ProductCard";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

import { products } from "@/data/products";

export default function ProductPreviewSection() {
  const featuredProducts = products.slice(0, 3);

  return (
    <section
      id="products"
      className="py-20 md:py-28"
    >
      <Container>
        <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Featured Kits
            </p>

            <SectionHeading
              title="National Team Energy, Anime Soul."
              subtitle="Designed for anime fans, football lovers, casual streetwear fits, and intense matchday watch parties."
            />
          </div>

          <Link href="/products">
            <Button variant="outline">
              View All Products
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}