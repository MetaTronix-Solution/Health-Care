import { COMPANY } from "@/src/data/company";
import { createPageMetadata } from "@/src/lib/seo/metadata";
import type { Product } from "@/src/types/product";

export const homeMetadata = createPageMetadata({
  title: `${COMPANY.name} | CPAP, BiPAP & Respiratory Care Equipment in Nepal`,
  description:
    "Himanshi Biomedical specializes in respiratory care, sleep medicine, and biomedical equipment in Nepal. Authorized BMC Medical distributor providing CPAP, BiPAP, sleep lab solutions, and technical support.",
  path: "/",
  absoluteTitle: true,
  keywords: [
    "Himanshi Biomedical Nepal",
    "CPAP Nepal",
    "BiPAP Nepal",
    "BMC Medical Nepal",
    "respiratory care equipment Nepal",
  ],
});

export const aboutMetadata = createPageMetadata({
  title: `About ${COMPANY.name} | Biomedical & Respiratory Care in Nepal`,
  description:
    "Himanshi Biomedical has been working in Nepal since 2022, specializing in respiratory care, sleep medicine, and biomedical equipment. Authorized BMC Medical distributor with professional technical and after-sales support.",
  path: "/about",
  absoluteTitle: true,
});

export const productsMetadata = createPageMetadata({
  title: "CPAP, BiPAP & Medical Equipment",
  description:
    "Browse CPAP, Auto CPAP, BiPAP, patient monitoring, and biomedical equipment from Himanshi Biomedical — authorized BMC Medical distributor in Nepal.",
  path: "/products",
});

export const servicesMetadata = createPageMetadata({
  title: "Biomedical Equipment & Technical Support Services",
  description:
    "Himanshi Biomedical provides medical equipment installation, sleep lab solutions, CPAP and BiPAP support, technical assistance, and after-sales service across Nepal.",
  path: "/services",
});

export const solutionsMetadata = createPageMetadata({
  title: "Sleep & Respiratory Care Solutions",
  description:
    "Integrated sleep medicine, respiratory care, CPAP/BiPAP therapy, and biomedical equipment solutions for hospitals, clinics, and sleep laboratories in Nepal.",
  path: "/solutions",
});

export const resourcesMetadata = createPageMetadata({
  title: "Resources & Insights",
  description:
    "Clinical insights, product guidance, and updates on sleep medicine and respiratory care from Himanshi Biomedical in Nepal.",
  path: "/resources",
});

export const contactMetadata = createPageMetadata({
  title: `Contact ${COMPANY.name}`,
  description:
    "Contact Himanshi Biomedical for CPAP, BiPAP, sleep lab equipment inquiries, technical support, and after-sales service in Nepal.",
  path: "/contact",
});

export const careersMetadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore career opportunities with Himanshi Biomedical in Nepal. Join a team focused on sleep medicine, respiratory care, and biomedical equipment.",
  path: "/careers",
});

export function createProductMetadata(product: Product) {
  const title = `${product.name} | ${COMPANY.name} Nepal`;

  return createPageMetadata({
    title,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    absoluteTitle: true,
    openGraph: {
      type: "website",
      title,
      description: product.shortDescription,
      images: [{ url: product.image, alt: product.name }],
    },
  });
}

export function createArticleMetadata(article: {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  author: string;
}) {
  return createPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/resources/${article.slug}`,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.title }],
      publishedTime: article.date,
      authors: [article.author],
    },
  });
}
