import { LayoutGrid, List } from "lucide-react";
import type { SortOption, ViewMode } from "@/src/types/product";

interface ProductToolbarProps {
  count: number;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  view: ViewMode;
  onViewChange: (value: ViewMode) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "name-asc", label: "Name A–Z" },
  { value: "name-desc", label: "Name Z–A" },
];

export function ProductToolbar({
  count,
  sortBy,
  onSortChange,
  view,
  onViewChange,
}: ProductToolbarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-[#64748B]">
        Showing <span className="font-semibold text-[#0F172A]">{count}</span>{" "}
        {count === 1 ? "product" : "products"}
      </p>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-[#64748B]">
          <span className="hidden sm:inline">Sort by:</span>
          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm font-medium text-[#0F172A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div
          role="group"
          aria-label="View"
          className="flex overflow-hidden rounded-lg border border-[#E2E8F0]"
        >
          <button
            type="button"
            aria-pressed={view === "grid"}
            aria-label="Grid view"
            onClick={() => onViewChange("grid")}
            className={`flex h-9 w-9 items-center justify-center transition-colors ${
              view === "grid"
                ? "bg-[#EEF5FC] text-[#2563EB]"
                : "bg-white text-[#64748B] hover:bg-[#F8FAFC]"
            }`}
          >
            <LayoutGrid aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            aria-label="List view"
            onClick={() => onViewChange("list")}
            className={`flex h-9 w-9 items-center justify-center border-l border-[#E2E8F0] transition-colors ${
              view === "list"
                ? "bg-[#EEF5FC] text-[#2563EB]"
                : "bg-white text-[#64748B] hover:bg-[#F8FAFC]"
            }`}
          >
            <List aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
