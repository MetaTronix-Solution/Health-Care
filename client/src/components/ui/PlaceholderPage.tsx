import { Construction } from "lucide-react";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Card } from "@/src/components/ui/Card";
import { EmptyState } from "@/src/components/ui/EmptyState";

export function PlaceholderPage({
  title,
  description,
  emptyTitle,
  emptyDescription,
}: {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
}) {
  return (
    <div className="admin-page">
      <PageHeader title={title} description={description} />
      <Card className="min-h-[300px]">
        <EmptyState
          icon={Construction}
          title={emptyTitle}
          description={emptyDescription}
          compact
        />
      </Card>
    </div>
  );
}
