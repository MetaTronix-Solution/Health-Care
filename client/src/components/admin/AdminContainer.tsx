import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export function AdminContainer({
  children,
  className,
  narrow,
}: {
  children: ReactNode;
  className?: string;
  /** Use for focused forms (~1200px max) */
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "admin-container",
        narrow && "admin-container-narrow",
        className,
      )}
    >
      {children}
    </div>
  );
}
