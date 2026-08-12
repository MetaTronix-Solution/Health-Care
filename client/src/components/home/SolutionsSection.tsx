import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { solutions } from "@/src/data/solutions";

export function SolutionsSection() {
  return (
    <section className="bg-neutral-bg py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="02 // Capabilities"
          title="Healthcare Solutions"
          description="Integrated platforms built around the clinical environments where they run — not sold as one-size-fits-all hardware."
        />

        <div className="mt-12 grid grid-cols-1 gap-px border border-neutral-line bg-neutral-line sm:grid-cols-2">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={`/solutions#${solution.slug}`}
              className="group flex flex-col justify-between gap-6 bg-neutral-bg p-8 transition-colors hover:bg-tertiary"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow">{solution.index}</span>
                <ArrowUpRight
                  size={16}
                  className="text-neutral-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-primary">
                  {solution.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-neutral-muted">
                  {solution.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
