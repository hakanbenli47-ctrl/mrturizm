import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.engellitasima.com";

  const routes = [
    "",
    "/hizmetler/engelli-arac-kiralama",
    "/hizmetler/engelli-taksi",
    "/hizmetler/gelin-arabasi",
    "/hizmetler/fizik-tedavi-ulasim",
    "/hizmetler/gezi-yemek-transferi",
    "/hizmetler/planli-etkinlik-ulasimi",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}