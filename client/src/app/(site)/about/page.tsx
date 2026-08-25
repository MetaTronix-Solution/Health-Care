import type { Metadata } from "next";
import {
  AboutHero,
  AboutOverview,
  AboutWorkingSectors,
  AboutExpertiseGrid,
  AboutBMCSection,
  AboutTrust,
  AboutTeam,
  AboutFAQ,
  AboutCTA,
} from "@/src/components/about/AboutSections";
import { FaqJsonLd } from "@/src/components/seo/FaqJsonLd";
import { faqItems } from "@/src/data/company";
import { aboutMetadata } from "@/src/lib/seo/pages";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <FaqJsonLd items={[...faqItems]} />
      <AboutHero />
      <AboutOverview />
      <AboutWorkingSectors />
      <AboutExpertiseGrid />
      <AboutBMCSection />
      <AboutTrust />
      <AboutTeam />
      <AboutFAQ />
      <AboutCTA />
    </>
  );
}
