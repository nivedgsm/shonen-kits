export type Product = {
  id: string;
  name: string;
  description: string | null;
  price_cents: number;
  stock: number;
  images: string[];
};

const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
export const money = (cents: number) => currency.format(cents / 100);
export const productPath = (id: string) => '/products/' + encodeURIComponent(id);
