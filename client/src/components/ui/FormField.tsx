import type { ReactNode } from "react";

export function FormField({
  label,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-primary"
      >
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1 text-xs text-neutral-muted">{hint}</p> : null}
    </div>
  );
}
