import type { Metadata } from "next";
import {
  AboutHero,
  AboutOverview,
  AboutExpertiseGrid,
  AboutTrust,
  AboutTeam,
  AboutImageStory,
  AboutCTA,
} from "@/src/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About MedTech Pro | Medical Technology & Clinical Expertise",
  description:
    "MedTech Pro was founded by surgeons and systems engineers to bridge biomedical engineering and practical clinical application — engineering technology around the reality of healthcare.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutOverview />
      <AboutExpertiseGrid />
      <AboutTrust />
      <AboutTeam />
      <AboutImageStory />
      <AboutCTA />
    </main>
  );
}
