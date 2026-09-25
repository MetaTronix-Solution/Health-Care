"use client";

import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/src/components/ui/Input";
import { Textarea } from "@/src/components/ui/Textarea";
import type {
  AdminProductDetailSection,
  AdminProductSpec,
} from "@/src/types/product";

export interface DetailSectionListProps {
  sections: AdminProductDetailSection[];
  onChange: (sections: AdminProductDetailSection[]) => void;
}

export function DetailSectionList({
  sections,
  onChange,
}: DetailSectionListProps) {
  function addSection() {
    onChange([...sections, { title: "", body: "", specs: [] }]);
  }

  function removeSection(index: number) {
    onChange(sections.filter((_, i) => i !== index));
  }

  function updateSection(
    index: number,
    patch: Partial<AdminProductDetailSection>,
  ) {
    onChange(
      sections.map((section, i) =>
        i === index ? { ...section, ...patch } : section,
      ),
    );
  }

  function addSpec(sectionIndex: number) {
    const section = sections[sectionIndex];
    updateSection(sectionIndex, {
      specs: [...section.specs, { label: "", value: "" }],
    });
  }

  function removeSpec(sectionIndex: number, specIndex: number) {
    const section = sections[sectionIndex];
    updateSection(sectionIndex, {
      specs: section.specs.filter((_, i) => i !== specIndex),
    });
  }

  function updateSpec(
    sectionIndex: number,
    specIndex: number,
    patch: Partial<AdminProductSpec>,
  ) {
    const section = sections[sectionIndex];
    updateSection(sectionIndex, {
      specs: section.specs.map((spec, i) =>
        i === specIndex ? { ...spec, ...patch } : spec,
      ),
    });
  }

  return (
    <div className="space-y-5">
      {sections.map((section, sectionIndex) => (
        <div
          key={section._id ?? `new-${sectionIndex}`}
          className="rounded-md border border-neutral-line p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-semibold text-neutral-muted">
              Section {sectionIndex + 1}
            </span>
            <button
              type="button"
              onClick={() => removeSection(sectionIndex)}
              aria-label={`Remove section ${sectionIndex + 1}`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-red-600 focus-visible:outline-2 focus-visible:outline-secondary"
            >
              <Trash2 aria-hidden className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 space-y-3">
            <Input
              aria-label={`Section ${sectionIndex + 1} title`}
              placeholder="Title (e.g. Intelligent Comfort)"
              value={section.title ?? ""}
              onChange={(event) =>
                updateSection(sectionIndex, { title: event.target.value })
              }
            />
            <Textarea
              aria-label={`Section ${sectionIndex + 1} body`}
              placeholder="Description of this section..."
              rows={3}
              value={section.body ?? ""}
              onChange={(event) =>
                updateSection(sectionIndex, { body: event.target.value })
              }
            />

            <div className="space-y-2 pl-1">
              {section.specs.map((spec, specIndex) => (
                <div key={specIndex} className="flex items-center gap-2">
                  <Input
                    aria-label={`Section ${sectionIndex + 1} spec ${specIndex + 1} label`}
                    placeholder="Property Name"
                    value={spec.label ?? ""}
                    onChange={(event) =>
                      updateSpec(sectionIndex, specIndex, {
                        label: event.target.value,
                      })
                    }
                    className="flex-1"
                  />
                  <Input
                    aria-label={`Section ${sectionIndex + 1} spec ${specIndex + 1} value`}
                    placeholder="Value"
                    value={spec.value ?? ""}
                    onChange={(event) =>
                      updateSpec(sectionIndex, specIndex, {
                        value: event.target.value,
                      })
                    }
                    className="flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => removeSpec(sectionIndex, specIndex)}
                    aria-label={`Remove spec ${specIndex + 1} from section ${sectionIndex + 1}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-neutral-muted hover:bg-neutral-bg hover:text-red-600 focus-visible:outline-2 focus-visible:outline-secondary"
                  >
                    <Trash2 aria-hidden className="h-4 w-4" />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => addSpec(sectionIndex)}
                className="flex items-center gap-1.5 text-[13px] font-medium text-secondary hover:underline"
              >
                <Plus aria-hidden className="h-3.5 w-3.5" />
                Add Spec
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addSection}
        className="flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
      >
        <Plus aria-hidden className="h-4 w-4" />
        Add Section
      </button>
    </div>
  );
}
