"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface BlogFiltersProps {
  search: string;
  category: string;
  categories: string[];
  status: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export function BlogFilters({
  search,
  category,
  categories,
  status,
  onSearchChange,
  onCategoryChange,
  onStatusChange,
}: BlogFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_10rem_10rem_auto] sm:items-center">
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
          style={{ paddingLeft: "2.25rem" }}
          className="admin-input w-full pl-9"
        />
      </div>

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
        aria-label="Filter by category"
        className="admin-input w-full"
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        aria-label="Filter by status"
        className="admin-input w-full"
      >
        <option value="all">All Statuses</option>
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md border border-neutral-line px-4 py-2.5 text-sm font-medium text-primary hover:bg-neutral-bg sm:w-auto"
      >
        <SlidersHorizontal aria-hidden className="h-4 w-4" />
        Filters
      </button>
    </div>
  );
}
