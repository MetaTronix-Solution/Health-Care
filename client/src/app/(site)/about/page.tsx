import type { Metadata } from "next";
import {
  AboutHero,
  AboutOverview,
  AboutWorkingSectors,
  AboutExpertiseGrid,
  AboutBMCSection,
  AboutTrust,
  AboutTeam,
  AboutCTA,
} from "@/src/components/about/AboutSections";
import { COMPANY } from "@/src/data/company";

export const metadata: Metadata = {
  title: `About ${COMPANY.name} | Sleep & Respiratory Care in Nepal`,
  description:
    "Himanshi Biomedical has been working in Nepal since 2022, specializing in respiratory care, sleep medicine, and biomedical equipment solutions. Authorized BMC Medical distributor.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutOverview />
      <AboutWorkingSectors />
      <AboutExpertiseGrid />
      <AboutBMCSection />
      <AboutTrust />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
