import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type BadgeVariant = "success" | "warning" | "danger" | "neutral" | "info";

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-red-50 text-red-700",
  neutral: "bg-neutral-100 text-neutral-600",
  info: "bg-blue-50 text-blue-700",
};

export interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
  tone?: "dark" | "light"; // keep for backward compatibility with existing usages
}

export function Badge({ children, className, variant, tone }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        variant
          ? variantStyles[variant]
          : tone === "dark"
            ? "bg-neutral-900 text-white"
            : "bg-neutral-100 text-neutral-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
