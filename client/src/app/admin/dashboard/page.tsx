import type { Metadata } from "next";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { DashboardOverview } from "@/src/components/admin/dashboard/DashboardOverview";

export const metadata: Metadata = {
  title: "Overview",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader title="Overview" />
      <DashboardOverview />
    </div>
  );
}
