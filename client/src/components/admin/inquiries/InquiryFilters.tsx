"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import type { InquiryStatus } from "@/src/types/inquiry";

const STATUS_OPTIONS: InquiryStatus[] = [
  "New",
  "In Progress",
  "Resolved",
  "Closed",
];

interface InquiryFiltersProps {
  search: string;
  status: InquiryStatus | "all";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: InquiryStatus | "all") => void;
}

export function InquiryFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: InquiryFiltersProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_12rem_auto] sm:items-center">
      <div className="relative">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-muted"
        />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name, email, or phone..."
          aria-label="Search inquiries"
          style={{ paddingLeft: "2.25rem" }}
          className="admin-input w-full pl-9"
        />
      </div>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as InquiryStatus | "all")
        }
        aria-label="Filter by status"
        className="admin-input w-full"
      >
        <option value="all">All Statuses</option>
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
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
