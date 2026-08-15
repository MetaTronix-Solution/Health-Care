import type { Metadata } from "next";
import { ServicesIntro } from "@/src/components/services/ServicesIntro";
import { ServicesList } from "@/src/components/services/ServicesList";
import { RentalPurchaseSection } from "@/src/components/services/RentalPurchaseSection";
import { FacilitySolutions } from "@/src/components/services/FacilitySolutions";
import { ServiceProcess } from "@/src/components/services/ServiceProcess";
import { WhyChooseMedTech } from "@/src/components/services/WhyChooseMedTech";
import { ServicesCTA } from "@/src/components/services/ServicesCTA";
import { services } from "@/src/data/services";
import { COMPANY } from "@/src/data/company";

export const metadata: Metadata = {
  title: "Medical Equipment & Support Services",
  description:
    `${COMPANY.name} provides medical equipment sales, installation, maintenance, technical support, and after-sales service for sleep and respiratory care in Nepal.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesIntro />
      <ServicesList services={services} />
      <RentalPurchaseSection />
      <FacilitySolutions />
      <ServiceProcess />
      <WhyChooseMedTech />
      <ServicesCTA />
    </main>
  );
}
