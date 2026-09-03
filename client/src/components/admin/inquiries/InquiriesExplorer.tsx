"use client";

import { useMemo, useState } from "react";
import { Inbox } from "lucide-react";
import { InquiryFilters } from "./InquiryFilters";
import { EmptyState } from "@/src/components/ui/EmptyState";
import { Button } from "@/src/components/ui/Button";
import { Card } from "@/src/components/ui/Card";
import { InquiryStatusBadge } from "./InquiryStatusBadge";
import { InquiryDetailModal } from "./InquiryDetailModal";
import type { Inquiry, InquiryStatus } from "@/src/types/inquiry";

const PAGE_SIZE = 8;

export function InquiriesExplorer({
  inquiries: initialInquiries,
}: {
  inquiries: Inquiry[];
}) {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<InquiryStatus | "all">("all");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const filtered = useMemo(() => {
    return inquiries.filter((inquiry) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        inquiry.name.toLowerCase().includes(q) ||
        inquiry.email.toLowerCase().includes(q) ||
        inquiry.phone.toLowerCase().includes(q);
      const matchesStatus = status === "all" || inquiry.status === status;
      return matchesSearch && matchesStatus;
    });
  }, [inquiries, search, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function handleUpdate(
    id: string,
    patch: Partial<Pick<Inquiry, "status" | "isRead">>,
  ) {
    setInquiries((prev) =>
      prev.map((inquiry) =>
        inquiry._id === id ? { ...inquiry, ...patch } : inquiry,
      ),
    );
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      <Card>
        <div className="border-b border-neutral-line p-4 sm:p-5">
          <InquiryFilters
            search={search}
            status={status}
            onSearchChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
            onStatusChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
          />
        </div>

        {paginated.length === 0 ? (
          <EmptyState
            icon={Inbox}
            title="No inquiries found"
            description="New inquiries from the contact form will appear here."
          />
        ) : (
          <>
            {/* Desktop / tablet table */}
            <div className="hidden overflow-x-auto sm:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="hairline text-xs text-neutral-muted">
                    <th scope="col" className="px-5 py-3 font-medium">
                      Name
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Phone
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Subject
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Status
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Received
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-medium text-right"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((inquiry) => (
                    <tr key={inquiry._id} className="hairline">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          {!inquiry.isRead && (
                            <span
                              className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                              aria-label="Unread"
                            />
                          )}
                          <div>
                            <p className="font-medium text-primary">
                              {inquiry.name}
                            </p>
                            <p className="text-xs text-neutral-muted">
                              {inquiry.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-neutral-muted">
                        {inquiry.phone}
                      </td>
                      <td className="px-5 py-4 text-neutral-muted">
                        {inquiry.subject}
                      </td>
                      <td className="px-5 py-4">
                        <InquiryStatusBadge status={inquiry.status} />
                      </td>
                      <td className="px-5 py-4 text-neutral-muted">
                        {formatDate(inquiry.createdAt)}
                      </td>
                      <td className="px-5 py-4 text-right">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setSelected(inquiry)}
                        >
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="divide-y divide-neutral-line sm:hidden">
              {paginated.map((inquiry) => (
                <button
                  key={inquiry._id}
                  type="button"
                  onClick={() => setSelected(inquiry)}
                  className="flex w-full flex-col gap-2 px-4 py-4 text-left"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2">
                      {!inquiry.isRead && (
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                          aria-label="Unread"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="truncate font-medium text-primary">
                          {inquiry.name}
                        </p>
                        <p className="truncate text-xs text-neutral-muted">
                          {inquiry.email}
                        </p>
                      </div>
                    </div>
                    <InquiryStatusBadge status={inquiry.status} />
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-muted">
                    <span>{inquiry.subject}</span>
                    <span aria-hidden>·</span>
                    <span>{inquiry.phone}</span>
                    <span aria-hidden>·</span>
                    <span>{formatDate(inquiry.createdAt)}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-neutral-line px-4 py-4 sm:flex-row sm:px-5">
              <p className="text-xs text-neutral-muted sm:text-sm">
                Showing {(currentPage - 1) * PAGE_SIZE + 1} to{" "}
                {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
                {filtered.length} entries
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === 1}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                >
                  Prev
                </Button>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1,
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    aria-current={
                      pageNumber === currentPage ? "page" : undefined
                    }
                    onClick={() => setPage(pageNumber)}
                    className={
                      pageNumber === currentPage
                        ? "flex h-8 w-8 items-center justify-center rounded-md border border-secondary text-sm font-medium text-secondary"
                        : "flex h-8 w-8 items-center justify-center rounded-md border border-neutral-line text-sm font-medium text-neutral-muted hover:bg-neutral-bg"
                    }
                  >
                    {pageNumber}
                  </button>
                ))}
                <Button
                  variant="secondary"
                  size="sm"
                  disabled={currentPage === totalPages}
                  onClick={() =>
                    setPage((value) => Math.min(totalPages, value + 1))
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>

      {selected && (
        <InquiryDetailModal
          inquiry={selected}
          onClose={() => setSelected(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
}
