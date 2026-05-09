export type ServiceCard = {
	href: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	cta: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
	{
		href: "/services/professional",
		icon: "Users",
		eyebrow: "전문직 마케팅",
		title: "6개 전문직 직군을 위한\n특화 마케팅",
		description: "광고 규정과 신뢰가 까다로운 분야에서 상담 전환을 설계합니다.",
		cta: "자세히 보기",
	},
	{
		href: "/services/blog",
		icon: "BookOpen",
		eyebrow: "블로그 마케팅",
		title: "검색하는 고객을 만나는\n읽히는 블로그",
		description: "전문직 키워드 DB로 검색 상위 노출까지 책임집니다.",
		cta: "자세히 보기",
	},
	{
		href: "/services/shortform",
		icon: "Clapperboard",
		eyebrow: "숏폼 마케팅",
		title: "의뢰인이 먼저 찾아오는\n터지는 숏폼",
		description: "릴스·쇼츠·틱톡으로 전문가 채널을 키웁니다.",
		cta: "자세히 보기",
	},
];
