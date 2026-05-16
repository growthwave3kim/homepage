// PLACEHOLDER: 아래 수치 및 사례는 가상입니다. 실데이터 확정 후 교체 필요.
export const CASE_HIGHLIGHTS = [
	{
		label: "사례 1.",
		client: "K 법무법인",
		multiplier: 6,
		beforeValue: 3,
		afterValue: 18,
		afterUnit: "건",
		quote: "광고비를 줄이면서 상담이 늘 수 있다는 게 가능할 줄 몰랐어요.",
		quoteAuthor: "K 법무법인 대표",
		adSavingAmount: 650,
		adCostBefore: 1000,
		adCostAfter: 350,
	},
	{
		label: "사례 2.",
		client: "D 정형외과",
		multiplier: 4,
		beforeValue: 4,
		afterValue: 16,
		afterUnit: "건",
		quote: "블로그 글 하나가 3개월 뒤에도 전화를 가져오더라고요.",
		quoteAuthor: "D 정형외과 원장",
		adSavingAmount: 520,
		adCostBefore: 800,
		adCostAfter: 280,
	},
] as const;

export const CASE_HIGHLIGHTS_SINGLE = [
	{
		label: "사례 3.",
		client: "H 법률사무소",
		multiplier: 3,
		beforeValue: 5,
		afterValue: 17,
		afterUnit: "건",
		period: "6개월",
		quote: "하루라도 빨리 그로스웨이브를 찾을 걸 그랬어요.",
		quoteAuthor: "H 법률사무소 대표",
	},
	{
		label: "사례 4.",
		client: "S 세무사무소",
		multiplier: 4,
		beforeValue: 3,
		afterValue: 12,
		afterUnit: "건",
		period: "6개월",
		quote: "매월 꾸준히 문의가 들어오고 있어요.",
		quoteAuthor: "S 세무사무소 대표",
	},
] as const;
