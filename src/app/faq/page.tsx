export const metadata = {
  title: "FAQ | Shonen Kits",
  description:
    "Frequently asked questions about Shonen Kits orders, shipping, payments, returns, and sizing."
};

const faqs = [
  {
    question: "What is Shonen Kits?",
    answer:
      "Shonen Kits is an India-based ecommerce brand offering anime-inspired football jerseys and fanwear designed for football fans, anime fans, and streetwear lovers."
  },
  {
    question: "Where do you ship?",
    answer:
      "We currently ship to serviceable pincodes across India. Delivery availability may depend on courier coverage for your location."
  },
  {
    question: "How long does order processing take?",
    answer:
      "Orders are usually processed within 2-4 business days after confirmation. During high-demand periods, holidays, or operational delays, processing may take longer."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Estimated delivery time is generally 5-10 business days after dispatch, depending on your location and courier partner."
  },
  {
    question: "How do I choose the correct size?",
    answer:
      "You can use our size guide before ordering. If you prefer a relaxed streetwear fit, consider choosing one size above your regular t-shirt size."
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Cancellation requests may be accepted before the order is processed or shipped. Once the order enters processing, printing, packing, or dispatch, cancellation may not be possible."
  },
  {
    question: "Do you accept returns or exchanges?",
    answer:
      "Returns or exchanges may be accepted only for damaged, defective, or incorrect products received by the customer. Customers must contact us within 48 hours of delivery with order details and clear photos of the issue."
  },
  {
    question: "How will online payments work?",
    answer:
      "Online payments will be processed securely through Razorpay once payment gateway approval is completed. Shonen Kits does not store sensitive payment credentials such as UPI PINs, card numbers, or banking passwords."
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact us at support@shonenkits.com. Our support hours are Monday to Saturday, 10:00 AM to 6:00 PM IST."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Help Center
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Frequently Asked Questions
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
          Find answers about Shonen Kits orders, shipping, payments, returns,
          sizing, and customer support.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                  {index + 1}
                </div>

                <div>
                  <h2 className="text-xl font-black">{faq.question}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}