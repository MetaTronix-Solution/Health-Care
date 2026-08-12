import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.medtechpro.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MedTech Pro | Precision Engineering for Clinical Excellence",
    template: "%s | MedTech Pro",
  },
  description:
    "MedTech Pro designs ultrasound, patient monitoring, surgical robotics, and diagnostic imaging systems engineered for clinical precision.",
  openGraph: {
    type: "website",
    siteName: "MedTech Pro",
    url: siteUrl,
    title: "MedTech Pro | Precision Engineering for Clinical Excellence",
    description:
      "Technology that helps healthcare move forward: ultrasound, monitoring, surgical robotics, and diagnostic imaging.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MedTech Pro | Precision Engineering for Clinical Excellence",
    description:
      "Technology that helps healthcare move forward: ultrasound, monitoring, surgical robotics, and diagnostic imaging.",
  },
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MedTech Pro",
  url: siteUrl,
  description:
    "MedTech Pro engineers ultrasound, patient monitoring, surgical robotics, and diagnostic imaging systems for clinical environments.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MedTech Pro",
  url: siteUrl,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-tertiary text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
