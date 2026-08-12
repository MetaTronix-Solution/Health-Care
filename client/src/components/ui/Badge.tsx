import { cn } from "@/src/lib/utils";
export function Badge({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]",
        tone === "dark"
          ? "bg-primary text-tertiary"
          : "bg-neutral-bg text-primary border border-neutral-line",
        className,
      )}
    >
      {children}
    </span>
  );
}
