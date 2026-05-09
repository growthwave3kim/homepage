import { Reveal } from "@/components/shared/Reveal";
import { PRICING_FACTORS } from "@/data/pricing";

export const PricingNote = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-4xl">
				<Reveal>
					<div className="mb-10 text-center">
						<p className="mb-3 font-semibold text-[#0a0a0a] text-sm uppercase tracking-[0.25em]">
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
							<div key={f.title} className="rounded-md border border-slate-200 bg-white p-6">
								<p className="mb-2 font-bold text-foreground">{f.title}</p>
								<p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
							</div>
						))}
					</div>
				</Reveal>

				<Reveal>
					<div className="mt-8 flex flex-col items-center justify-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-8 py-6 text-center sm:flex-row sm:gap-8">
						{["초기 진단 무료", "견적서 영업일 1주 내 발송", "계약 압박 없음"].map((item) => (
							<div key={item} className="flex items-center gap-2">
								<span className="h-1.5 w-1.5 rounded-full bg-[#0a0a0a]" />
								<span className="font-semibold text-[#0a0a0a] text-sm">{item}</span>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};
