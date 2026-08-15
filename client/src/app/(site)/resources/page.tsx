import type { Metadata } from "next";
import { Container } from "@/src/components/ui/Container";
import { ArticleFilters } from "@/src/components/resources/ArticleFilters";
import { articles } from "@/src/data/articles";
import { resourcesMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = resourcesMetadata;

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Resources</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Resources for sleep and respiratory care in Nepal
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            Insights on sleep medicine, respiratory care, biomedical equipment,
            and product guidance from Himanshi Biomedical.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <ArticleFilters articles={articles} />
        </Container>
      </section>
    </>
  );
}
