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
			"현재 운영 중인 채널(블로그·SNS 등)의 규정 위반 여부를 항목별로 확인합니다. 30분 안에 위반·보완 사항과 앞으로 취할 방향을 정리해드립니다.",
		icon: "MessageSquare",
		badge: "무료 30분",
	},
	{
		title: "규정·키워드 전략 수립",
		description:
			"직군 광고 규정을 기준으로 쓸 수 있는 표현과 쓸 수 없는 표현을 먼저 구분합니다. 그 안에서 검색 키워드와 월별 발행 캘린더를 확정합니다.",
		icon: "CalendarDays",
	},
	{
		title: "규정 검토 후 발행",
		description:
			"전문 작가가 초안을 작성하고 발행 전 규정 검토를 한 번 더 진행합니다. 검토를 통과한 콘텐츠만 업로드됩니다.",
		icon: "PenLine",
	},
	{
		title: "월별 성과 점검",
		description:
			"노출·유입 수치와 함께 상담 문의 전환까지 공유합니다. 데이터를 기준으로 다음 달 전략을 함께 조정합니다.",
		icon: "BarChart2",
		badge: "매달 공유",
	},
];
