type SignaturePoint = {
	num: string;
	title: string;
	body: string;
};

export const SIGNATURE_POINTS: SignaturePoint[] = [
	{
		num: "01",
		title: "규정부터 봅니다",
		body: "광고 규정 위반 0건. 대표 경력 기준 누적 데이터입니다.",
	},
	{
		num: "02",
		title: "노출이 아닌 의뢰를 봅니다",
		body: "키워드 1위가 아니라, 의뢰로 이어지는 검색 의도를 봅니다.",
	},
	{
		num: "03",
		title: "대표가 직접 보고합니다",
		body: "자동화 보고서가 아닙니다. 매월 1회, 대표가 직접 측정해 전합니다.",
	},
	{
		num: "04",
		title: "담당자가 바뀌지 않습니다",
		body: "월 단위 교체 없는 전담제. 직군 학습이 누적됩니다.",
	},
];
