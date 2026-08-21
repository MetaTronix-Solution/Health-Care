"use client";

import { useMemo, useState } from "react";
import type { Product, SortOption, ViewMode } from "@/src/types/product";
import { Container } from "@/src/components/ui/Container";
import { ProductToolbar } from "./ProductToolbar";
import { ProductGrid } from "./ProductGrid";

interface ProductsCatalogProps {
  products: Product[];
}

export function ProductsCatalog({ products }: ProductsCatalogProps) {
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [view, setView] = useState<ViewMode>("grid");

  const visibleProducts = useMemo(() => {
    const sorted = [...products];
    if (sortBy === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sorted.sort(
        (a, b) => Number(b.featured ?? false) - Number(a.featured ?? false),
      );
    }
    return sorted;
  }, [products, sortBy]);

  return (
    <section className="relative rounded-t-3xl bg-white">
      <Container className="py-10 lg:py-16">
        <div className="mb-6">
          <ProductToolbar
            count={visibleProducts.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
            view={view}
            onViewChange={setView}
          />
        </div>

        <ProductGrid products={visibleProducts} view={view} />
      </Container>
    </section>
  );
}
