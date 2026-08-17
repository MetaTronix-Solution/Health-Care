import type { ProductCategory } from "@/src/types/product";
import { CategoryFilter } from "./ProductCategoryFilter";
import { AuthorizedDistributorCard } from "./AuthorizedDistributorCard";
import { ProductHelpCard } from "./ProductHelpCard";

interface ProductSidebarProps {
  categories: ProductCategory[];
  counts: Record<string, number>;
  selected: string;
  onSelect: (slug: string) => void;
}

export function ProductSidebar({
  categories,
  counts,
  selected,
  onSelect,
}: ProductSidebarProps) {
  return (
    <aside aria-label="Product filters" className="hidden lg:block">
      <div className="sticky top-24 space-y-4">
        <CategoryFilter
          categories={categories}
          counts={counts}
          selected={selected}
          onSelect={onSelect}
        />
        <AuthorizedDistributorCard />
        <ProductHelpCard />
      </div>
    </aside>
  );
}
