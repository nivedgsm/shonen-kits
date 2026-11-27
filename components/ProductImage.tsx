'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import type { Product } from '@/lib/products';

export default function ProductImage({ product, large, gallery }: {
  product: Product;
  large?: boolean;
  gallery?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const image = product.images[index];
  const total = product.images.length;
  const multiple = gallery && total > 1;

  return (
    <div className={gallery ? 'product-gallery' : large ? 'catalog-image catalog-image-large' : 'catalog-image'}>
      <div className={gallery ? 'product-gallery-stage catalog-image' : 'catalog-image'}>
      {image && !failed.includes(image)
        ? <img src={image} alt={multiple ? `${product.name}, photo ${index + 1}` : product.name}
            onError={() => setFailed(previous => [...previous, image])} />
        : <div className="catalog-image-empty" role="img" aria-label={`Photo unavailable for ${product.name}`}><ImageOff aria-hidden="true" />{gallery && <span aria-hidden="true">Photo unavailable</span>}</div>}
      {multiple && <>
        <button type="button" className="gallery-arrow gallery-prev" aria-label="Previous photo"
          onClick={() => setIndex(current => (current + total - 1) % total)}><ChevronLeft size={22} /></button>
        <button type="button" className="gallery-arrow gallery-next" aria-label="Next photo"
          onClick={() => setIndex(current => (current + 1) % total)}><ChevronRight size={22} /></button>
        <span className="gallery-count" role="status">{index + 1} / {total}</span>
      </>}
      </div>
      {multiple && (
        <div className="catalog-gallery" aria-label="Product photos">
          {product.images.map((url, position) => (
            <button key={position} type="button" aria-label={`View photo ${position + 1}`}
              aria-pressed={index === position} onClick={() => setIndex(position)}>
              {failed.includes(url) ? <ImageOff size={18} aria-hidden="true" /> :
                <img src={url} alt="" loading="lazy" onError={() => setFailed(previous => [...previous, url])} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
