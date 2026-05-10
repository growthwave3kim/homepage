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
			"현재 운영 중인 광고의 규정 위반 여부를 항목별로 확인합니다. 30분 안에 위반 사항과 앞으로의 방향을 함께 정리해드립니다.",
		icon: "MessageSquare",
		badge: "무료 30분",
	},
	{
		title: "전략 기획",
		description:
			"직군 광고 규정을 기준으로 쓸 수 있는 표현과 쓸 수 없는 표현을 먼저 구분합니다. 그 안에서 검색 키워드와 월별 발행 캘린더를 확정합니다.",
		icon: "CalendarDays",
	},
	{
		title: "제작·발행",
		description:
			"전문 작가가 초안을 작성하고 발행 전 규정 검토를 한 번 더 진행합니다. 검토를 통과한 콘텐츠만 업로드됩니다.",
		icon: "PenLine",
	},
	{
		title: "성과 리포트",
		description: "월별 노출·유입 데이터를 공유합니다. 수치에 따라 다음 달 방향을 함께 조정합니다.",
		icon: "BarChart2",
	},
];
