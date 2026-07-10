import type { InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-700 bg-[var(--card)] px-4 py-3 outline-none transition",
        "focus:border-emerald-500",
        className
      )}
      {...props}
    />
  );
}