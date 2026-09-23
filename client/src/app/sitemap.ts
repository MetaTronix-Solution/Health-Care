import type { MetadataRoute } from "next";
import { siteConfig, staticPublicRoutes } from "@/src/config/seo";
import { products } from "@/src/data/products";
import { apiPublic } from "@/src/lib/api/public";
import type { Blog } from "@/src/types/blog";

interface BlogListResponse {
  items: Blog[];
  total: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPublicRoutes.map(
    (route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  let articleEntries: MetadataRoute.Sitemap = [];
  try {
    const { items } = await apiPublic<BlogListResponse>("/blog?limit=1000");
    articleEntries = items.map((article) => ({
      url: `${siteConfig.url}/resources/${article.slug}`,
      lastModified: new Date(article.publishedAt ?? article.createdAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch {
    // if the backend is unreachable at build time, ship the sitemap without articles
    // rather than failing the whole build
  }

  return [...staticEntries, ...productEntries, ...articleEntries];
}
