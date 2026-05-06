import type { NavItem } from "@/types";

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://growthwave.kr";
const url = rawUrl.replace(/\/$/, "");

export const siteConfig = {
	name: "Growth Wave",
	nameKo: "그로스웨이브",
	title: "Growth Wave | 전문직 마케팅 대행사",
	description:
		"변호사·의사·한의사·변리사·노무사 등 전문직을 위한 네이버 블로그·숏폼 콘텐츠 마케팅. 광고 규정을 이해하는 그로스웨이브.",
	keywords: [
		"전문직 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
		"변리사 마케팅",
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
	ogImage: `${url}/opengraph-image`,
	locale: "ko_KR",
	authors: [{ name: "Growth Wave", url }],
	creator: "Growth Wave",
	contact: {
		tel: "02-000-0000",
		email: "growthwave.3kim@gmail.com",
		address: "서울특별시 강남구",
		businessName: "그로스웨이브",
		businessNumber: "000-00-00000",
		kakaoOpenChat: "https://open.kakao.com/o/sgn3wFti",
		naverBlog: "https://blog.naver.com/growthwave-",
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
					description: "변호사·의사·한의사·변리사 등 광고 규정이 까다로운 직군 전용",
					icon: "Crown",
					flagship: true,
				},
				{
					label: "블로그 마케팅",
					href: "/services/blog",
					description: "검색 의도 기반 콘텐츠로 상위노출까지",
					icon: "FileText",
				},
				{
					label: "숏폼 마케팅",
					href: "/services/shortform",
					description: "릴스·쇼츠·틱톡으로 전문가 신뢰 누적",
					icon: "Clapperboard",
				},
			],
		},
		{ label: "팀", href: "/team" },
		{ label: "FAQ", href: "/faq" },
	] as NavItem[],
};
