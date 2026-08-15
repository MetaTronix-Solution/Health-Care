import type { MetadataRoute } from "next";
import { noIndexPaths, siteConfig } from "@/src/config/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: noIndexPaths.map((path) =>
          path.endsWith("/") ? path : `${path}/`,
        ),
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
