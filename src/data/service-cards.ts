export type ServiceCard = {
	href: string;
	icon: string;
	eyebrow: string;
	title: string;
	description: string;
	cta: string;
	kpi?: string;
};

export const SERVICE_CARDS: ServiceCard[] = [
	{
		href: "/services/blog",
		icon: "BookOpen",
		eyebrow: "블로그 마케팅",
		title: "검색하는 고객을\n상담으로 연결합니다",
		description:
			"전문직 키워드 DB 기반으로 검색 상위 노출을 설계합니다. 규정 검토 후 발행, 광고 위반 0건.",
		cta: "블로그 전략 보기",
		kpi: "평균 8주 내 검색 상위 노출",
	},
	{
		href: "/services/shortform",
		icon: "Clapperboard",
		eyebrow: "숏폼 마케팅",
		title: "의뢰인이 먼저\n찾아오는 채널",
		description:
			"릴스·쇼츠·틱톡으로 전문가 신뢰를 콘텐츠로 쌓습니다. 팔로워가 아닌 상담 전환을 목표합니다.",
		cta: "숏폼 사례 보기",
		kpi: "첫 달 평균 조회수 3만+",
	},
	{
		href: "/services/professional",
		icon: "Users",
		eyebrow: "전문직 특화 — 12개 직군",
		title: "규정 안에서만\n마케팅합니다",
		description:
			"변호사·의사·세무사·노무사 등 광고 규정이 까다로운 분야를 전담합니다. 규정 검토 후 전 콘텐츠를 발행합니다.",
		cta: "담당 직군 확인",
		kpi: "광고 규정 위반 0건 누적",
	},
];
