import { Badge } from "@/src/components/ui/Badge";
import type { AdminStockStatus } from "@/src/types/product";

type StatusVariant = "success" | "warning" | "danger" | "neutral";

const statusConfig: Record<
  AdminStockStatus,
  { label: string; variant: StatusVariant }
> = {
  "In Stock": { label: "In Stock", variant: "success" },
  "Low Stock": { label: "Low Stock", variant: "warning" },
  Backordered: { label: "Backordered", variant: "danger" },
};

export function ProductStatus({ status }: { status: AdminStockStatus }) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}
