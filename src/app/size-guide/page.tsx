export const metadata = {
  title: "Size Guide | Shonen Kits",
  description:
    "Check the Shonen Kits jersey size guide before ordering anime-inspired football jerseys."
};

const sizeRows = [
  {
    size: "S",
    chest: "38 in",
    length: "27 in",
    shoulder: "16.5 in",
    recommended: "Slim / Small build"
  },
  {
    size: "M",
    chest: "40 in",
    length: "28 in",
    shoulder: "17.5 in",
    recommended: "Regular medium build"
  },
  {
    size: "L",
    chest: "42 in",
    length: "29 in",
    shoulder: "18.5 in",
    recommended: "Regular large build"
  },
  {
    size: "XL",
    chest: "44 in",
    length: "30 in",
    shoulder: "19.5 in",
    recommended: "Broad / relaxed fit"
  },
  {
    size: "XXL",
    chest: "46 in",
    length: "31 in",
    shoulder: "20.5 in",
    recommended: "Extra relaxed fit"
  }
];

export default function SizeGuidePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          Size Guide
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
          Find Your Jersey Fit
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-400">
          Use this size guide to choose your preferred Shonen Kits jersey size.
          Measurements are approximate and may vary slightly depending on
          production and fabric handling.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.06] text-xs uppercase tracking-[0.2em] text-slate-300">
                <tr>
                  <th className="px-5 py-4">Size</th>
                  <th className="px-5 py-4">Chest</th>
                  <th className="px-5 py-4">Length</th>
                  <th className="px-5 py-4">Shoulder</th>
                  <th className="px-5 py-4">Recommended For</th>
                </tr>
              </thead>

              <tbody>
                {sizeRows.map((row) => (
                  <tr
                    key={row.size}
                    className="border-t border-white/10 text-slate-300"
                  >
                    <td className="px-5 py-5 text-lg font-black text-white">
                      {row.size}
                    </td>
                    <td className="px-5 py-5">{row.chest}</td>
                    <td className="px-5 py-5">{row.length}</td>
                    <td className="px-5 py-5">{row.shoulder}</td>
                    <td className="px-5 py-5">{row.recommended}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">How to Measure Chest</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Measure around the fullest part of your chest while keeping the
              tape comfortably straight.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">How to Measure Length</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Measure from the highest shoulder point down to the bottom hem of
              a jersey or t-shirt that fits you well.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-xl font-black">Fit Recommendation</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              If you prefer a relaxed streetwear fit, consider choosing one size
              above your regular t-shirt size.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}