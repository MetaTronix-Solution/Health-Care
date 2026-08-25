"use client";

import { useMemo, useState } from "react";
import type { Product, SortOption, ViewMode } from "@/src/types/product";
import { categories } from "@/src/data/categories";
import { Container } from "@/src/components/ui/Container";
import { ProductSidebar } from "./ProductSidebar";
import { CategoryChips } from "./ProductCategoryFilter";
import { ProductToolbar } from "./ProductToolbar";
import { ProductGrid } from "./ProductGrid";

interface ProductsCatalogProps {
  products: Product[];
}

/**
 * Only this component needs "use client" — CategoryFilter/Chips, Toolbar,
 * and Grid are plain components that get bundled into this client tree
 * automatically, so they don't need their own directive.
 *
 * `categories` is imported directly here (rather than passed as a prop from
 * the server page) because it carries lucide-react icon *components*, and
 * functions/components can't cross the server->client serialization
 * boundary as props — only plain data can.
 */
export function ProductsCatalog({ products }: ProductsCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [view, setView] = useState<ViewMode>("grid");

  const counts = useMemo(() => {
    const result: Record<string, number> = { all: products.length };
    for (const category of categories) {
      if (category.slug === "all") continue;
      result[category.slug] = products.filter(
        (p) => p.categorySlug === category.slug,
      ).length;
    }
    return result;
  }, [products, categories]);

  const visibleProducts = useMemo(() => {
    const filtered =
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.categorySlug === selectedCategory);

    const sorted = [...filtered];
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
  }, [products, selectedCategory, sortBy]);

  return (
    <section className="relative rounded-t-3xl bg-white">
      <Container className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[260px_1fr] lg:gap-10 lg:py-16">
        <ProductSidebar
          categories={categories}
          counts={counts}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="min-w-0">
          <div className="mb-6 lg:hidden">
            <CategoryChips
              categories={categories}
              counts={counts}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>

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
        </div>
      </Container>
    </section>
  );
}
