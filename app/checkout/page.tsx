import Link from 'next/link';
import { BagContents } from '@/components/Bag';
import { storefrontCatalog } from '@/lib/catalog';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Order review | Kickverse', robots: { index: false } };

export default async function CheckoutPage() {
  const { products, storeId } = await storefrontCatalog();
  return <main className="commerce-page">
    <h1>Review your order</h1>
    {storeId ? <BagContents products={products} storeId={storeId} review /> : <>
      <p role="status">Product availability could not be checked. Please try again shortly.</p>
      <Link href="/cart">Back to bag</Link>
    </>}
  </main>;
}
