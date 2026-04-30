import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [{ path: "", priority: 1.0, changeFrequency: "weekly" as const }];

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: new Date(),
		changeFrequency,
		priority,
	}));
}
