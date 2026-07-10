import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-[var(--card)] p-8 shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}