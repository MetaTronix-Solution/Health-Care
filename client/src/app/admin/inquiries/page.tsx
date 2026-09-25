"use client";

import { useEffect, useState } from "react";
import { InquiriesExplorer } from "@/src/components/admin/inquiries/InquiriesExplorer";
import { api } from "@/src/lib/api/client";
import type { Inquiry } from "@/src/types/inquiry";

interface InquiryListResponse {
  items: Inquiry[];
  total: number;
}

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api<InquiryListResponse>("/contact?limit=1000")
      .then((data) => setInquiries(data.items))
      .catch(() => setError("Failed to load inquiries"));
  }, []);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Contact Inquiries
          </h1>
          <p className="mt-1 text-sm text-neutral-muted">
            View and manage inquiries submitted through your contact form.
          </p>
        </div>
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {inquiries === null && !error ? (
        <p className="text-sm text-neutral-muted">Loading...</p>
      ) : (
        <InquiriesExplorer inquiries={inquiries ?? []} />
      )}
    </div>
  );
}
