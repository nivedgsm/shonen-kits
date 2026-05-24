export default function ProductCardSkeleton() {
  return (
    <div
      className="
        animate-pulse
        overflow-hidden
        rounded-3xl
        border
        border-white/5
        bg-white/[0.03]
      "
    >
      <div className="aspect-[4/5] bg-white/[0.04]" />

      <div className="space-y-3 p-5">
        <div className="h-3 w-24 rounded-full bg-white/[0.05]" />

        <div className="h-6 w-3/4 rounded-full bg-white/[0.06]" />

        <div className="flex items-center justify-between pt-2">
          <div className="h-5 w-16 rounded-full bg-white/[0.06]" />

          <div className="h-8 w-24 rounded-full bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}