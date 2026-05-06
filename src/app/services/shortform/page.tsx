import type { Metadata } from "next";
import Cases from "@/components/sections/Cases";
import CTACard from "@/components/shared/CTACard";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
	title: "숏폼 마케팅 | Growth Wave",
	description:
		"전문직을 위한 릴스·쇼츠·틱톡 숏폼 마케팅. 꾸준한 콘텐츠로 전문가 퍼스널 브랜드를 구축합니다.",
};

const SHORTFORM_BENEFITS = [
	{
		title: "먼저 찾아오는 구조가 됩니다",
		description:
			"숏폼을 통해 전문가를 먼저 알게 된 의뢰인은 신뢰도가 이미 형성된 상태로 연락합니다.",
	},
	{
		title: "멀티 채널 동시 배포",
		description: "인스타그램 릴스, 유튜브 쇼츠, 틱톡에 동시 배포해 더 많은 잠재 고객에게 닿습니다.",
	},
	{
		title: "퍼스널 브랜드 구축",
		description:
			"꾸준한 콘텐츠로 특정 분야 전문가로 포지셔닝됩니다. 블로그와 병행하면 시너지가 큽니다.",
	},
];

const service = SERVICES.find((s) => s.index === "02") ?? SERVICES[1];

export default function ShortformServicePage() {
	return (
		<>
			<PageHero
				eyebrow="숏폼 마케팅"
				title="전문가 신뢰를"
				titleHighlight="숏폼으로 쌓습니다"
				sub="릴스·쇼츠·틱톡으로 전문가의 신뢰도를 자연스럽게 쌓습니다. 꾸준한 콘텐츠는 먼저 찾아오는 구조를 만듭니다."
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="블로그 마케팅 보기"
				secondaryHref="/services/blog"
			/>

			{/* Benefits */}
			<section className="bg-slate-50 px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Why Shortform"
							title="숏폼이 전문직에 효과적인 이유"
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-6 md:grid-cols-3">
						{SHORTFORM_BENEFITS.map((b, i) => (
							<Reveal key={b.title} delay={i * 0.1}>
								<div className="rounded-2xl bg-white p-8 shadow-sm">
									<div className="gradient-brand mb-4 flex h-10 w-10 items-center justify-center rounded-xl">
										<span className="font-bold text-sm text-white">0{i + 1}</span>
									</div>
									<h3 className="mb-3 font-bold text-foreground text-lg">{b.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Process steps */}
			<section className="bg-white px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow={service.category}
							title={service.title}
							sub={service.description}
							className="mb-14"
						/>
					</Reveal>
					<Reveal delay={0.1}>
						<ol className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
							{service.steps.map((step, si) => (
								<li key={step.step} className="flex items-center gap-3">
									<div className="flex flex-col items-center gap-2 text-center">
										<span className="gradient-brand flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg text-white shadow-[0_4px_12px_rgba(124,58,237,0.3)]">
											{step.step}
										</span>
										<span className="font-medium text-foreground text-sm">{step.label}</span>
									</div>
									{si < service.steps.length - 1 && (
										<span className="mb-6 hidden text-slate-300 text-xl sm:block">→</span>
									)}
								</li>
							))}
						</ol>
					</Reveal>
				</div>
			</section>

			<Cases />
			<CTACard
				headline="터지는 숏폼, 지금 시작하세요"
				sub="첫 상담 무료 · 계약 압박 없음 · 영업일 1일 내 회신"
			/>
		</>
	);
}
