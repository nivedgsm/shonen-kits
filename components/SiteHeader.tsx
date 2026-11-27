'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag } from 'lucide-react';

export default function SiteHeader() {
  const path = usePathname();
  return <header className="header site-header">
    <Link href="/" className="logo"><span className="logo-mark">K<span>V</span></span> KICKVERSE<span className="logo-dot">.</span></Link>
    <nav aria-label="Main navigation" className="site-nav">
      <Link href="/shop" aria-current={path === '/shop' ? 'page' : undefined}>Shop</Link>
      <Link href="/about" aria-current={path === '/about' ? 'page' : undefined}>About</Link>
    </nav>
    <div className="site-actions">
      <Link href="/shop#search" aria-label="Search products"><Search size={21} /></Link>
      <Link href="/cart" aria-label="Shopping bag"><ShoppingBag size={21} /></Link>
    </div>
  </header>;
}
