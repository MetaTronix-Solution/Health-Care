import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      {Icon ? (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-bg text-neutral-muted">
          <Icon aria-hidden className="h-6 w-6" />
        </span>
      ) : null}
      <p className="text-base font-semibold text-primary">{title}</p>
      {description ? (
        <p className="max-w-sm text-sm text-neutral-muted">{description}</p>
      ) : null}
      {action}
    </div>
  );
}
