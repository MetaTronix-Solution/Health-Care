import type { Product } from "@/src/types/product";
import { ProductCard } from "@/src/components/products/ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="border border-dashed border-neutral-line p-12 text-center text-[13px] text-neutral-muted">
        No products match this category yet. Try another filter.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
