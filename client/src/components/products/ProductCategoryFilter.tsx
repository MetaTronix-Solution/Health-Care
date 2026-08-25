import type { ProductCategory } from "@/src/types/product";

interface CategoryFilterProps {
  categories: ProductCategory[];
  counts: Record<string, number>;
  selected: string;
  onSelect: (slug: string) => void;
}

/** Vertical list used inside the desktop sidebar. */
export function CategoryFilter({
  categories,
  counts,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <h2 className="text-sm font-semibold text-[#0F172A]">Categories</h2>
      <ul className="mt-3 space-y-1">
        {categories.map((category) => {
          const isActive = category.slug === selected;
          const Icon = category.icon;
          return (
            <li key={category.slug}>
              <button
                type="button"
                onClick={() => onSelect(category.slug)}
                aria-current={isActive ? "true" : undefined}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-[#EEF5FC] font-semibold text-[#2563EB]"
                    : "text-[#0F172A] hover:bg-[#F8FAFC]"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon
                    aria-hidden="true"
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-[#2563EB]" : "text-[#64748B]"}`}
                  />
                  {category.label}
                </span>
                <span
                  className={isActive ? "text-[#2563EB]" : "text-[#64748B]"}
                >
                  {counts[category.slug] ?? 0}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Horizontal scrollable chips used on mobile/tablet in place of the sidebar. */
export function CategoryChips({
  categories,
  counts,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter by category"
      className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-6 sm:px-6"
    >
      {categories.map((category) => {
        const isActive = category.slug === selected;
        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => onSelect(category.slug)}
            aria-current={isActive ? "true" : undefined}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-[#2563EB] bg-[#EEF5FC] text-[#2563EB]"
                : "border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F8FAFC]"
            }`}
          >
            {category.label}
            <span className="ml-1.5 text-xs text-[#64748B]">
              {counts[category.slug] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
