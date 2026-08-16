import type { Metadata } from "next";
import { RefreshCw } from "lucide-react";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { StatsGrid } from "@/src/components/admin/dashboard/StatsGrid";
import { AnalyticsOverview } from "@/src/components/admin/dashboard/AnalyticsOverview";
import { ProductPerformance } from "@/src/components/admin/dashboard/ProductPerformance";
import {
  statSummaries,
  performanceSeries,
  topProducts,
} from "@/src/data/analytics";

export const metadata: Metadata = {
  title: "Overview",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Overview"
        description="Real-time performance metrics and system status."
        actions={
          <div className="flex items-center gap-3 text-sm text-neutral-muted">
            <span>Last updated: Just now</span>
            <button
              type="button"
              className="flex items-center gap-1.5 font-medium text-secondary hover:underline"
            >
              <RefreshCw aria-hidden className="h-4 w-4" />
              Refresh
            </button>
          </div>
        }
      />

      <StatsGrid stats={statSummaries} />
      <AnalyticsOverview data={performanceSeries} />
      <ProductPerformance products={topProducts} />
    </div>
  );
}
