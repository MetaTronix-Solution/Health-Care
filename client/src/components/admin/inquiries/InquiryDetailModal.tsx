"use client";

import { useState } from "react";
import { X, Mail, Phone } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { InquiryStatusBadge } from "./InquiryStatusBadge";
import type { Inquiry, InquiryStatus } from "@/src/types/inquiry";

const statusOptions: InquiryStatus[] = [
  "New",
  "In Progress",
  "Resolved",
  "Closed",
];

export function InquiryDetailModal({
  inquiry,
  onClose,
  onUpdate,
}: {
  inquiry: Inquiry;
  onClose: () => void;
  onUpdate: (
    id: string,
    patch: Partial<Pick<Inquiry, "status" | "isRead">>,
  ) => void;
}) {
  const [status, setStatus] = useState<InquiryStatus>(inquiry.status);
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    // TODO: replace with PATCH /contact/:id { status, isRead: true }
    await new Promise((resolve) => setTimeout(resolve, 400));
    onUpdate(inquiry._id, { status, isRead: true });
    setSaving(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-primary/50"
        aria-hidden
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Inquiry details"
        className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-neutral-muted hover:bg-neutral-bg"
        >
          <X aria-hidden className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-muted">
            {inquiry.subject}
          </p>
          {!inquiry.isRead && (
            <span
              className="h-1.5 w-1.5 rounded-full bg-secondary"
              aria-label="Unread"
            />
          )}
        </div>
        <h2 className="mt-1 text-lg font-semibold text-primary">
          {inquiry.name}
        </h2>

        <div className="mt-2 flex flex-col gap-1 text-sm text-secondary">
          <a
            href={`mailto:${inquiry.email}`}
            className="flex items-center gap-2 hover:underline"
          >
            <Mail aria-hidden className="h-3.5 w-3.5" />
            {inquiry.email}
          </a>
          <a
            href={`tel:${inquiry.phone}`}
            className="flex items-center gap-2 hover:underline"
          >
            <Phone aria-hidden className="h-3.5 w-3.5" />
            {inquiry.phone}
          </a>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-xs text-neutral-muted">Current status:</span>
          <InquiryStatusBadge status={inquiry.status} />
        </div>

        <p className="mt-5 whitespace-pre-wrap rounded-lg border border-neutral-line bg-neutral-bg p-4 text-sm text-primary">
          {inquiry.message}
        </p>

        <p className="mt-3 text-xs text-neutral-muted">
          Received{" "}
          {new Date(inquiry.createdAt).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>

        <div className="mt-6">
          <label
            htmlFor="inquiry-status"
            className="mb-1.5 block text-sm font-medium text-primary"
          >
            Update status
          </label>
          <select
            id="inquiry-status"
            value={status}
            onChange={(event) => setStatus(event.target.value as InquiryStatus)}
            className="admin-input"
          >
            {statusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save Status"}
          </Button>
        </div>
      </div>
    </div>
  );
}
