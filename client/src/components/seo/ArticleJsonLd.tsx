import { absoluteUrl } from "@/src/lib/seo/metadata";
import { JsonLd } from "@/src/components/seo/JsonLd";

export function ArticleJsonLd({
  title,
  description,
  image,
  datePublished,
  author,
  slug,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  slug: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image,
        datePublished,
        author: { "@type": "Person", name: author },
        mainEntityOfPage: absoluteUrl(`/resources/${slug}`),
      }}
    />
  );
}
