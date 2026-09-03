import { InquiriesExplorer } from "@/src/components/admin/inquiries/InquiriesExplorer";
import { inquiries } from "@/src/data/inquiries";

export default function AdminInquiriesPage() {
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

      <InquiriesExplorer inquiries={inquiries} />
    </div>
  );
}
