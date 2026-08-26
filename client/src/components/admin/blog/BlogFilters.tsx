"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface BlogFiltersProps {
  search: string;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export function BlogFilters({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: BlogFiltersProps) {
  return (
    <div
      className="grid gap-3 sm:items-center"
      style={{ gridTemplateColumns: "1fr 12rem auto" }}
    >
      <div className="relative">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-muted"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search articles..."
          aria-label="Search articles"
          className="admin-input pl-9"
          style={{ width: "100%", paddingLeft: "2.25rem" }}
        />
      </div>

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter by category"
        className="admin-input"
        style={{ width: "100%" }}
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button
        type="button"
        className="flex items-center justify-center gap-2 rounded-md border border-neutral-line px-4 py-2.5 text-sm font-medium text-primary hover:bg-neutral-bg"
      >
        <SlidersHorizontal aria-hidden className="h-4 w-4" />
        Filters
      </button>
    </div>
  );
}
