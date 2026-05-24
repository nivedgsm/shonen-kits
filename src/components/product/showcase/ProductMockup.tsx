type ProductMockupProps = {
  country: string;
  title: string;
  gradient: string;
  accentText?: string;
  size?: "card" | "large" | "small";
};

export default function ProductMockup({
  country,
  title,
  gradient,
  accentText = "text-blue-300",
  size = "card"
}: ProductMockupProps) {
  const initials = country.slice(0, 2).toUpperCase();

  const wrapperSize =
    size === "large"
      ? "min-h-[520px]"
      : size === "small"
        ? "h-16 w-16"
        : "h-[320px]";

  const jerseySize =
    size === "large"
      ? "h-[360px] w-[300px]"
      : size === "small"
        ? "h-12 w-10"
        : "h-[230px] w-[190px]";

  const sleeveSize =
    size === "large"
      ? "h-28 w-24"
      : size === "small"
        ? "h-4 w-4"
        : "h-20 w-16";

  const collarSize =
    size === "large"
      ? "h-16 w-24"
      : size === "small"
        ? "h-5 w-6"
        : "h-12 w-16";

  const textSize =
    size === "large"
      ? "text-7xl"
      : size === "small"
        ? "text-xs"
        : "text-5xl";

  return (
    <div
      className={`relative flex ${wrapperSize} items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br ${gradient}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_32%,rgba(0,0,0,0.28)_70%)]" />

      {size !== "small" ? (
        <div className="absolute left-5 top-5 rounded-full bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-wide text-white backdrop-blur">
          New Drop
        </div>
      ) : null}

      <div className="relative flex items-center justify-center">
        <div
          className={`absolute -left-10 top-12 ${sleeveSize} -rotate-[24deg] rounded-[1.5rem] border border-white/20 bg-white/15 shadow-2xl backdrop-blur-sm`}
        />
        <div
          className={`absolute -right-10 top-12 ${sleeveSize} rotate-[24deg] rounded-[1.5rem] border border-white/20 bg-white/15 shadow-2xl backdrop-blur-sm`}
        />

        <div
          className={`relative ${jerseySize} overflow-hidden rounded-t-[3rem] rounded-b-[2rem] border border-white/25 bg-black/20 shadow-2xl backdrop-blur-sm`}
        >
          <div className="absolute inset-0 bg-white/10" />

          <div className="absolute left-0 top-0 h-full w-1/2 bg-white/10" />
          <div className="absolute right-0 top-0 h-full w-1/2 bg-black/10" />

          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20" />

          <div
            className={`absolute left-1/2 top-0 ${collarSize} -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-[#050816]`}
          />

          <div className="absolute left-1/2 top-8 h-10 w-16 -translate-x-1/2 rounded-b-full border-x border-b border-white/20" />

          <div className="absolute left-5 top-8 h-8 w-8 rounded-full border border-white/25 bg-white/10" />
          <div className="absolute right-5 top-8 h-8 w-8 rounded-full border border-white/25 bg-white/10" />

          <div className="absolute inset-x-5 top-24 h-px bg-white/20" />
          <div className="absolute inset-x-8 bottom-16 h-px bg-white/20" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className={`${textSize} font-black tracking-[0.18em] text-white drop-shadow-2xl`}
            >
              {initials}
            </p>

            {size !== "small" ? (
              <p
                className={`mt-3 max-w-[150px] text-center text-[10px] font-black uppercase tracking-[0.25em] ${accentText}`}
              >
                Shonen Kits
              </p>
            ) : null}
          </div>

          <div className="absolute bottom-4 left-1/2 h-8 w-24 -translate-x-1/2 rounded-full bg-white/10 blur-xl" />
        </div>
      </div>

      {size !== "small" ? (
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
          <p className="truncate text-xs font-black uppercase tracking-[0.2em] text-slate-300">
            {country} Edition
          </p>
          <p className="mt-1 truncate text-sm font-black text-white">{title}</p>
        </div>
      ) : null}
    </div>
  );
}