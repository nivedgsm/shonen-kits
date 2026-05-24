import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProductActions from "@/components/product/details/ProductActions";

import GlowCard from "@/components/shared/GlowCard";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { getProductBySlug, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params;

  const product = getProductBySlug(
    resolvedParams.slug
  );

  if (!product) {
    return {
      title: "Product Not Found | Shonen Kits",
    };
  }

  return {
    title: `${product.title} | Shonen Kits`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params;

  const product = getProductBySlug(
    resolvedParams.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <section className="relative py-14 md:py-24">
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_45%)]
          "
        />

        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            <div>
              <Link
                href="/products"
                className="
                  mb-6 inline-flex text-sm
                  font-semibold text-blue-300
                  transition duration-300
                  hover:text-blue-200
                "
              >
                ← Back to products
              </Link>

              <div className="space-y-4">
                <GlowCard className="overflow-hidden p-0">
                  <div className="relative min-h-[520px] bg-slate-950">
                   <Image
  src={product.image}
  alt={product.title}
  fill
  priority
  loading="eager"
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 50vw"
  className="
    object-cover transition duration-700
    hover:scale-105
  "
/>

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-[#050816]/70
                        via-transparent
                        to-transparent
                      "
                    />

                    <div className="absolute left-6 top-6 flex items-center gap-2">
                      <Badge>
                        {product.country} Edition
                      </Badge>

                      <Badge variant="warning">
                        LIMITED DROP
                      </Badge>
                    </div>

                    <div
                      className="
                        absolute bottom-6 left-6 right-6
                        rounded-3xl border border-white/10
                        bg-black/40 p-5
                        backdrop-blur-md
                      "
                    >
                      <p
                        className={`
                          text-xs font-black uppercase
                          tracking-[0.25em]
                          ${product.accentText}
                        `}
                      >
                        {product.theme}
                      </p>

                      <p className="mt-2 text-2xl font-black text-white">
                        {product.title}
                      </p>
                    </div>
                  </div>
                </GlowCard>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <GlowCard
                      key={item}
                      className="overflow-hidden p-0"
                    >
                      <div className="relative aspect-square bg-slate-950">
                        <Image
                          src={product.image}
                          alt={`${product.title} preview ${item}`}
                          fill
                          sizes="(max-width: 768px) 33vw, 20vw"
                          className="
                            object-cover transition duration-300
                            hover:scale-105
                          "
                        />
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <Badge className={product.accentText}>
                {product.theme}
              </Badge>

              <h1
                className="
                  mt-5 text-4xl font-black
                  tracking-tight text-white
                  md:text-6xl
                "
              >
                {product.title}
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-400">
                {product.description}
              </p>

              <div className="mt-8 flex items-end gap-4">
                <p className="text-4xl font-black text-white">
                  {formatPrice(product.price)}
                </p>

                <p className="pb-1 text-lg text-slate-500 line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              </div>

              <div className="mt-8">
                <ProductActions product={product} />
              </div>

              <div className="mt-5">
                <Link href="/size-guide">
                  <Button variant="outline">
                    View Size Guide
                  </Button>
                </Link>
              </div>

              <GlowCard className="mt-8 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-sm font-semibold uppercase
                        tracking-[0.25em] text-blue-300
                      "
                    >
                      Matchday Aura
                    </p>

                    <h2 className="mt-2 text-2xl font-black text-white">
                      Main Character Energy
                    </h2>
                  </div>

                  <div className="text-5xl">
                    {product.emoji}
                  </div>
                </div>

                <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-400">
                  {product.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3"
                    >
                      <span
                        className="
                          mt-2 h-1.5 w-1.5
                          shrink-0 rounded-full
                          bg-blue-400
                        "
                      />

                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>

              <div
                className="
                  mt-5 rounded-3xl
                  border border-blue-500/20
                  bg-blue-500/10 p-5
                "
              >
                <p className="text-sm leading-6 text-blue-100">
                  Shipping across India. Orders are usually
                  processed within 2-4 business days after
                  confirmation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}