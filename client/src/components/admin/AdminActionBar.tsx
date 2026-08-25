import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export function AdminActionBar({
  children,
  className,
  sticky = true,
}: {
  children: ReactNode;
  className?: string;
  sticky?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-3 rounded-lg border border-neutral-line bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
        sticky && "sticky bottom-0 z-20 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function AdminActionBarGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
