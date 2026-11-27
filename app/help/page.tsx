import Link from 'next/link';

export const metadata = { title: 'Shopping help | Kickverse' };

export default function HelpPage() {
  return <main className="commerce-page editorial-page">
    <h1>Shopping help</h1>
    <details><summary>Where can I check product details?</summary><p>Open a product from the <Link href="/shop">shop</Link> to see its photos, description, price, and availability.</p></details>
    <details><summary>Where is my bag saved?</summary><p>Your bag is saved in your current browser. The store checks current prices and stock when you open it.</p></details>
    <details><summary>Can I place an order online?</summary><p>Online ordering is currently unavailable. You can review the items and subtotal in your <Link href="/cart">shopping bag</Link>.</p></details>
  </main>;
}
