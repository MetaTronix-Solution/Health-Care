import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { COMPANY } from "@/src/data/company";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-neutral-bg">
      <Container className="py-24 text-center">
        <p className="eyebrow mb-4">Page Not Found</p>

        <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-primary">
          This page doesn&apos;t exist
        </h1>

        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-neutral-muted">
          The page you&apos;re looking for may have moved or is no longer
          available. Explore our CPAP, BiPAP, and biomedical equipment catalog,
          or contact {COMPANY.name} for assistance.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
          >
            Back to Home
            <ArrowRight size={15} />
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary underline"
          >
            Browse CPAP & Medical Equipment
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary underline"
          >
            Contact Support
          </Link>
        </div>
      </Container>
    </section>
  );
}
