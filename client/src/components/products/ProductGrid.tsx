import type { Product, ViewMode } from "@/src/types/product";
import { ProductCard } from "./ProductCard";
import { ProductListItem } from "./ProductListItem";

interface ProductGridProps {
  products: Product[];
  view: ViewMode;
}

export function ProductGrid({ products, view }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#E2E8F0] px-6 py-16 text-center">
        <p className="text-sm font-semibold text-[#0F172A]">
          No products in this category yet
        </p>
        <p className="mt-1 text-sm text-[#64748B]">
          Try a different category or view all products.
        </p>
      </div>
    );
  }

  if (view === "list") {
    return (
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <ProductListItem key={product.slug} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
