"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/src/components/ui/Input";
import { Select } from "@/src/components/ui/Select";
import { Button } from "@/src/components/ui/Button";

export interface ProductFiltersProps {
  search: string;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export function ProductFilters({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex-1">
        <Input
          icon={<Search aria-hidden className="h-4 w-4" />}
          placeholder="Search products..."
          aria-label="Search products"
          style={{ paddingLeft: "2.25rem" }}
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
      <div className="sm:w-56">
        <Select
          aria-label="Filter by category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </div>
      <Button variant="secondary" className="sm:w-auto">
        <SlidersHorizontal aria-hidden className="h-4 w-4" />
        Filters
      </Button>
    </div>
  );
}
