"use client";

import { StatsGrid } from "@/src/components/admin/dashboard/StatsGrid";
import { AnalyticsOverview } from "@/src/components/admin/dashboard/AnalyticsOverview";
import { ProductPerformance } from "@/src/components/admin/dashboard/ProductPerformance";
import { useDashboardData } from "@/src/lib/hooks/useDashboardData";

export function DashboardOverview() {
  const { stats, performance, topProducts, loading, error } =
    useDashboardData();

  if (loading) {
    return <p className="text-sm text-neutral-muted">Loading dashboard...</p>;
  }

  if (error) {
    return <p className="text-sm text-red-600">{error}</p>;
  }

  return (
    <>
      <StatsGrid stats={stats} />
      <AnalyticsOverview data={performance} />
      <ProductPerformance products={topProducts} />
    </>
  );
}
