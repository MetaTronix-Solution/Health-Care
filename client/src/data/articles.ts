import type { Article } from "@/src/types/article";

export const articleCategories = [
  "Clinical Insights",
  "Product Updates",
  "Company News",
] as const;

export const articles: Article[] = [
  {
    slug: "nsight-imaging-architecture-explained",
    title: "Inside nSIGHT: Rethinking How Ultrasound Images Are Formed",
    category: "Clinical Insights",
    date: "2024-11-04",
    author: "Dr. Elena Marsh",
    excerpt:
      "A look at how nSIGHT departs from line-by-line image formation to deliver pixel-level resolution in real time.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1400&auto=format&fit=crop",
    content: [
      "Conventional ultrasound systems form images one scan line at a time, a method that has defined the category for decades. nSIGHT takes a different approach, reconstructing the full image field simultaneously.",
      "The result is a meaningful jump in resolution at the pixel level, particularly in tissue boundaries that are historically difficult to resolve with line-based scanning.",
      "In early clinical deployments, sonographers reported faster scan completion and fewer repeat passes, translating into measurable gains in daily throughput.",
    ],
  },
  {
    slug: "nexus-arm-fda-clearance",
    title: "Nexus Surgical Arm Receives FDA Clearance for General Surgery",
    category: "Product Updates",
    date: "2024-09-18",
    author: "MedTech Pro Communications",
    excerpt:
      "The Nexus Surgical Arm has completed FDA review, opening the platform to broader general surgery indications.",
    image:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1400&auto=format&fit=crop",
    content: [
      "MedTech Pro's Nexus Surgical Arm has received FDA clearance for expanded use in general surgery procedures, following a multi-site clinical evaluation.",
      "The clearance covers a range of minimally invasive procedures where sub-millimeter instrument control materially changes recovery outcomes.",
      "Hospitals with existing Nexus installations will receive access to the expanded indication through a standard software update.",
    ],
  },
  {
    slug: "ten-thousand-deployments-milestone",
    title: "MedTech Pro Surpasses 10,000 Clinical Deployments",
    category: "Company News",
    date: "2024-06-02",
    author: "MedTech Pro Communications",
    excerpt:
      "A decade after our founding, MedTech Pro systems have now been deployed in more than 10,000 clinical settings worldwide.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
    content: [
      "What began as a small collective of surgeons and systems engineers has grown into a platform trusted across more than 10,000 clinical deployments.",
      "The milestone reflects a decade of iteration grounded in the same founding premise: technology should disappear into clinical workflow, not complicate it.",
      "We remain focused on the same question that started the company — how engineering precision translates into better outcomes at the bedside.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, category: string, limit = 2) {
  return articles
    .filter((article) => article.slug !== slug && article.category === category)
    .slice(0, limit);
}
