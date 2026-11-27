import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductImage from './ProductImage';
import { money, productPath, type Product } from '@/lib/products';

export default function CatalogGrid({ products, storeId }: { products: Product[]; storeId: string | null }) {
  if (!products.length) return <p className="empty-results">{storeId ? 'No products to display.' : 'The catalog is currently unavailable.'}</p>;
  return <div className="product-grid">
    {products.map(product => <article key={product.id} className="product-card">
      <Link href={productPath(product.id)} className="product-image catalog-card-image" aria-label={product.name}>
        {product.stock === 0 && <span className="product-tag">SOLD OUT</span>}
        <ProductImage product={product} />
      </Link>
      <div className="product-meta"><h3><Link href={productPath(product.id)}>{product.name}</Link></h3><strong>{money(product.price_cents)}</strong></div>
      <Link className="add-button" href={productPath(product.id)}>VIEW PRODUCT <ArrowRight size={17} /></Link>
    </article>)}
  </div>;
}
