import type { Metadata } from "next";
import { ServicesIntro } from "@/src/components/services/ServicesIntro";
import { ServicesList } from "@/src/components/services/ServicesList";
import { RentalPurchaseSection } from "@/src/components/services/RentalPurchaseSection";
import { FacilitySolutions } from "@/src/components/services/FacilitySolutions";
import { ServiceProcess } from "@/src/components/services/ServiceProcess";
import { WhyChooseMedTech } from "@/src/components/services/WhyChooseMedTech";
import { ServicesCTA } from "@/src/components/services/ServicesCTA";
import { services } from "@/src/data/services";
import { servicesMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <>
      <ServicesIntro />
      <ServicesList services={services} />
      <RentalPurchaseSection />
      <FacilitySolutions />
      <ServiceProcess />
      <WhyChooseMedTech />
      <ServicesCTA />
    </>
  );
}
