import { Check, X } from "lucide-react";
import type { Metadata } from "next";
import { Cases } from "@/components/sections/Cases";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
	title: "블로그 마케팅 | Growth Wave",
	description:
		"전문직을 위한 네이버 블로그 마케팅. 검색 의도 기반 콘텐츠로 노출과 의뢰 전환을 동시에 설계합니다.",
};

const BLOG_WHY = [
	{
		title: "검색은 의사결정 직전입니다",
		description:
			"의뢰인은 변호사·의사를 찾을 때 검색부터 합니다. 그 순간 보이는 콘텐츠가 의뢰를 결정합니다.",
	},
	{
		title: "한 번 발행하면 자산이 됩니다",
		description:
			"상위 노출된 콘텐츠는 광고비 없이도 검색 트래픽을 가져옵니다. 광고가 끊겨도 의뢰는 계속 들어옵니다.",
	},
	{
		title: "전문성 검증 도구입니다",
		description:
			"잘못 쓴 콘텐츠는 오히려 신뢰를 깎습니다. 광고 규정과 직군 지식 없이 발행하면 위험합니다.",
	},
];

const KEYWORD_EXAMPLES = [
	{
		profession: "변호사",
		intent: "위기 상황에서 검색합니다",
		examples: ["음주운전 초범 처벌", "이혼 재산분할 비율", "사기죄 합의금"],
	},
	{
		profession: "의사",
		intent: "치료 결정 직전에 검색합니다",
		examples: ["탈모 약 부작용", "임플란트 수명", "라식 라섹 차이"],
	},
	{
		profession: "한의사",
		intent: "병원을 비교하며 검색합니다",
		examples: ["허리디스크 한의원", "다이어트 한약 부작용", "교통사고 한방치료"],
	},
	{
		profession: "수의사",
		intent: "응급·예방 상황에서 검색합니다",
		examples: ["강아지 슬개골 탈구 비용", "고양이 신부전 증상", "예방접종 시기"],
	},
	{
		profession: "노무사",
		intent: "분쟁이 발생하면 검색합니다",
		examples: ["부당해고 위로금", "산재 신청 절차", "임금체불 신고"],
	},
	{
		profession: "세무사",
		intent: "신고·세무 시점에 검색합니다",
		examples: ["프리랜서 종합소득세", "양도세 절세", "법인세 신고 기한"],
	},
];

const BLOG_COMPARISON = [
	{ label: "키워드 전략", general: "대량 발행, 방향 없음", us: "의뢰인 검색 의도 기반 설계" },
	{ label: "콘텐츠 품질", general: "전문 용어 이해 부족", us: "직군 특화 작가 배정" },
	{ label: "성과 측정", general: "노출 수·클릭 수 위주", us: "상담 문의 전환 단위 KPI" },
	{ label: "광고 규정", general: "규정 미이해", us: "전문직 광고 규정 검토 후 발행" },
	{ label: "보고 방식", general: "자동화 보고서", us: "월 1회 직접 보고" },
];

const BLOG_DELIVERABLES = [
	{
		title: "키워드 분석서",
		description: "직군 특화 키워드 목록과 검색량·경쟁도를 정리해 드립니다.",
	},
	{
		title: "콘텐츠 캘린더",
		description: "월간 발행 일정과 주제 매핑을 사전 공유합니다.",
	},
	{
		title: "발행 콘텐츠",
		description: "광고 규정 검토를 거친 검색 의도 기반 글을 발행합니다.",
	},
	{
		title: "월간 리포트",
		description: "노출·클릭·상담 신청 수 단위로 정리한 보고를 받습니다.",
	},
];

const service = SERVICES[0];

