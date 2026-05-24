import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        
        {
          "bg-white/10 text-white border border-white/10":
            variant === "default",

          "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20":
            variant === "success",

          "bg-yellow-500/15 text-yellow-300 border border-yellow-500/20":
            variant === "warning",
        },

        className
      )}
    >
      {children}
    </span>
  );
}