"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { ProductFilters } from "@/src/components/admin/products/ProductFilters";
import { ProductStatus } from "@/src/components/admin/products/ProductStatus";
import { ProductRowActions } from "@/src/components/admin/products/ProductRowActions";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { formatDate, formatNumber } from "@/src/lib/utils";
import type { AdminProduct as Product } from "@/src/types/product";

const PAGE_SIZE = 8;

export function ProductsExplorer({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () =>
      Array.from(new Set(products.map((product) => product.category))).sort(),
    [products],
  );

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.trim().toLowerCase());
      const matchesCategory =
        category === "all" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <Card>
      <div className="border-b border-neutral-line p-5">
        <ProductFilters
          search={search}
          category={category}
          categories={categories}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          onCategoryChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
        />
      </div>

      {paginated.length === 0 ? (
        <EmptyState
          icon={Package}
          title="No products found"
          description="Add your first medical product to begin managing your catalog."
          action={
            <Button href="/admin/products/new">Add Product</Button>
          }
        />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="hairline text-xs text-neutral-muted">
                  <th scope="col" className="px-5 py-3 font-medium">
                    Product
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Category
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Manufacturer
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Views
                  </th>
                  <th scope="col" className="px-5 py-3 font-medium">
                    Last Updated
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginated.map((product, index) => (
                  <tr
                    key={product.id ?? product.sku ?? index}
                    className="hairline"
                  >
                    <td className="px-5 py-4 font-medium text-primary">
                      <Link
                        href={`/resources/${product.id ?? ""}`}
                        className="hover:underline"
                      >
                        {product.name ?? "Untitled product"}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.category ?? "—"}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.manufacturer ?? "—"}
                    </td>
                    <td className="px-5 py-4">
                      {product.status ? (
                        <ProductStatus status={product.status} />
                      ) : (
                        <span className="text-neutral-muted">—</span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.views != null
                        ? formatNumber(product.views)
                        : "—"}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.lastUpdated
                        ? formatDate(product.lastUpdated)
                        : "—"}
                    </td>
                    <td className="px-5 py-4">
                      <ProductRowActions productId={product.id ?? ""} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-line px-5 py-4 sm:flex-row">
            <p className="text-sm text-neutral-muted">
              Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
              {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
              {filtered.length} entries
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setPage((value) => Math.max(1, value - 1))}
              >
                Prev
              </Button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    aria-current={
                      pageNumber === currentPage ? "page" : undefined
                    }
                    onClick={() => setPage(pageNumber)}
                    className={
                      pageNumber === currentPage
                        ? "flex h-8 w-8 items-center justify-center rounded-md border border-secondary text-sm font-medium text-secondary"
                        : "flex h-8 w-8 items-center justify-center rounded-md border border-neutral-line text-sm font-medium text-neutral-muted hover:bg-neutral-bg"
                    }
                  >
                    {pageNumber}
                  </button>
                ),
              )}
              <Button
                variant="secondary"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setPage((value) => Math.min(totalPages, value + 1))
                }
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
}
