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
          placeholder="Search by name, email, or phone..."
          aria-label="Search inquiries"
          className="admin-input pl-9"
          style={{ width: "100%", paddingLeft: "2.25rem" }}
        />
      </div>

      <select
        value={status}
        onChange={(event) =>
          onStatusChange(event.target.value as InquiryStatus | "all")
        }
        aria-label="Filter by status"
        className="admin-input"
        style={{ width: "100%" }}
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
        className="flex items-center justify-center gap-2 rounded-md border border-neutral-line px-4 py-2.5 text-sm font-medium text-primary hover:bg-neutral-bg"
      >
        <SlidersHorizontal aria-hidden className="h-4 w-4" />
        Filters
      </button>
    </div>
  );
}
