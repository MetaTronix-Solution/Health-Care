import { COMPANY } from "@/src/data/company";

/**
 * Production site URL. Set NEXT_PUBLIC_SITE_URL in deployment (e.g. https://himanshibiomedical.com).
 * Falls back to localhost for local development only.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const siteConfig = {
  name: COMPANY.name,
  shortName: COMPANY.shortName,
  url: siteUrl,
  locale: "en_NP",
  language: "en-NP",
  defaultTitle: `${COMPANY.name} | CPAP, BiPAP & Respiratory Care Equipment in Nepal`,
  titleTemplate: `%s | ${COMPANY.name}`,
  description:
    "Himanshi Biomedical provides respiratory care, sleep medicine, and biomedical equipment in Nepal since 2022. Authorized BMC Medical distributor offering CPAP, Auto CPAP, BiPAP, sleep lab solutions, installation, and after-sales support.",
  keywords: [
    "Himanshi Biomedical",
    "Himanshi Biomedical Nepal",
    "biomedical equipment Nepal",
    "medical equipment Nepal",
    "CPAP machine Nepal",
    "CPAP Nepal",
    "BiPAP machine Nepal",
    "Auto CPAP Nepal",
    "sleep apnea treatment equipment Nepal",
    "sleep lab equipment Nepal",
    "respiratory care equipment Nepal",
    "BMC Medical Nepal",
    "BMC G3 CPAP Nepal",
    "BMC CPAP distributor Nepal",
    "authorized BMC Medical distributor Nepal",
    "sleep therapy equipment Nepal",
    "respiratory medical equipment Nepal",
  ],
  defaultOgImage:
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop",
  twitterHandle: undefined as string | undefined,
  areaServed: "Nepal",
  foundingDate: "2022",
} as const;

/** Routes that must never be indexed by search engines. */
export const noIndexPaths = [
  "/admin",
  "/login",
  "/api",
  "/dashboard",
  "/management",
  "/business",
  "/system",
] as const;

/** Primary public routes included in the sitemap. */
export const staticPublicRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/products", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/services", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/solutions", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly" as const, priority: 0.75 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/careers", changeFrequency: "monthly" as const, priority: 0.6 },
] as const;
