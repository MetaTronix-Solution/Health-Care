import Link from "next/link";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outlined"
  | "outline"
  | "ghost"
  | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: ReactNode;
}

const variantStyles: Record<Exclude<ButtonVariant, "outline">, string> = {
  primary:
    "bg-secondary text-white hover:bg-secondary/90 focus-visible:outline-secondary",
  secondary:
    "border border-neutral-line bg-white text-primary hover:bg-neutral-bg focus-visible:outline-secondary",
  outlined:
    "border border-neutral-line bg-white text-primary hover:bg-neutral-bg focus-visible:outline-secondary",
  ghost:
    "bg-transparent text-neutral-muted hover:bg-neutral-bg hover:text-primary focus-visible:outline-secondary",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2";

function ButtonContent({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <>
      {icon}
      {children}
    </>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      href,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant = variant === "outline" ? "outlined" : variant;
    const classes = cn(
      baseStyles,
      variantStyles[resolvedVariant],
      sizeStyles[size],
      className,
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          <ButtonContent icon={icon}>{children}</ButtonContent>
        </Link>
      );
    }

    return (
      <button ref={ref} type={type} className={classes} {...props}>
        <ButtonContent icon={icon}>{children}</ButtonContent>
      </button>
    );
  },
);

Button.displayName = "Button";
