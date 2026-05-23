export const metadata = {
  title: "Privacy Policy | Shonen Kits",
  description:
    "Read the Shonen Kits privacy policy for information about how customer data is collected and used."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Policy
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-sm text-slate-500">
          Last updated: 22 May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-300">
          <section>
            <h2 className="text-2xl font-black text-white">1. Introduction</h2>
            <p className="mt-3">
              Shonen Kits respects your privacy and is committed to protecting
              the personal information you share with us while using our
              website and purchasing our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              2. Information We Collect
            </h2>
            <p className="mt-3">
              We may collect information such as your name, email address, phone
              number, shipping address, billing details, order details, and
              payment-related information required to process your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              3. How We Use Your Information
            </h2>
            <p className="mt-3">
              Your information is used to process orders, arrange shipping,
              provide customer support, communicate order updates, improve our
              services, and comply with legal or regulatory requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              4. Payment Information
            </h2>
            <p className="mt-3">
              Online payments are processed through secure third-party payment
              providers. Shonen Kits does not store complete card numbers, UPI
              PINs, net banking passwords, or sensitive payment credentials on
              its servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              5. Sharing of Information
            </h2>
            <p className="mt-3">
              We may share necessary information with shipping partners, payment
              processors, service providers, or legal authorities where required
              to complete transactions, deliver products, or comply with law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              6. Data Security
            </h2>
            <p className="mt-3">
              We take reasonable measures to protect customer information.
              However, no method of online transmission or storage is completely
              secure, and customers use the website at their own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">
              7. Contact Us
            </h2>
            <p className="mt-3">
              For privacy-related questions, contact us at
              support@shonenkits.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}