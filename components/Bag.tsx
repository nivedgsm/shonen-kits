'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag } from 'lucide-react';
import { changeQuantity, useBag } from '@/lib/bag';
import { money, productPath, type Product } from '@/lib/products';
import ProductImage from './ProductImage';

export function AddToBag({ product, storeId }: { product: Product; storeId: string }) {
  const { ready, lines } = useBag(storeId);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState<{ text: string; error: boolean }>();
  const remaining = Math.max(0, product.stock - (lines.find(line => line.id === product.id)?.qty ?? 0));
  const selected = Math.min(quantity, remaining);

  return <div className="bag-purchase">
    <div className="purchase-actions">
      {remaining > 0 && <div className="purchase-stepper" role="group" aria-label="Quantity">
        <button type="button" aria-label="Decrease quantity" disabled={!ready || selected <= 1}
          onClick={() => setQuantity(selected - 1)}><Minus size={17} /></button>
        <span aria-live="polite" aria-atomic="true">{selected}</span>
        <button type="button" aria-label="Increase quantity" disabled={!ready || selected >= remaining}
          onClick={() => setQuantity(selected + 1)}><Plus size={17} /></button>
      </div>}
      <button type="button" className="btn-primary purchase-button" disabled={!ready || remaining === 0} onClick={() => {
        const saved = changeQuantity(storeId, product.id, product.stock, selected);
        setMessage(saved ? { text: `Added ${selected} to your bag.`, error: false }
          : { text: 'Your bag could not be saved in this browser.', error: true });
        if (saved) setQuantity(1);
      }}>
        <span>{product.stock === 0 ? 'Sold out' : remaining === 0 ? 'Stock limit reached' :
          selected > 1 ? `Add to bag · ${money(product.price_cents * selected)}` : 'Add to bag'}</span>
        <ShoppingBag size={19} aria-hidden="true" />
      </button>
    </div>
    <div className="purchase-feedback">
      <p role="status" data-error={message?.error}>{message?.text}</p>
      <Link className="text-link" href="/cart">View bag</Link>
    </div>
  </div>;
}

export function BagContents({ products, storeId, review = false }: { products: Product[]; storeId: string; review?: boolean }) {
  const { ready, lines } = useBag(storeId);
  const [error, setError] = useState(false);
  if (!ready) return <p role="status">Loading your bag…</p>;
  if (!lines.length) return <div className="empty-results"><p>Your bag is empty.</p><Link className="btn-primary" href="/shop">Browse products</Link></div>;

  const catalog = new Map(products.map(product => [product.id, product]));
  const items = lines.map(line => {
    const product = catalog.get(line.id);
    return { ...line, product, available: Math.min(line.qty, product?.stock ?? 0) };
  });
  const subtotal = items.reduce((sum, item) => sum + (item.product?.price_cents ?? 0) * item.available, 0);
  const hasAvailable = items.some(item => item.available > 0);
  return <div className="bag-layout">
    <section aria-label="Bag items" className="bag-lines">
      {items.map(({ id, qty, product, available }) => <article className="bag-row" key={id}>
        {product && <Link className="bag-photo" href={productPath(id)} aria-label={product.name}><ProductImage product={product} /></Link>}
        <div>
          <h2>{product ? <Link href={productPath(id)}>{product.name}</Link> : 'Unavailable product'}</h2>
          <p>{available > 0 && product ? money(product.price_cents) + ' each' : 'This item is currently unavailable.'}</p>
          {available > 0 && available < qty && <p>Quantity adjusted to match current stock.</p>}
          {review && available > 0 && <p>Quantity {available}</p>}
          {!review && <div className="bag-controls">
            {product && available > 0 && <>
              <button type="button" aria-label={'Decrease quantity of ' + product.name} onClick={() => setError(!changeQuantity(storeId, id, product.stock, -1))}><Minus size={16} /></button>
              <span aria-label="Quantity">{available}</span>
              <button type="button" aria-label={'Increase quantity of ' + product.name} disabled={available >= product.stock} onClick={() => setError(!changeQuantity(storeId, id, product.stock, 1))}><Plus size={16} /></button>
            </>}
            <button type="button" className="bag-remove" aria-label={'Remove ' + (product?.name ?? 'unavailable product')} onClick={() => setError(!changeQuantity(storeId, id, 0, null))}>Remove</button>
          </div>}
        </div>
        {product && available > 0 && <strong>{money(product.price_cents * available)}</strong>}
      </article>)}
      {error && <p role="alert">Your bag could not be saved in this browser.</p>}
    </section>
    <aside className="bag-summary">
      <h2>Order summary</h2>
      <div><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
      {review ? <>
        <p>Online ordering is currently unavailable.</p>
        <Link className="text-link" href="/cart">Back to bag</Link>
      </> : hasAvailable && <Link className="btn-primary" href="/checkout">Review order</Link>}
    </aside>
  </div>;
}
