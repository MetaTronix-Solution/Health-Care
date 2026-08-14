import type { Metadata } from "next";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { AdminBreadcrumbs } from "@/src/components/admin/AdminBreadcrumbs";
import { ProductForm } from "@/src/components/admin/products/ProductForm";

export const metadata: Metadata = {
  title: "Add New Product",
};

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-8">
      <AdminBreadcrumbs
        items={[
          { label: "Resources", href: "/resources" },
          { label: "Add New Product" },
        ]}
      />
      <PageHeader
        title="Add New Product"
        description="Configure medical device specifications and business rules."
      />
      <ProductForm />
    </div>
  );
}
