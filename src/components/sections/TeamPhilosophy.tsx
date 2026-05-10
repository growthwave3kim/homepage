import { Reveal } from "@/components/shared/Reveal";

const PRINCIPLES = [
	{
		num: "01",
		title: "규정을 모르면 손대지 않는다",
		body: "직군 광고 규정 검토 없이 콘텐츠를 만들지 않습니다. 변호사법·의료법·세무사법 — 발행 전 항목별 체크가 기본입니다.",
		anecdote:
			"한 법무법인 의뢰에서 카피 초안의 30%가 위반 소지였습니다. 수정 후 발행했고, 위반 0건입니다.",
	},
	{
		num: "02",
		title: "노출보다 의뢰를 본다",
		body: "월 보고서에 노출 수는 참고 지표입니다. 실제 KPI는 상담 신청 수입니다. 다를 경우 원인부터 찾습니다.",
		anecdote:
			"노출 3만에서 상담 2건이었던 세무사 블로그를 재설계해 노출 1만 5천에서 상담 12건으로 만들었습니다.",
	},
	{
		num: "03",
		title: "운영팀이 아니라 기획자가 쓴다",
		body: "콘텐츠 기획·초안·검수를 외주 팀에 맡기지 않습니다. 직군을 아는 사람이 처음부터 끝까지 씁니다.",
		anecdote: "숏폼 스크립트를 외주 작가가 쓴 경우와 비교했을 때 평균 체류 시간이 40% 길었습니다.",
	},
] as const;

export const TeamPhilosophy = () => {
	return (
		<section className="bg-slate-50 px-4 py-24 md:py-28">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-14">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Our Way
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						우리가 일하는 방식
					</h2>
				</Reveal>

				<div className="flex flex-col gap-6">
					{PRINCIPLES.map((p, i) => (
						<Reveal key={p.num} delay={i * 0.1} direction="up">
							<div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-8 shadow-[0_2px_16px_rgba(15,23,42,0.05)] md:grid-cols-[auto_1fr] md:gap-10">
								<div className="flex items-start gap-4 md:flex-col md:gap-2">
									<span className="font-bold font-mono text-2xl text-[#7c3aed]">{p.num}</span>
								</div>

								<div>
									<h3 className="mb-3 font-bold text-[#0a0a0a] text-xl tracking-tight md:text-2xl">
										{p.title}
									</h3>
									<p className="mb-4 break-keep text-slate-600 leading-relaxed">{p.body}</p>
									<blockquote className="rounded-lg bg-slate-50 px-4 py-3">
										<p className="break-keep text-slate-500 text-sm leading-relaxed">
											{p.anecdote}
										</p>
									</blockquote>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
