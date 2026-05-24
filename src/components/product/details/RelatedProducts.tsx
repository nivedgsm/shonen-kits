import ProductCard from "@/components/product/card/ProductCard";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { products } from "@/data/products";

type RelatedProductsProps = {
  currentProductId: string;
};

export default function RelatedProducts({
  currentProductId,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 3);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          title="More Matchday Energy"
          subtitle="Discover more anime-inspired football kits built for fans who live between stadium chants and shonen storytelling."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((product) => (
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