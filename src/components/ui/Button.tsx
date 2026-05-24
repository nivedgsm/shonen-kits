import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
};

export default function Button({
  children,
  className,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300",
        
        {
          "bg-white text-black hover:scale-[1.02] hover:bg-zinc-200":
            variant === "primary",

          "bg-zinc-900 text-white hover:bg-zinc-800":
            variant === "secondary",

          "border border-zinc-700 bg-transparent text-white hover:bg-zinc-900":
            variant === "outline",

          "w-full": fullWidth,
        },

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}