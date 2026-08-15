import type { Metadata } from "next";
import { Hero } from "@/src/components/home/Hero";
import { TrustBar } from "@/src/components/home/TrustBar";
import { FeaturedProduct } from "@/src/components/home/FeaturedProduct";
import { InnovationSection } from "@/src/components/home/InnovationSection";
import { SolutionsSection } from "@/src/components/home/SolutionsSection";
import { StatisticsSection } from "@/src/components/home/StatisticsSection";
import { ServicesSection } from "@/src/components/home/ServicesSection";
import { CTASection } from "@/src/components/home/CTASection";
import { COMPANY } from "@/src/data/company";

export const metadata: Metadata = {
  title: `${COMPANY.name} | Sleep & Respiratory Care Solutions in Nepal`,
  description:
    "Himanshi Biomedical specializes in respiratory care, sleep medicine, and biomedical equipment in Nepal. Authorized BMC Medical distributor providing CPAP, BiPAP, and sleep lab solutions.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[calc(100svh-4rem)] flex-col">
        <Hero />
        <TrustBar />
      </section>
      <FeaturedProduct />
      <InnovationSection />
      <SolutionsSection />
      <StatisticsSection />
      <ServicesSection />
      <CTASection />
    </>
  );
}
