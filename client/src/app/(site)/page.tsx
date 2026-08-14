import type { Metadata } from "next";
import { Hero } from "@/src/components/home/Hero";
import { TrustBar } from "@/src/components/home/TrustBar";
import { FeaturedProduct } from "@/src/components/home/FeaturedProduct";
import { InnovationSection } from "@/src/components/home/InnovationSection";
import { SolutionsSection } from "@/src/components/home/SolutionsSection";
import { StatisticsSection } from "@/src/components/home/StatisticsSection";
import { ServicesSection } from "@/src/components/home/ServicesSection";
import { CTASection } from "@/src/components/home/CTASection";

export const metadata: Metadata = {
  title: "MedTech Pro | Precision Engineering for Clinical Excellence",
  description:
    "MedTech Pro engineers ultrasound, patient monitoring, surgical robotics, and diagnostic imaging systems trusted in more than 10,000 clinical deployments.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[calc(100svh-64px)] flex-col">
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
