import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';
export const metadata: Metadata = {title:'KICKVERSE — Anime Football Jerseys',description:'Original anime-inspired football jersey designs. Shop the drop.'};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <SiteHeader />
    {children}
    <footer className="site-footer">
      <Link className="logo" href="/">KICKVERSE<span className="logo-dot">.</span></Link>
      <nav aria-label="Footer navigation"><Link href="/shop">Shop</Link><Link href="/about">About</Link><Link href="/help">Help</Link></nav>
      <small>© 2026 Kickverse</small>
    </footer>
  </body></html>;
}
