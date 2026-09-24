import type { Metadata } from "next";
import { Button } from "@/src/components/ui/Button";
import { ProductsExplorer } from "@/src/components/admin/products/ProductsExplorer";
import { products } from "@/src/data/products";
import { createAdminMetadata } from "@/src/lib/seo/metadata";

export const metadata: Metadata = createAdminMetadata("Products Management");

export default function ProductsPage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Products Management
          </h1>
          <p className="mt-1 text-sm text-neutral-muted">
            Manage and track your medical equipment inventory.
          </p>
        </div>

        <Button href="/admin/products/new">Add Product</Button>
      </div>

      <ProductsExplorer products={products} />
    </div>
  );
}
