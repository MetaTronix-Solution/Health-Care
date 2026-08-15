import type { Metadata } from "next";
import { siteConfig } from "@/src/config/seo";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Bypass the root title template when a fully custom title is required. */
  absoluteTitle?: boolean;
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
  noIndex?: boolean;
};

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
  openGraph,
  twitter,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const defaultImages = [{ url: siteConfig.defaultOgImage, alt: siteConfig.name }];
  const resolvedImages = openGraph?.images ?? defaultImages;

  function resolveTwitterImage(
    images: NonNullable<Metadata["openGraph"]>["images"],
  ): string | undefined {
    if (!images) return siteConfig.defaultOgImage;
    if (typeof images === "string") return images;
    if (images instanceof URL) return images.toString();
    const first = Array.isArray(images) ? images[0] : images;
    if (!first) return siteConfig.defaultOgImage;
    if (typeof first === "string") return first;
    if (first instanceof URL) return first.toString();
    return first.url?.toString() ?? siteConfig.defaultOgImage;
  }

  const twitterImage = resolveTwitterImage(resolvedImages);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: resolvedImages,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImage ? [twitterImage] : undefined,
      ...twitter,
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true },
          },
        }),
  };
}

export function createAdminMetadata(title: string): Metadata {
  return {
    title,
    robots: { index: false, follow: false, nocache: true },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — respiratory and sleep care equipment in Nepal`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
