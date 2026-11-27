import Link from 'next/link';

export default function NotFound() {
  return <main className="commerce-page editorial-page">
    <h1>Page not found</h1>
    <p>The page or product you opened may no longer be available.</p>
    <Link className="btn-primary" href="/shop">Back to the shop</Link>
  </main>;
}
