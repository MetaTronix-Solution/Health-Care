"use client";

import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/src/components/ui/Input";

export interface ApplicationListProps {
  applications: string[];
  onChange: (applications: string[]) => void;
}

export function ApplicationList({
  applications,
  onChange,
}: ApplicationListProps) {
  return (
    <div className="space-y-3">
      {applications.map((application, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <Input
              aria-label={`Application ${index + 1}`}
              placeholder="e.g. Sleep Apnea Management"
              value={application}
              onChange={(event) =>
                onChange(
                  applications.map((a, i) =>
                    i === index ? event.target.value : a,
                  ),
                )
              }
              className="h-12 w-full text-base"
            />
          </div>
          <button
            type="button"
            onClick={() => onChange(applications.filter((_, i) => i !== index))}
            aria-label={`Remove application ${index + 1}`}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-red-600 focus-visible:outline-2 focus-visible:outline-secondary"
          >
            <Trash2 aria-hidden className="h-4 w-4" />
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => onChange([...applications, ""])}
        className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
      >
        <Plus aria-hidden className="h-4 w-4" />
        Add Application
      </button>
    </div>
  );
}
