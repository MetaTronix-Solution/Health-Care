import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { Button } from "@/src/components/ui/Button";
import { COMPANY } from "@/src/data/company";
import { careersMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = careersMetadata;

export default function CareersPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Careers</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Join {COMPANY.name} in Nepal
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            {COMPANY.name} supports sleep medicine, respiratory care, and
            biomedical equipment across Nepal. If you are interested in
            contributing to healthcare technology and patient support, we would
            like to hear from you.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="max-w-2xl">
          <h2 className="text-section-title text-primary">Work With Us</h2>
          <p className="text-body mt-4 text-neutral-muted">
            We welcome inquiries from biomedical engineers, clinical
            application specialists, field service professionals, and others
            interested in respiratory and sleep care equipment in Nepal.
          </p>
          <p className="text-body mt-4 text-neutral-muted">
            To express interest or ask about current opportunities, please
            contact our team with your background and area of expertise.
          </p>
          <div className="mt-8">
            <Button href="/contact" icon={<ArrowRight size={15} />}>
              Contact {COMPANY.shortName}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
