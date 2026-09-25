"use client";

import { useCallback, useEffect, useState } from "react";
import { PageHeader } from "@/src/components/ui/PageHeader";
import { Button } from "@/src/components/ui/Button";
import { ProductsExplorer } from "@/src/components/admin/products/ProductsExplorer";
import { api } from "@/src/lib/api/client";
import type { AdminProduct } from "@/src/types/product";

interface ProductListResponse {
  items: AdminProduct[];
  total: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<AdminProduct[] | null>(null);
  const [error, setError] = useState("");

  const fetchProducts = useCallback(() => {
    api<ProductListResponse>("/products/admin?limit=1000")
      .then((data) => setProducts(data.items))
      .catch(() => setError("Failed to load products"));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="admin-page">
      <PageHeader
        title="Products Management"
        description="Manage and track your medical equipment inventory."
        actions={<Button href="/admin/products/new">Add Product</Button>}
      />

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {products === null && !error ? (
        <p className="text-sm text-neutral-muted">Loading...</p>
      ) : (
        <ProductsExplorer
          products={products ?? []}
          onProductDeleted={fetchProducts}
        />
      )}
    </div>
  );
}
