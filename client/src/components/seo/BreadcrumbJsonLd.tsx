import { absoluteUrl } from "@/src/lib/seo/metadata";
import { JsonLd } from "@/src/components/seo/JsonLd";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          ...(item.href ? { item: absoluteUrl(item.href) } : {}),
        })),
      }}
    />
  );
}
