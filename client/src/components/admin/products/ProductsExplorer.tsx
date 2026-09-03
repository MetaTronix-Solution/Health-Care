"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { ProductFilters } from "@/src/components/admin/products/ProductFilters";
import { ProductRowActions } from "@/src/components/admin/products/ProductRowActions";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import type { Product } from "@/src/types/product";

const PAGE_SIZE = 8;

function StatusBadge({ status }: { status?: Product["status"] }) {
  if (!status) return <span className="text-neutral-muted">—</span>;

  const styles: Record<string, string> = {
    Published: "bg-emerald-50 text-emerald-700",
    Draft: "bg-amber-50 text-amber-700",
    Archived: "bg-neutral-bg text-neutral-muted",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        styles[status] ?? "bg-neutral-bg text-neutral-muted"
      }`}
    >
      {status}
    </span>
  );
}

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

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <Card>
      <div className="border-b border-neutral-line p-4 sm:p-5">
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
          action={<Button href="/admin/products/new">Add Product</Button>}
        />
      ) : (
        <>
          {/* Desktop / tablet table */}
          <div className="hidden overflow-x-auto sm:block">
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
                  <tr key={product.slug ?? index} className="hairline">
                    <td className="px-5 py-4 font-medium text-primary">
                      <Link
                        href={`/admin/products/${product.slug}`}
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
                      <StatusBadge status={product.status} />
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.views !== undefined
                        ? product.views.toLocaleString()
                        : "—"}
                    </td>
                    <td className="px-5 py-4 text-neutral-muted">
                      {product.updatedAt ? formatDate(product.updatedAt) : "—"}
                    </td>
                    <td className="px-5 py-4">
                      <ProductRowActions productId={product.slug} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="divide-y divide-neutral-line sm:hidden">
            {paginated.map((product, index) => (
              <div
                key={product.slug ?? index}
                className="flex flex-col gap-2 px-4 py-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/admin/products/${product.slug}`}
                    className="min-w-0 truncate font-medium text-primary hover:underline"
                  >
                    {product.name ?? "Untitled product"}
                  </Link>
                  <div className="shrink-0">
                    <ProductRowActions productId={product.slug} />
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={product.status} />
                  {product.category && (
                    <span className="text-xs text-neutral-muted">
                      {product.category}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-muted">
                  <span>{product.manufacturer ?? "—"}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {product.views !== undefined
                      ? `${product.views.toLocaleString()} views`
                      : "— views"}
                  </span>
                  <span aria-hidden>·</span>
                  <span>
                    {product.updatedAt ? formatDate(product.updatedAt) : "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-line px-4 py-4 sm:flex-row sm:px-5">
            <p className="text-xs text-neutral-muted sm:text-sm">
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
