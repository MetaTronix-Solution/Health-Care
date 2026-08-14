import { Construction } from "lucide-react";
import { PageHeader } from "@/src/components/ui/PageHeader";
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
    <div className="flex flex-col gap-8">
      <PageHeader title={title} description={description} />
      <div className="rounded-lg border border-neutral-line bg-white">
        <EmptyState
          icon={Construction}
          title={emptyTitle}
          description={emptyDescription}
        />
      </div>
    </div>
  );
}
