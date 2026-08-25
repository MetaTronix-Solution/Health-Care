import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: ReactNode;
  compact?: boolean;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  compact = false,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 px-6 text-center",
        compact ? "py-12" : "py-16",
      )}
    >
      {Icon ? (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-bg text-neutral-muted">
          <Icon aria-hidden className="h-5 w-5" />
        </span>
      ) : null}
      <p className="text-sm font-semibold text-primary">{title}</p>
      {description ? (
        <p className="max-w-md text-sm text-neutral-muted">{description}</p>
      ) : null}
      {action}
    </div>
  );
}
