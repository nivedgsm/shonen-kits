import Link from 'next/link';
import { BagContents } from '@/components/Bag';
import { storefrontCatalog } from '@/lib/catalog';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Shopping bag | Kickverse' };

export default async function CartPage() {
  const { products, storeId } = await storefrontCatalog();
  return <main className="commerce-page">
    <h1>Shopping bag</h1>
    {storeId ? <BagContents products={products} storeId={storeId} /> : <p role="status">Product availability could not be checked. Your bag is still saved in this browser.</p>}
    <Link className="text-link page-return" href="/shop">Continue shopping</Link>
  </main>;
}
