export type FoundingStoryStat = {
	id: string;
	value: number;
	suffix: string;
	label: string;
	description: string;
};

export const FOUNDING_STORY = {
	paragraphs: [
		"전문직 광고 규정을 모르는 대행사들이 너무 많았습니다. 변호사법·의료법·세무사법 — 직군마다 허용 범위가 다릅니다. 규정을 모르면 만드는 콘텐츠마다 리스크가 됩니다.",
		"8년간 직군 광고 규정을 직접 검토하면서 깨달았습니다. 노출이 아니라 의뢰가 답이라는 것. 노출이 늘어도 신뢰가 없으면 전화는 오지 않습니다.",
		"그래서 그로스웨이브를 시작했습니다. 처음부터 끝까지, 규정을 아는 팀이 직접 만드는 마케팅. 지금까지 광고 위반 사례는 단 한 건도 없습니다.",
	],
	quote: "규정을 모르면 콘텐츠가 아니라 위험을 만듭니다.",
	quoteAuthor: "김태훈 / 그로스웨이브 대표",
	stats: [
		{
			id: "years",
			value: 8,
			suffix: "년",
			label: "규정 검토 경력",
			description: "변호사·의료·세무 광고 규정 직접 검토",
		},
		{
			id: "fields",
			value: 12,
			suffix: "개",
			label: "전문직 직군",
			description: "직군별 허용·금지 항목 전담 데이터베이스",
		},
		{
			id: "violations",
			value: 0,
			suffix: "건",
			label: "광고 규정 위반",
			description: "지금까지 누적 위반 사례 없음",
		},
	] as FoundingStoryStat[],
};
