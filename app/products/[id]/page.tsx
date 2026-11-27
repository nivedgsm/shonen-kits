import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ChevronRight } from 'lucide-react';
import ProductImage from '@/components/ProductImage';
import CatalogGrid from '@/components/CatalogGrid';
import { AddToBag } from '@/components/Bag';
import { storefrontCatalog } from '@/lib/catalog';
import { money } from '@/lib/products';

export const dynamic = 'force-dynamic';
type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const { products } = await storefrontCatalog();
  const product = products.find(item => item.id === id);
  return product ? { title: product.name + ' | Kickverse', description: product.description ?? undefined } : { title: 'Product | Kickverse' };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const { products, storeId } = await storefrontCatalog();
  if (!storeId) return <main className="commerce-page"><h1>Product unavailable</h1><p>The catalog is currently unavailable. Please check back shortly.</p><Link href="/shop">Back to shop</Link></main>;
  const product = products.find(item => item.id === id);
  if (!product) notFound();
  const related = products.filter(item => item.id !== id).slice(0, 4);

  return <main className="commerce-page product-page">
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <Link href="/">Home</Link><ChevronRight size={14} aria-hidden="true" />
      <Link href="/shop">Shop</Link><ChevronRight size={14} aria-hidden="true" />
      <span aria-current="page">{product.name}</span>
    </nav>
    <div className="product-detail">
      <ProductImage key={product.id} product={product} gallery />
      <div className="detail-copy">
        <h1>{product.name}</h1>
        <div className="detail-pricing">
          <p className="detail-price">{money(product.price_cents)}</p>
          <p className="availability" data-in-stock={product.stock > 0}>
            {product.stock === 0 ? 'Sold out' : product.stock <= 5 ? `Only ${product.stock} left` : 'In stock'}
          </p>
        </div>
        <AddToBag key={product.id} product={product} storeId={storeId} />
        {product.description?.trim() && <section className="product-description">
          <h2>Product details</h2>
          <p className="detail-description">{product.description}</p>
        </section>}
      </div>
    </div>
    {related.length > 0 && <section className="related-products">
      <div className="related-heading"><h2>More from Kickverse</h2><Link className="text-link" href="/shop">Shop all <ArrowRight size={16} /></Link></div>
      <CatalogGrid products={related} storeId={storeId} />
    </section>}
  </main>;
}
