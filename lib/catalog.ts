import { cache } from 'react';
import type { Product } from './products';

type Catalog = {
  store: { id: string; slug: string };
  products: (Omit<Product, 'images'> & { image_public_ids: string[] })[];
};

export const loadCatalog = cache(async () => {
  const api = process.env.COMMERCE_API_URL || 'http://localhost:4000';
  const slug = process.env.COMMERCE_STORE_SLUG;
  const storefront = process.env.COMMERCE_STOREFRONT_URL?.trim();
  const cloud = process.env.COMMERCE_CLOUDINARY_CLOUD_NAME;
  const endpoint = storefront
    ? `/public/storefront/products?${new URLSearchParams({ url: storefront })}`
    : slug && `/public/stores/${encodeURIComponent(slug)}/products`;
  if (!endpoint) throw new Error('Configure COMMERCE_STOREFRONT_URL or COMMERCE_STORE_SLUG');
  const response = await fetch(`${api.replace(/\/+$/, '')}${endpoint}`, {
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Commerce catalog returned HTTP ${response.status}`);

  const { store, products }: Catalog = await response.json();
  return {
    storeId: store.id,
    products: products.map(({ image_public_ids, ...product }): Product => ({
      ...product,
      images: cloud ? image_public_ids.map(id =>
        `https://res.cloudinary.com/${encodeURIComponent(cloud)}/image/upload/f_auto,q_auto/${id.split('/').map(encodeURIComponent).join('/')}`
      ) : [],
    })),
  };
});

export async function storefrontCatalog() {
  try {
    return await loadCatalog();
  } catch (error) {
    console.error('Unable to load commerce catalog', error);
    return { storeId: null, products: [] };
  }
}
