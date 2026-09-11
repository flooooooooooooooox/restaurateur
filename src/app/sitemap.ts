import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Pages indexables uniquement (les pages légales sont en noindex).
  return [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/la-carte`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/le-concept`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];
}
