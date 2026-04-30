const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://growthwave.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "Growth Wave",
	nameKo: "그로스웨이브",
	title: "Growth Wave | 법무법인 전문 마케팅 대행사",
	description: "변호사를 위한 네이버 블로그·숏폼 콘텐츠 마케팅. 법무법인에 특화된 그로스웨이브.",
	keywords: [
		"법무법인 마케팅",
		"변호사 마케팅",
		"변호사 블로그",
		"법률 마케팅",
		"Growth Wave",
		"그로스웨이브",
		"네이버 블로그 마케팅",
		"숏폼 마케팅",
		"변호사 광고",
		"법무법인 광고",
		"수임 마케팅",
	],
	url,
	ogImage: `${url}/opengraph-image`,
	locale: "ko_KR",
	authors: [{ name: "Growth Wave", url }],
	creator: "Growth Wave",
	contact: {
		tel: "02-000-0000",
		email: "contact@growthwave.kr",
		address: "서울특별시 강남구",
		businessName: "그로스웨이브",
		businessNumber: "000-00-00000",
	},
	nav: [
		{ label: "회사소개", href: "#about" },
		{ label: "서비스", href: "#services" },
		{ label: "팀원", href: "#team" },
		{ label: "FAQ", href: "#faq" },
	],
} as const;

export type SiteConfig = typeof siteConfig;
