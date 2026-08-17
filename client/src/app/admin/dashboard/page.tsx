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
      <PageHeader title="Overview" />
      <StatsGrid stats={statSummaries} />
      <AnalyticsOverview data={performanceSeries} />
      <ProductPerformance products={topProducts} />
    </div>
  );
}
