import type { WhyUsCard } from "@/types";

export type WhyUsBoldCard = {
	icon: string;
	title: string;
	description: string;
	stat: string;
	before: string;
	after: string;
};

export const WHY_US_BOLD_CARDS: WhyUsBoldCard[] = [
	{
		icon: "ShieldCheck",
		title: "광고 규정 사전 검토",
		description:
			"변호사·의사·한의사 등 광고 규정이 까다로운 전문직에 특화된 콘텐츠를 설계합니다. 규정 검토 후 전 콘텐츠를 발행합니다.",
		stat: "광고 위반 0건 누적",
		before: "규정 무시 → 플랫폼 제재·삭제 위험",
		after: "규정 검토 후 전 콘텐츠 발행",
	},
	{
		icon: "Database",
		title: "감이 아닌 데이터로 키워드를 잡습니다.",
		description:
			"분야별 의뢰인이 실제로 검색하는 키워드를 직접 수집합니다. 마케터의 감이 아닌 실검 데이터로 콘텐츠 방향을 결정합니다.",
		stat: "실검 데이터 기반 키워드 전략",
		before: "감으로 잡은 키워드 → 검색 유입 없음",
		after: "실검 데이터 기반 키워드 전략",
	},
	{
		icon: "Target",
		title: "노출이 아닌, 수임 전환입니다.",
		description:
			"조회수가 아닌 상담 전화와 수임 건수를 목표로 합니다. 매월 수임 데이터를 기준으로 전략을 수정합니다.",
		stat: "노출 수 아닌 수임 수로 보고",
		before: "노출·클릭에 집착 → 실제 수임 불명",
		after: "상담 신청·수임 전환 중심 보고",
	},
];

export const WHY_US_CARDS: WhyUsCard[] = [
	{
		icon: "ShieldCheck",
		title: "전문직 광고 규정 직접 검토",
		description:
			"변호사·의사·한의사 등 광고 규정이 까다로운 전문직에 특화된 콘텐츠를 기획합니다. 규정 검토 후 전 콘텐츠를 발행합니다.",
	},
	{
		icon: "Database",
		title: "전문직 키워드 데이터베이스 보유",
		description:
			"분야별 실제 고객이 검색하는 키워드를 데이터로 보유합니다. 검색 의도에 정확히 부합하는 콘텐츠로 상위 노출로 이어집니다.",
	},
	{
		icon: "Search",
		title: "상담 전환 목표 콘텐츠 설계",
		description:
			"노출 수가 아닌 상담·의뢰 전환을 목표로 합니다. 고객이 실제로 찾는 정보를 중심으로 콘텐츠 구조를 잡습니다.",
	},
	{
		icon: "User",
		title: "전문가 채널 성장",
		description:
			"숏폼과 블로그로 전문가의 신뢰도를 콘텐츠로 쌓습니다. 고객이 먼저 찾아오는 채널 구조를 만듭니다.",
	},
];
