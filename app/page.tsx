import Storefront from '@/components/Storefront';
import { storefrontCatalog } from '@/lib/catalog';

export const dynamic = 'force-dynamic';

export default async function Home() {
  return <Storefront {...await storefrontCatalog()} />;
}
