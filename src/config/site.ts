import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://growthwave.co.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "Growth Wave",
	nameKo: "그로스웨이브",
	title: "Growth Wave | 전문직 마케팅 대행사",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직을 위한 네이버 블로그·숏폼 콘텐츠 마케팅. 광고 규정을 이해하는 그로스웨이브.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"수의사 마케팅",
		"노무사 마케팅",
		"세무사 마케팅",
		"전문직 블로그",
		"Growth Wave",
		"그로스웨이브",
		"네이버 블로그 마케팅",
		"숏폼 마케팅",
		"전문직 광고",
		"수임 마케팅",
	],
	url,
	ogImage: `${url}/og-image.png`,
	locale: "ko_KR",
	authors: [{ name: "Growth Wave", url }],
	creator: "Growth Wave",
	contact: {
		tel: "010-4048-6460",
		email: "growthwave.3kim@gmail.com",
		address: "경기도 화성시 동탄구 동탄중심상가1길 36, 8층",
		businessName: "그로스웨이브",
		businessNumber: "112-31-25690",
		kakaoOpenChat: "https://open.kakao.com/o/sgn3wFti",
		naverBlog: "https://blog.naver.com/growthwave-",
		businessHours: "월–금 09:00–18:00",
	},
	nav: [
		{ label: "회사소개", href: "/about" },
		{
			label: "마케팅",
			href: "/services/professional",
			matchPrefix: "/services",
			children: [
				{
					label: "전문직 마케팅",
					href: "/services/professional",
					description: "광고 규정 직접 검토 · 12개 직군 전용",
					icon: "Crown",
					flagship: true,
				},
				{
					label: "블로그 마케팅",
					href: "/services/blog",
					description: "검색에서 상담으로 이어지는 콘텐츠",
					icon: "FileText",
				},
				{
					label: "숏폼 마케팅",
					href: "/services/shortform",
					description: "릴스·쇼츠·틱톡 전문가 채널 구축",
					icon: "Clapperboard",
				},
			],
		},
		{ label: "광고 규정", href: "/regulation" },
		{ label: "팀", href: "/team" },
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
