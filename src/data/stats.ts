export type Stat = {
	value: string;
	suffix: string;
	label: string;
	asOf?: string;
};

export const STATS: Stat[] = [
	{ value: "12", suffix: "개", label: "담당 전문직 직군", asOf: "2026.05" },
	{ value: "90", suffix: "%+", label: "재계약율", asOf: "누적" },
	{ value: "100", suffix: "%", label: "발행 전 규정 검토 완료율", asOf: "누적" },
	{ value: "92", suffix: "%", label: "콘텐츠 검색 상위 노출 달성율", asOf: "블로그" },
];
