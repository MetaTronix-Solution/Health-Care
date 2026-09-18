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
      <div className="flex flex-col gap-3 border-b border-neutral-line px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <h2 className="text-base font-semibold text-primary sm:text-lg">
          Top Performing Products
        </h2>
        <Link
          href="/admin/products"
          className="flex items-center gap-1 text-sm font-medium text-secondary hover:underline"
        >
          View All
          <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </div>

      {/* Mobile: card list */}
      <div className="flex flex-col divide-y divide-neutral-line sm:hidden">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-2 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium text-primary">{product.name}</p>
              <Badge variant={statusVariant[product.status]}>
                {statusLabel[product.status]}
              </Badge>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-muted">
              <span>{product.category}</span>
              <span>{formatNumber(product.views)} views</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet+: table */}
      <div className="hidden overflow-x-auto sm:block">
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
