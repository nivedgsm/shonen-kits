import { ReactNode } from "react";
import clsx from "clsx";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlowCard({
  children,
  className,
}: GlowCardProps) {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm",
        "transition-all duration-300 hover:border-blue-400/40 hover:bg-white/[0.07]",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/10 before:via-transparent before:to-transparent",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}