import { forwardRef } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon ? (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-muted">
            {icon}
          </span>
        ) : null}
        <input
          ref={ref}
          className={cn("admin-input", icon && "pl-9", className)}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
