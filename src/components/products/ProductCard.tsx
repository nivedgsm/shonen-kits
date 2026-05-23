import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: {
    id: string;
    slug: string;
    title: string;
    country: string;
    shortDescription: string;
    price: number;
    compareAtPrice: number;
    image: string;
    emoji: string;
    gradient: string;
    accentText: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={product.id === "india-blue-striker"}
        />

        <div className="absolute left-5 top-5 rounded-full bg-black/50 px-4 py-2 text-xs font-black uppercase tracking-wide text-white backdrop-blur">
          New Drop
        </div>
      </Link>

      <div className="pt-6">
        <p className={`text-sm font-bold ${product.accentText}`}>
          {product.country} Edition
        </p>

        <h3 className="mt-2 min-h-[64px] text-2xl font-black leading-tight text-white">
          {product.title}
        </h3>

        <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-black text-white">
              {formatPrice(product.price)}
            </p>
            <p className="text-sm text-slate-500 line-through">
              {formatPrice(product.compareAtPrice)}
            </p>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="rounded-full bg-white px-5 py-2.5 text-xs font-black uppercase tracking-wide text-slate-950 transition hover:bg-blue-200"
          >
            View Kit
          </Link>
        </div>
      </div>
    </article>
  );
}