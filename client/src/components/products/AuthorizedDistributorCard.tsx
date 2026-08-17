import { ShieldCheck } from "lucide-react";

export function AuthorizedDistributorCard() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-[#EEF5FC] p-5">
      <ShieldCheck
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#2563EB]"
      />
      <p className="text-sm leading-relaxed text-[#0F172A]">
        <span className="block text-xs font-semibold uppercase tracking-wide text-[#2563EB]">
          Authorized distributor
        </span>
        of BMC Medical Products in Nepal
      </p>
    </div>
  );
}
