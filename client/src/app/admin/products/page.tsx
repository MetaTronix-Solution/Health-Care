import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/src/components/ui/PageHeader";
import { ProductsExplorer } from "@/src/components/admin/products/ProductsExplorer";
import { products } from "@/src/data/products";

export const metadata: Metadata = {
  title: "Products Management",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Products Management"
        description="Manage and track your medical equipment inventory."
        actions={
          <Link
            href="/admin/products/new"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-secondary px-4 text-sm font-medium text-white transition-colors hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <Plus aria-hidden className="h-4 w-4" />
            Add Product
          </Link>
        }
      />

      <ProductsExplorer products={products} />
    </div>
  );
}
