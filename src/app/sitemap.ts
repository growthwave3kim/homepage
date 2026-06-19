import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// 온케팅 이전 안내 페이지만 노출 — 구 페이지들은 sitemap 에서 제외
const routes = [{ path: "", priority: 1.0, changeFrequency: "monthly" as const }];

export const sitemap = (): MetadataRoute.Sitemap => {
	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteConfig.url}${path}`,
		lastModified: new Date(),
		changeFrequency,
		priority,
	}));
};

export default sitemap;
