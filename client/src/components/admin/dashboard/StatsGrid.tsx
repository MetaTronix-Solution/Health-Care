import { StatCard } from "@/src/components/admin/dashboard/StatCard";
import type { StatSummary } from "@/src/types/analytics";

export function StatsGrid({ stats }: { stats: StatSummary[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
