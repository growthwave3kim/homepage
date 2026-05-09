export type ProcessStep = {
	title: string;
	description: string;
	icon: string;
	badge?: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
	{
		title: "무료 상담·진단",
		description:
			"현재 운영 중인 광고를 규정 위반 여부부터 확인합니다. 어떤 직군이든 30분이면 현황 파악이 됩니다.",
		icon: "MessageSquare",
		badge: "무료 30분",
	},
	{
		title: "전략 기획",
		description:
			"직군별 검색 키워드를 분석하고 월별 발행 캘린더를 설계합니다. 규정 안에서 노출되는 범위를 먼저 확정합니다.",
		icon: "CalendarDays",
	},
	{
		title: "제작·발행",
		description:
			"전문 작가가 작성 후 규정 재검토를 거쳐 발행합니다. 업로드 전 반드시 규정 적합성을 확인합니다.",
		icon: "PenLine",
	},
	{
		title: "성과 리포트",
		description: "월별 노출·유입 데이터를 공유합니다. 수치에 따라 다음 달 방향을 함께 조정합니다.",
		icon: "BarChart2",
	},
];
