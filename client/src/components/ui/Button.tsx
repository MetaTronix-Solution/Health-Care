import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type Variant = "primary" | "secondary" | "inverted" | "outlined";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-tertiary hover:bg-[#132540] border border-primary",
  secondary:
    "bg-neutral-bg text-primary hover:bg-[#e9edf0] border border-neutral-line",
  inverted:
    "bg-tertiary text-primary hover:bg-neutral-bg border border-neutral-line",
  outlined:
    "bg-transparent text-primary hover:bg-primary hover:text-tertiary border border-primary",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-200 whitespace-nowrap";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  className,
  children,
  icon,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
