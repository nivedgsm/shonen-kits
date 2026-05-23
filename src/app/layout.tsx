import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "@/components/cart/CartProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Shonen Kits | Anime Inspired Football Jerseys",
  description:
    "Shop premium anime-inspired national team football jerseys from Shonen Kits. Designed for anime fans, football lovers, and matchday streetwear.",
  keywords: [
    "Shonen Kits",
    "anime football jerseys",
    "anime jerseys India",
    "football jerseys India",
    "anime merchandise",
    "custom football kits"
  ],
  openGraph: {
    title: "Shonen Kits | Anime Inspired Football Jerseys",
    description:
      "Premium anime-inspired national team football jerseys for fans who live football and shonen energy.",
    url: "https://shonenkits.com",
    siteName: "Shonen Kits",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#050816] text-white antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}