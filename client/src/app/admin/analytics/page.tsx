import type { Metadata } from "next";
import { BarChart3, Eye, MessageSquare, Package } from "lucide-react";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Card, CardContent } from "@/src/components/ui/Card";
import { EmptyState } from "@/src/components/ui/EmptyState";

export const metadata: Metadata = { title: "Analytics" };

const KPI_PLACEHOLDERS = [
  {
    label: "Total Products",
    icon: Package,
  },
  {
    label: "Product Views",
    icon: Eye,
  },
  {
    label: "Inquiries",
    icon: MessageSquare,
  },
  {
    label: "Demo Requests",
    icon: BarChart3,
  },
] as const;

export default function AnalyticsPage() {
  return (
    <div className="admin-page">
      <PageHeader
        title="Analytics"
        description="Product performance, views, inquiries, and demo requests."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPI_PLACEHOLDERS.map(({ label, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="text-[13px] font-medium text-neutral-muted">
                  {label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-primary">—</p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-bg text-neutral-muted">
                <Icon aria-hidden className="h-4 w-4" />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="min-h-[300px]">
        <EmptyState
          icon={BarChart3}
          title="Analytics data is not available yet"
          description="Connect your data sources to view product performance insights, trend charts, and reporting."
          compact
        />
      </Card>
    </div>
  );
}
