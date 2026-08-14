import { Badge } from "@/src/components/ui/Badge";
import type { AdminProductStatus } from "@/src/types/product";

type StatusVariant = "success" | "warning" | "danger" | "neutral";

type StatusConfigEntry = {
  label: string;
  variant: StatusVariant;
};

const statusConfig: Record<AdminProductStatus, StatusConfigEntry> = {
  active: { label: "Active", variant: "success" },
  draft: { label: "Draft", variant: "neutral" },
  archived: { label: "Archived", variant: "neutral" },
  "low-stock": { label: "Low Stock", variant: "warning" },
  backordered: { label: "Backordered", variant: "danger" },
};

const fallbackConfig: StatusConfigEntry = {
  label: "Unknown",
  variant: "neutral",
};

export function ProductStatus({ status }: { status: AdminProductStatus }) {
  const config = statusConfig[status] ?? fallbackConfig;
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
