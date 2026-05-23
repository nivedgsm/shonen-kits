import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/products/ProductActions";
import { getProductBySlug, products } from "@/data/products";
import { formatPrice } from "@/lib/format";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Shonen Kits"
    };
  }

  return {
    title: `${product.title} | Shonen Kits`,
    description: product.shortDescription
  };
}

export default async function ProductDetailPage({
  params
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <Link
            href="/products"
            className="mb-6 inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            ← Back to products
          </Link>

          <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/45 via-transparent to-transparent" />

            <div className="absolute left-6 top-6 rounded-full bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-wide text-white backdrop-blur">
              {product.country} Edition
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-md">
              <p className={`text-xs font-black uppercase tracking-[0.25em] ${product.accentText}`}>
                {product.theme}
              </p>
              <p className="mt-2 text-2xl font-black text-white">
                {product.title}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p
            className={`text-sm font-bold uppercase tracking-[0.3em] ${product.accentText}`}
          >
            {product.theme}
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            {product.title}
          </h1>

          <p className="mt-5 text-base leading-8 text-slate-400">
            {product.description}
          </p>

          <div className="mt-8 flex items-end gap-4">
            <p className="text-4xl font-black">{formatPrice(product.price)}</p>
            <p className="pb-1 text-lg text-slate-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          </div>

          <ProductActions product={product} />

          <Link
            href="/size-guide"
            className="mt-4 inline-flex w-fit text-sm font-semibold text-blue-300 transition hover:text-blue-200"
          >
            View size guide →
          </Link>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-lg font-black">Product Details</h2>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5">
            <p className="text-sm leading-6 text-blue-100">
              Shipping across India. Orders are usually processed within 2-4
              business days after confirmation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}