export const BlogServicePage = () => {
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

			{/* Why Blog */}
			<section className="bg-white px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Why Blog"
							title="블로그가 전문직에 효과적인 이유"
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-6 md:grid-cols-3">
						{BLOG_WHY.map((b, i) => (
							<Reveal key={b.title} delay={i * 0.1}>
								<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
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

			{/* 직군별 검색 키워드 예시 */}
			<section className="bg-slate-50 px-4 py-20">
				<div className="mx-auto max-w-6xl">
					<Reveal>
						<SectionHeading
							eyebrow="Search Intent"
							title="검색 의도는 직군마다 다릅니다"
							sub="같은 '상담 받고 싶다'라도 검색어가 완전히 다릅니다. 그래서 키워드 전략부터 직군별로 분리합니다."
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{KEYWORD_EXAMPLES.map((k, i) => (
							<Reveal key={k.profession} delay={i * 0.06}>
								<div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
									<p className="mb-1 font-bold text-foreground text-lg">{k.profession}</p>
									<p className="mb-4 text-[#7c3aed] text-sm">{k.intent}</p>
									<ul className="flex flex-col gap-2">
										{k.examples.map((ex) => (
											<li
												key={ex}
												className="rounded-lg bg-slate-50 px-3 py-2 font-medium text-slate-700 text-sm"
											>
												{ex}
											</li>
										))}
									</ul>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Comparison */}
			<section className="bg-white px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Comparison"
							title="일반 블로그 대행 vs 그로스웨이브"
							className="mb-12"
						/>
					</Reveal>
					<Reveal delay={0.1}>
						<div className="overflow-hidden rounded-2xl shadow-sm">
							{/* Header */}
							<div className="grid grid-cols-3">
								<div className="bg-slate-100 px-3 py-3 md:px-6 md:py-4">
									<span className="font-semibold text-[10px] text-slate-400 uppercase tracking-wider md:text-xs">
										항목
									</span>
								</div>
								<div className="flex items-center gap-1.5 bg-slate-100 px-3 py-3 md:gap-2 md:px-6 md:py-4">
									<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-300 md:h-5 md:w-5">
										<X className="h-2.5 w-2.5 text-white md:h-3 md:w-3" />
									</div>
									<span className="font-semibold text-[10px] text-slate-500 uppercase tracking-wider md:text-xs">
										일반 대행사
									</span>
								</div>
								<div className="gradient-brand flex items-center gap-1.5 px-3 py-3 md:gap-2 md:px-6 md:py-4">
									<div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/25 md:h-5 md:w-5">
										<Check className="h-2.5 w-2.5 text-white md:h-3 md:w-3" />
									</div>
									<span className="font-semibold text-[10px] text-white uppercase tracking-wider md:text-sm">
										그로스웨이브
									</span>
								</div>
							</div>
							{/* Rows */}
							{BLOG_COMPARISON.map((row) => (
								<div key={row.label} className="grid grid-cols-3 border-slate-100 border-t">
									<div className="bg-white px-3 py-3 md:px-6 md:py-4">
										<span className="font-medium text-foreground text-xs md:text-sm">
											{row.label}
										</span>
									</div>
									<div className="bg-slate-50 px-3 py-3 md:px-6 md:py-4">
										<span className="text-slate-400 text-xs md:text-sm">{row.general}</span>
									</div>
									<div className="bg-[#7c3aed]/5 px-3 py-3 md:px-6 md:py-4">
										<span className="font-semibold text-[#7c3aed] text-xs md:text-sm">
											{row.us}
										</span>
									</div>
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</section>

			{/* Process steps */}
			<section className="bg-slate-50 px-4 py-20">
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

			{/* Deliverables */}
			<section className="bg-white px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Deliverables"
							title="이런 산출물을 받으십니다"
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-4 sm:grid-cols-2">
						{BLOG_DELIVERABLES.map((d, i) => (
							<Reveal key={d.title} delay={i * 0.08}>
								<div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
									<div className="gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-sm text-white">
										0{i + 1}
									</div>
									<div>
										<p className="mb-1 font-bold text-foreground">{d.title}</p>
										<p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			<Cases />
			<CTACard headline="읽히는 블로그, 지금 시작하세요" sub="24시간 안으로 답변드립니다." />
		</>
	);
}

export default BlogServicePage;
