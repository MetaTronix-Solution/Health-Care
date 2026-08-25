import { siteConfig } from "@/src/config/seo";
import { COMPANY } from "@/src/data/company";
import { JsonLd } from "@/src/components/seo/JsonLd";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
        logo: siteConfig.defaultOgImage,
        description: COMPANY.description,
        foundingDate: siteConfig.foundingDate,
        areaServed: {
          "@type": "Country",
          name: siteConfig.areaServed,
        },
        knowsAbout: [
          "Respiratory care equipment",
          "Sleep medicine",
          "CPAP therapy",
          "BiPAP therapy",
          "Biomedical equipment",
          "BMC Medical products",
        ],
        slogan: COMPANY.tagline,
      }}
    />
  );
}
