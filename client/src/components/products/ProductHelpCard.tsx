import { ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

interface ProductHelpCardProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Generic enough to reuse on other pages, not just the products catalog. */
export function ProductHelpCard({
  title = "Need help choosing?",
  description = "Our experts are here to help",
  ctaLabel = "Contact us",
  ctaHref = "/contact",
}: ProductHelpCardProps) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <h2 className="text-sm font-semibold text-[#0F172A]">{title}</h2>
      <p className="mt-1 text-sm text-[#64748B]">{description}</p>
      <Button
        href={ctaHref}
        variant="secondary"
        className="mt-4 w-full sm:w-auto"
      >
        {ctaLabel}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Button>
    </div>
  );
}
