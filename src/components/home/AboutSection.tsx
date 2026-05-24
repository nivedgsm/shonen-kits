import GlowCard from "@/components/shared/GlowCard";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
    >
      <Container>
        <GlowCard className="mx-auto max-w-4xl p-8 md:p-12">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              About The Brand
            </p>

            <SectionHeading
              title="Built for Anime x Football Fans"
              subtitle="Shonen Kits is a concept ecommerce brand creating anime-inspired football fanwear for supporters who live between stadium chants, national pride, and anime-style storytelling."
              align="center"
            />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              This preview store currently uses mock products for business and
              Razorpay verification purposes. Final products, checkout systems,
              and order fulfillment flows will be added after approval.
            </p>
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}