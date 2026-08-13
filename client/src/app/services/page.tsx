import type { Metadata } from "next";
import { ServicesIntro } from "@/src/components/services/ServicesIntro";
import { ServicesList } from "@/src/components/services/ServicesList";
import { RentalPurchaseSection } from "@/src/components/services/RentalPurchaseSection";
import { FacilitySolutions } from "@/src/components/services/FacilitySolutions";
import { ServiceProcess } from "@/src/components/services/ServiceProcess";
import { WhyChooseMedTech } from "@/src/components/services/WhyChooseMedTech";
import { ServicesCTA } from "@/src/components/services/ServicesCTA";
import { services } from "@/src/data/services";

export const metadata: Metadata = {
  title: "Medical Equipment & Healthcare Technology Services | MedTech Pro",
  description:
    "MedTech Pro provides medical equipment sales, rental, installation, maintenance, technical support, facility planning, consultation, and training for healthcare organizations.",
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
