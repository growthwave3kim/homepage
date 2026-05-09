import type { Metadata } from "next";
import { Cases } from "@/components/sections/Cases";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
	title: "숏폼 마케팅 | Growth Wave",
	description: "전문직을 위한 릴스·쇼츠·틱톡 숏폼 마케팅. 꾸준한 콘텐츠로 전문가 채널을 키웁니다.",
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
		title: "채널이 곧 신뢰가 됩니다",
		description:
			"꾸준한 콘텐츠로 특정 분야 전문가로 자리 잡습니다. 블로그와 병행하면 검색과 신뢰를 동시에 잡습니다.",
	},
];

const SHORTFORM_CHANNELS = [
	{
		name: "인스타그램 릴스",
		intent: "지역·인지도 기반 노출",
		fit: "지역 의뢰가 중심인 직군. 기존 팔로워와 발견 탭 양쪽으로 닿습니다.",
	},
	{
		name: "유튜브 쇼츠",
		intent: "검색·추천 기반 장기 자산",
		fit: "전문성 시리즈에 강합니다. 영상이 채널 자산으로 남고 검색에서도 잡힙니다.",
	},
	{
		name: "틱톡",
		intent: "젊은 의뢰인 확장",
		fit: "비전문 시청자에게도 닿습니다. 직군 인지도를 넓히는 채널로 활용합니다.",
	},
];

const SHORTFORM_CONTENT_TYPES = [
	{
		type: "케이스 토크",
		description: "실제 의뢰·치료·상담 사례를 1분 이내로 정리합니다. 직군 신뢰의 핵심 콘텐츠입니다.",
	},
	{
		type: "Q&A형",
		description: "의뢰인이 자주 묻는 질문에 짧게 답합니다. 검색 의도와 직접 연결되는 형식입니다.",
	},
	{
		type: "지식·이슈",
		description: "법 개정·치료 트렌드·세무 변경 등 시의성 있는 주제로 전문성을 노출합니다.",
	},
];

const SHORTFORM_DELIVERABLES = [
	{
		title: "콘텐츠 기획서",
		description: "월 단위 주제·후크·메시지를 사전에 정리해 공유합니다.",
	},
	{
		title: "촬영·편집",
		description: "1분 내 영상 촬영부터 자막·후반 작업까지 한 번에 진행합니다.",
	},
	{
		title: "멀티 채널 업로드",
		description: "릴스·쇼츠·틱톡에 동시 배포하고 채널별로 최적화합니다.",
	},
	{
		title: "월간 리포트",
		description: "조회·저장·DM 단위로 성과를 정리해 보고합니다.",
	},
];

const service = SERVICES.find((s) => s.index === "02") ?? SERVICES[1];

export const ShortformServicePage = () => {
	return (
		<>
			<PageHero
				eyebrow="숏폼 마케팅"
				title="전문가 신뢰를"
				titleHighlight="숏폼으로 쌓습니다"
				sub="릴스·쇼츠·틱톡으로 전문가의 신뢰도를 콘텐츠로 쌓습니다. 꾸준한 콘텐츠는 먼저 찾아오는 구조를 만듭니다."
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

			{/* Channel Strategy */}
			<section className="bg-white px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Channel Strategy"
							title="채널마다 의도가 다릅니다"
							sub="같은 영상이라도 채널별 시청 맥락이 다릅니다. 직군과 목표에 맞춰 채널을 선택합니다."
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-4 md:grid-cols-3">
						{SHORTFORM_CHANNELS.map((c, i) => (
							<Reveal key={c.name} delay={i * 0.1}>
								<div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
									<p className="mb-1 font-bold text-foreground text-lg">{c.name}</p>
									<p className="mb-4 font-medium text-[#7c3aed] text-sm">{c.intent}</p>
									<p className="text-muted-foreground text-sm leading-relaxed">{c.fit}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</section>

			{/* Content Types */}
			<section className="bg-slate-50 px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Content Types"
							title="이런 콘텐츠를 만듭니다"
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-4 md:grid-cols-3">
						{SHORTFORM_CONTENT_TYPES.map((t, i) => (
							<Reveal key={t.type} delay={i * 0.1}>
								<div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
									<p className="mb-3 font-bold text-foreground text-lg">{t.type}</p>
									<p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
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

			{/* Deliverables */}
			<section className="bg-slate-50 px-4 py-20">
				<div className="mx-auto max-w-5xl">
					<Reveal>
						<SectionHeading
							eyebrow="Deliverables"
							title="이런 산출물을 받으십니다"
							className="mb-12"
						/>
					</Reveal>
					<div className="grid gap-4 sm:grid-cols-2">
						{SHORTFORM_DELIVERABLES.map((d, i) => (
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
			<CTACard headline="터지는 숏폼, 지금 시작하세요" sub="24시간 안으로 답변드립니다." />
		</>
	);
}

export default ShortformServicePage;
