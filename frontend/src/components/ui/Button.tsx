import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl px-6 py-3 font-semibold transition duration-300",
        variant === "primary"
          ? "bg-emerald-500 text-black hover:bg-emerald-400"
          : "border border-gray-700 hover:border-emerald-500 text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}