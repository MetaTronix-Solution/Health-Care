import type { Metadata } from "next";
import { PlaceholderPage } from "@/src/components/ui/PlaceholderPage";

export const metadata: Metadata = { title: "Analytics" };

export default function AnalyticsPage() {
  return (
    <PlaceholderPage
      title="Analytics"
      description="Product performance, views, inquiries, and demo requests over time."
      emptyTitle="Analytics dashboard coming soon"
      emptyDescription="Detailed trend charts, top products, and date-range filtering will appear here once connected to live data."
    />
  );
}
