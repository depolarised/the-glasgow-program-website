import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://glasgowecg.com";

  const routes = [
    "",
    "/algorithm",
    "/solutions",
    "/solutions/oem",
    "/solutions/healthcare",
    "/solutions/research",
    "/solutions/ai-partners",
    "/technology",
    "/resources",
    "/team",
    "/licensing",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/solutions") ? 0.8 : 0.6,
  }));
}
