import type { Metadata } from "next";
import { Plus } from "lucide-react";

import { PageHeader } from "@/src/components/ui/PageHeader";
import { Button } from "@/src/components/ui/Button";
import { ProductsExplorer } from "@/src/components/admin/products/ProductsExplorer";
import { products } from "@/src/data/products";

export const metadata: Metadata = {
  title: "Products Management",
};

export default function ProductsPage() {
  return (
    <div className="admin-page">
      <PageHeader
        title="Products Management"
        description="Manage and track your medical equipment inventory."
        actions={
          <Button href="/admin/products/new" icon={<Plus aria-hidden className="h-4 w-4" />}>
            Add Product
          </Button>
        }
      />

      <ProductsExplorer products={products} />
    </div>
  );
}
