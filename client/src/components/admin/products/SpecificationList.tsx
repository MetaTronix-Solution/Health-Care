"use client";

import { Trash2 } from "lucide-react";
import { Input } from "@/src/components/ui/Input";
import type { ProductSpecification } from "@/src/types/product";

export interface SpecificationListProps {
  specifications: ProductSpecification[];
  onChange: (specifications: ProductSpecification[]) => void;
}

export function SpecificationList({
  specifications,
  onChange,
}: SpecificationListProps) {
  function updateAt(index: number, patch: Partial<ProductSpecification>) {
    const next = specifications.map((spec, i) =>
      i === index ? { ...spec, ...patch } : spec,
    );
    onChange(next);
  }

  function removeAt(index: number) {
    onChange(specifications.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-3">
      {specifications.map((spec, index) => (
        <div key={index} className="flex items-center gap-3">
          <Input
            aria-label={`Specification ${index + 1} name`}
            placeholder="Property Name"
            value={spec.label}
            onChange={(event) => updateAt(index, { label: event.target.value })}
            className="flex-1"
          />
          <Input
            aria-label={`Specification ${index + 1} value`}
            placeholder="Value"
            value={spec.value}
            onChange={(event) => updateAt(index, { value: event.target.value })}
            className="flex-1"
          />
          <button
            type="button"
            onClick={() => removeAt(index)}
            aria-label={`Remove specification ${index + 1}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-red-600 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <Trash2 aria-hidden className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
