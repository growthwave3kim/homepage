import { Check, X } from "lucide-react";
import type { Metadata } from "next";
import Cases from "@/components/sections/Cases";
import CTACard from "@/components/shared/CTACard";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
	title: "블로그 마케팅 | Growth Wave",
	description:
		"전문직을 위한 네이버 블로그 마케팅. 검색 의도 기반 콘텐츠로 노출과 의뢰 전환을 동시에 설계합니다.",
};

const BLOG_COMPARISON = [
	{ label: "키워드 전략", general: "대량 발행, 방향 없음", us: "의뢰인 검색 의도 기반 설계" },
	{ label: "콘텐츠 품질", general: "전문 용어 이해 부족", us: "직군 특화 작가 배정" },
	{ label: "성과 측정", general: "노출 수·클릭 수 위주", us: "상담 문의 전환 단위 KPI" },
	{ label: "광고 규정", general: "규정 미이해", us: "전문직 광고 규정 검토 후 발행" },
	{ label: "보고 방식", general: "자동화 보고서", us: "월 1회 직접 보고" },
];

const service = SERVICES[0];

export default function BlogServicePage() {
	return (
		<>
			<PageHero
				eyebrow="블로그 마케팅"
				title="읽히는 블로그가"
				titleHighlight="의뢰로 이어집니다"
				sub="고객은 문제를 마주쳤을 때 먼저 검색합니다. 그 순간 당신의 블로그가 보여야 합니다."
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="전문직 마케팅 보기"
				secondaryHref="/services/professional"
			/>

			{/* Comparison */}
			<section className="bg-slate-50 px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Comparison"
							title="일반 블로그 대행 vs 그로스웨이브"
							className="mb-12"
						/>
					</Reveal>
					<Reveal delay={0.1} className="overflow-x-auto">
						<div className="min-w-[500px] overflow-hidden rounded-2xl shadow-sm">
							{/* Header */}
							<div className="grid grid-cols-3">
								<div className="bg-slate-100 px-6 py-4">
									<span className="font-semibold text-slate-400 text-xs uppercase tracking-wider">
										항목
									</span>
								</div>
								<div className="flex items-center gap-2 bg-slate-100 px-6 py-4">
									<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-300">
										<X className="h-3 w-3 text-white" />
									</div>
									<span className="font-semibold text-slate-500 text-xs uppercase tracking-wider">
										일반 대행사
									</span>
								</div>
								<div className="gradient-brand flex items-center gap-2 px-6 py-4">
									<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25">
										<Check className="h-3 w-3 text-white" />
									</div>
									<span className="font-semibold text-sm text-white uppercase tracking-wider">
										그로스웨이브
									</span>
								</div>
							</div>
							{/* Rows */}
							{BLOG_COMPARISON.map((row) => (
								<div key={row.label} className="grid grid-cols-3 border-slate-100 border-t">
									<div className="bg-white px-6 py-4">
										<span className="font-medium text-foreground text-sm">{row.label}</span>
									</div>
									<div className="bg-slate-50 px-6 py-4">
										<span className="text-slate-400 text-sm">{row.general}</span>
									</div>
									<div className="bg-[#7c3aed]/5 px-6 py-4">
										<span className="font-semibold text-[#7c3aed] text-sm">{row.us}</span>
									</div>
								</div>
							))}
						</div>
					</Reveal>
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
				headline="읽히는 블로그, 지금 시작하세요"
				sub="첫 상담 무료 · 계약 압박 없음 · 영업일 1일 내 회신"
			/>
		</>
	);
}
