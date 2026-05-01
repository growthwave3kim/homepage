import Reveal from "@/components/shared/Reveal";

const PRICING_FACTORS = [
	{
		title: "직군별 복잡도",
		description:
			"변호사 광고 규정 준수 콘텐츠와 세무사 정보성 콘텐츠는 제작 난이도가 다릅니다. 직군에 따라 필요한 사전 검토 범위가 달라집니다.",
	},
	{
		title: "운영 채널",
		description: "블로그 단독 / 숏폼 포함 / 멀티채널 여부에 따라 월 작업 규모가 달라집니다.",
	},
	{
		title: "성과 목표 KPI",
		description:
			"월 상담 문의 수 목표 / 키워드 상위노출 수 / 브랜드 신뢰 누적 등 목표에 맞게 설계합니다.",
	},
];

export default function PricingNote() {
	return (
		<section className="bg-white px-4 py-20">
			<div className="mx-auto max-w-4xl">
				<Reveal>
					<div className="mb-10 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Pricing
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							비용은 어떻게 책정되나요?
						</h2>
						<p className="mt-4 text-muted-foreground leading-relaxed">
							직군·채널·목표 KPI에 따라 달라지기 때문에 일률적인 가격표는 없습니다.
							<br className="hidden sm:block" />첫 상담에서 구체적인 방향과 예상 비용을 함께
							안내드립니다.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="grid gap-4 sm:grid-cols-3">
						{PRICING_FACTORS.map((f) => (
							<div key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
								<p className="mb-2 font-bold text-foreground">{f.title}</p>
								<p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal>
					<p className="mt-8 text-center text-muted-foreground text-sm">
						상담 전 가격이 궁금하다면? 첫 상담에서 명확하게 안내드립니다.{" "}
						<span className="text-slate-400">진행 의무 없음.</span>
					</p>
				</Reveal>
			</div>
		</section>
	);
}
