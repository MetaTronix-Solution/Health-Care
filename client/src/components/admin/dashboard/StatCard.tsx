import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn, formatNumber } from "@/src/lib/utils";
import type { StatSummary } from "@/src/types/analytics";

export function StatCard({ stat }: { stat: StatSummary }) {
  const isUp = stat.trend === "up";

  return (
    <div className="rounded-lg border border-neutral-line bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="eyebrow">{stat.label}</p>
      </div>
      <p className="mt-3 text-3xl font-semibold text-primary">
        {formatNumber(stat.value)}
      </p>
      <p
        className={cn(
          "mt-2 flex items-center gap-1 text-xs font-medium",
          isUp ? "text-emerald-600" : "text-amber-600",
        )}
      >
        {isUp ? (
          <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
        ) : (
          <ArrowDownRight aria-hidden className="h-3.5 w-3.5" />
        )}
        {stat.changeLabel}
      </p>
    </div>
  );
}
