import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio.priyanshuramchandani41.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}