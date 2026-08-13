import type { Metadata } from "next";
import { AboutHero, AboutStory } from "@/src/components/about/AboutSections";

export const metadata: Metadata = {
  title: "About",
  description:
    "MedTech Pro was founded by surgeons and systems engineers to bridge biomedical engineering and practical clinical application.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
    </>
  );
}
