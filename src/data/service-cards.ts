export type ServiceCard = {
	href: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	cta: string;
	points?: string[];
};

export const SERVICE_CARDS: ServiceCard[] = [
	{
		href: "/services/blog",
		icon: "BookOpen",
		eyebrow: "찾아오는 블로그",
		title: "검색하는 고객을\n상담으로 연결합니다",
		description: "검색량은 많고 경쟁이 적은 키워드를 찾아냅니다.",
		points: [
			"의뢰 직전 검색어만 선별합니다",
			"광고 규정 검토 후 발행합니다",
			"6개월 이상 검색에 남습니다",
		],
		cta: "찾아오는 블로그 비법 알아보기",
	},
	{
		href: "/services/shortform",
		icon: "Clapperboard",
		eyebrow: "터지는 숏폼",
		title: "고객이 먼저\n찾아오는 채널",
		description: "대본 작성부터 손동작까지 전부 관리해 드립니다.",
		points: [
			"릴스·쇼츠·틱톡 동시 발행합니다",
			"촬영 현장에 직접 갑니다",
			"전문가 이미지를 채널로 쌓습니다",
		],
		cta: "터지는 숏폼 비법 알아보기",
	},
	{
		href: "/services/professional",
		icon: "Share2",
		eyebrow: "쌓이는 SNS",
		title: "전문가 채널을\n꾸준히 키웁니다",
		description: "스레드·링크드인 등 채널에 전문가 목소리를 꾸준히 씁니다.",
		points: [
			"팔로워가 예비 의뢰인이 됩니다",
			"주 3회 이상 꾸준히 발행합니다",
			"직군 특화 글쓰기 전략을 씁니다",
		],
		cta: "쌓이는 SNS 비법 알아보기",
	},
];
