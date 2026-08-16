import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/src/components/ui/Badge";
import { formatNumber } from "@/src/lib/utils";
import type { TopProduct } from "@/src/types/analytics";

const statusVariant = {
  "in-stock": "success",
  "low-stock": "warning",
  backordered: "danger",
} as const;

const statusLabel = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  backordered: "Backordered",
} as const;

export function ProductPerformance({ products }: { products: TopProduct[] }) {
  return (
    <div className="rounded-lg border border-neutral-line bg-white">
      <div className="flex items-center justify-between border-b border-neutral-line px-6 py-4">
        <h2 className="text-lg font-semibold text-primary">
          Top Performing Products
        </h2>
        <Link
          href="/resources"
          className="flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
        >
          View All
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="hairline text-xs text-neutral-muted">
              <th scope="col" className="px-6 py-3 font-medium">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Views
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hairline">
                <td className="px-6 py-4 font-medium text-primary">
                  {product.name}
                </td>
                <td className="px-6 py-4 text-neutral-muted">
                  {product.category}
                </td>
                <td className="px-6 py-4 text-neutral-muted">
                  {formatNumber(product.views)}
                </td>
                <td className="px-6 py-4">
                  <Badge variant={statusVariant[product.status]}>
                    {statusLabel[product.status]}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
