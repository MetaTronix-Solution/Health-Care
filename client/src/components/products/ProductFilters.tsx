"use client";

import { useMemo, useState } from "react";
import { cn } from "@/src/lib/utils";
import { productCategories } from "@/src/data/products";
import type { Product } from "@/src/types/product";
import { ProductGrid } from "@/src/components/products/ProductGrid";

export function ProductFilters({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter(
      (product) => product.categorySlug === activeCategory,
    );
  }, [products, activeCategory]);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-2 border-b border-neutral-line pb-8"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={cn(
            "px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors",
            activeCategory === "all"
              ? "bg-primary text-tertiary"
              : "bg-neutral-bg text-primary hover:bg-[#e9edf0]",
          )}
        >
          All Products
        </button>
        {productCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.slug}
            onClick={() => setActiveCategory(category.slug)}
            className={cn(
              "px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] transition-colors",
              activeCategory === category.slug
                ? "bg-primary text-tertiary"
                : "bg-neutral-bg text-primary hover:bg-[#e9edf0]",
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="pt-10">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
