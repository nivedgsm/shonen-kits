'use client';

import { useState } from 'react';
import CatalogGrid from './CatalogGrid';
import type { Product } from '@/lib/products';

export default function ShopCatalog({ products, storeId }: { products: Product[]; storeId: string | null }) {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('featured');
  const [inStock, setInStock] = useState(false);
  const term = query.trim().toLowerCase();
  const matching = products.filter(product =>
    (!inStock || product.stock > 0) &&
    (product.name + ' ' + (product.description ?? '')).toLowerCase().includes(term)
  );
  if (sort === 'low') matching.sort((a, b) => a.price_cents - b.price_cents);
  if (sort === 'high') matching.sort((a, b) => b.price_cents - a.price_cents);

  return <>
    <div className="catalog-controls" id="search">
      <label>Search products <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search jerseys" /></label>
      <label>Sort by <select value={sort} onChange={event => setSort(event.target.value)}>
        <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
      </select></label>
      <label className="stock-filter"><input type="checkbox" checked={inStock} onChange={event => setInStock(event.target.checked)} /> In stock only</label>
    </div>
    {storeId && <p className="catalog-count" aria-live="polite">{matching.length} {matching.length === 1 ? 'product' : 'products'}</p>}
    {products.length > 0 && matching.length === 0
      ? <p className="empty-results">No products match these filters.</p>
      : <CatalogGrid products={matching} storeId={storeId} />}
  </>;
}
