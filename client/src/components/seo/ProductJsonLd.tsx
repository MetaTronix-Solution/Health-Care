import { siteConfig } from "@/src/config/seo";
import { COMPANY } from "@/src/data/company";
import { absoluteUrl } from "@/src/lib/seo/metadata";
import { JsonLd } from "@/src/components/seo/JsonLd";
import type { Product } from "@/src/types/product";

export function ProductJsonLd({ product }: { product: Product }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        image: product.image,
        url: absoluteUrl(`/products/${product.slug}`),
        brand: {
          "@type": "Brand",
          name: COMPANY.name,
        },
        manufacturer: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      }}
    />
  );
}
