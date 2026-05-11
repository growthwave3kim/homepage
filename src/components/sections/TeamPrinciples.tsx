import { BarChart3, BookText, Layers } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

type Principle = {
	num: string;
	icon: typeof BookText;
	title: string;
	body: string;
	anecdote: string;
	// TODO: 실제 수치 확인 — placeholder 측정 기준
	meta: string;
};

const PRINCIPLES: Principle[] = [
	{
		num: "01",
		icon: BookText,
		title: "규정을 모르면 손대지 않습니다.",
		body: "변호사법·의료법·세무사법을 발행 전 직접 검토합니다. 직군 규정 통과 후에만 콘텐츠가 나갑니다.",
		anecdote: "변호사법 §23·의료법 §56을 매 콘텐츠 검토합니다.",
		meta: "검토 기준: 12개 직군 광고 규정",
	},
	{
		num: "02",
		icon: BarChart3,
		title: "노출보다 의뢰를 봅니다.",
		body: "월 보고서의 KPI는 상담 신청 수입니다. 노출이 늘어도 의뢰가 없으면 원인부터 다시 봅니다.",
		// TODO: 실제 수치 확인 — 임의값
		anecdote: "지난 6개월 신규 의뢰 30%가 콘텐츠 유입입니다.",
		meta: "측정 기준: 월간 상담 신청 수",
	},
	{
		num: "03",
		icon: Layers,
		title: "기획자가 직접 씁니다.",
		body: "콘텐츠 기획·초안·검수를 외주에 맡기지 않습니다. 직군을 아는 기획자가 처음부터 끝까지 씁니다.",
		// TODO: 실제 수치 확인 — 임의값
		anecdote: "기획자가 직접 쓴 콘텐츠 평균 시청완료율 40% 향상.",
		meta: "비교 기준: 외주 작성 콘텐츠 대비",
	},
];

export const TeamPrinciples = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Our Principles
					</p>
					<h2 className="font-bold text-3xl text-slate-900 tracking-tight md:text-5xl">
						이렇게 일합니다.
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{PRINCIPLES.map((p, i) => {
						const Icon = p.icon;
						return (
							<Reveal key={p.num} delay={i * 0.1} direction="up">
								<div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
									<div className="mb-5 flex items-center justify-between">
										<span className="font-bold font-mono text-[#7c3aed] text-sm tracking-[0.2em]">
											{p.num}
										</span>
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
											<Icon className="h-4 w-4 text-white" aria-hidden="true" />
										</div>
									</div>

									<h3 className="mb-3 break-keep font-bold text-lg text-slate-900 leading-snug tracking-tight md:text-xl">
										{p.title}
									</h3>
									<p className="mb-5 break-keep text-slate-600 text-sm leading-relaxed">{p.body}</p>

									<div className="mt-auto">
										<div className="rounded-lg bg-slate-50 px-4 py-3">
											<p className="break-keep text-slate-700 text-sm leading-relaxed">
												{p.anecdote}
											</p>
										</div>
										<p className="mt-3 font-mono text-slate-500 text-xs tracking-[0.12em]">
											{p.meta}
										</p>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
