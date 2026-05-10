// PLACEHOLDER: 아래 수치 및 사례는 가상입니다. 실데이터 확정 후 교체 필요.
export const CASE_HIGHLIGHT = {
	eyebrow: "성공 사례 · K 법무법인",
	title: "블로그 시작 6개월,\n월 상담 신청",
	afterValue: 18,
	afterUnit: "건",
	beforeValue: 3,
	beforeLabel: "월 상담 (시작 전)",
	afterLabel: "월 상담 (6개월 후)",
	multiplier: 6,
	quote:
		"광고비 줄이면서 상담이 늘 수 있다는 게 처음엔 이해가 안 됐어요. 근데 지금은 설명이 되네요.",
	quoteAuthor: "K 법무법인 대표",
	chartData: [3, 5, 8, 11, 15, 18] as number[],
	chartLabels: ["1월", "2월", "3월", "4월", "5월", "6월"],
	// PLACEHOLDER: 월별 광고비(만원) — 실데이터 교체 필요
	adData: [150, 130, 90, 60, 40, 30] as number[],
	reelsImageUrl: "https://placehold.co/280x500/0a0a0a/FEE500?text=Reels%0A248K+views",
	blogImageUrl: "https://placehold.co/600x380/F8FAFC/0f172a?text=Naver+Top+1",
	// PLACEHOLDER: 광고비 절감율 — 실데이터 교체 필요 (보수적 추정 65%)
	adSavingPct: 65,
} as const;
