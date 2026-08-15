import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/src/components/ui/Container";
import { solutions } from "@/src/data/solutions";
import { solutionsMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = solutionsMetadata;

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-neutral-line bg-neutral-bg">
        <Container className="py-16 lg:py-20">
          <p className="eyebrow mb-4">Solutions</p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl font-light leading-[1.1] tracking-tight text-primary">
            Sleep and respiratory care solutions for Nepal
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-neutral-muted">
            Integrated sleep medicine, CPAP/BiPAP therapy, respiratory care, and
            biomedical equipment solutions for hospitals, clinics, and sleep
            laboratories.
          </p>
        </Container>
      </section>

      {solutions.map((solution, index) => (
        <section
          key={solution.slug}
          id={solution.slug}
          className={index % 2 === 1 ? "bg-neutral-bg" : "bg-tertiary"}
        >
          <Container className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <span className="eyebrow">{solution.index}</span>
              <h2 className="mt-4 text-3xl font-light tracking-tight text-primary">
                {solution.title}
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-neutral-muted">
                {solution.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {solution.capabilities.map((capability: string) => (
                  <li
                    key={capability}
                    className="flex items-start gap-2.5 text-[13px] text-primary"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-secondary"
                    />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                "relative aspect-[4/3] w-full overflow-hidden bg-primary " +
                (index % 2 === 1 ? "lg:order-1" : "")
              }
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
