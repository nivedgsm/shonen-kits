import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import ProductPreviewSection from "@/components/home/ProductPreviewSection";
import TrustSection from "@/components/home/TrustSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <HeroSection />

      <ProductPreviewSection />

      <TrustSection />

      <AboutSection />
    </main>
  );
}