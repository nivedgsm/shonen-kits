import GlowCard from "@/components/shared/GlowCard";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const trustItems = [
  {
    title: "Secure Checkout",
    description:
      "Online payments are processed through trusted payment partners with secure transaction handling.",
    stat: "Safe",
  },
  {
    title: "India-Wide Shipping",
    description:
      "We ship to serviceable pincodes across India with clear processing and delivery timelines.",
    stat: "Pan India",
  },
  {
    title: "Customer Support",
    description:
      "For order questions, product queries, and shipping support, our team is available by email.",
    stat: "24-48h",
  },
  {
    title: "Fanwear Quality",
    description:
      "Our jerseys are designed for anime fans, football lovers, casual fits, and matchday watch parties.",
    stat: "Premium",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <GlowCard className="p-6 md:p-10">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
                Why Shop With Us
              </p>

              <SectionHeading
                title="Built Like a Real Fanwear Store"
                subtitle="Shonen Kits focuses on clear product information, transparent policies, secure checkout, and reliable customer communication."
              />
            </div>

            <Badge>
              TRUSTED FANWEAR EXPERIENCE
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.03]"
              >
                <p className="text-3xl font-black text-white">
                  {item.stat}
                </p>

                <h3 className="mt-5 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </GlowCard>
      </Container>
    </section>
  );
}