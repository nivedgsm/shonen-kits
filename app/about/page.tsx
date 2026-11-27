import Link from 'next/link';

export const metadata = { title: 'About | Kickverse' };

export default function AboutPage() {
  return <main className="commerce-page editorial-page">
    <h1>About Kickverse</h1>
    <p>Kickverse brings anime-inspired design to football jerseys. The collection is made for fans who bring as much personality to the stands as they do to the pitch.</p>
    <Link className="btn-primary" href="/shop">Explore the collection</Link>
  </main>;
}
