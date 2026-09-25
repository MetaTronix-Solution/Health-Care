"use client";

import { use, useEffect, useState } from "react";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { AdminBreadcrumbs } from "@/src/components/admin/AdminBreadcrumbs";
import { ProductForm } from "@/src/components/admin/products/ProductForm";
import { api } from "@/src/lib/api/client";
import { ApiError } from "@/src/lib/api/errors";
import type { AdminProduct } from "@/src/types/product";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<AdminProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    api<AdminProduct>(`/products/admin/${id}`)
      .then(setProduct)
      .catch((err) =>
        setError(
          err instanceof ApiError ? err.message : "Failed to load product",
        ),
      )
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="admin-page">
        <p className="text-sm text-neutral-muted">Loading...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="admin-page">
        <p className="text-sm text-red-600">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <AdminBreadcrumbs
        items={[
          { label: "Products", href: "/admin/products" },
          { label: product.name },
        ]}
      />
      <PageHeader
        title={product.name}
        description={`Editing specifications and business rules for ${product.name}.`}
      />
      <ProductForm product={product} />
    </div>
  );
}
