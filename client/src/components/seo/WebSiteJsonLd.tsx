import { siteConfig } from "@/src/config/seo";
import { JsonLd } from "@/src/components/seo/JsonLd";

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      }}
    />
  );
}
