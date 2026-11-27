import ShopCatalog from '@/components/ShopCatalog';
import { storefrontCatalog } from '@/lib/catalog';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Shop | Kickverse' };

export default async function ShopPage() {
  return <main className="commerce-page">
    <h1>Shop jerseys</h1>
    <ShopCatalog {...await storefrontCatalog()} />
  </main>;
}
