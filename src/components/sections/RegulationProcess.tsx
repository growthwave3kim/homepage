import { Reveal } from "@/components/shared/Reveal";

const STEPS = [
	{
		num: "01",
		title: "직군 규정 매핑",
		desc: "변호사법·의료법 등 해당 직군 광고 규정을 항목별로 정리합니다.",
	},
	{
		num: "02",
		title: "콘텐츠 초안",
		desc: "키워드·검색 의도 기반으로 콘텐츠를 기획하고 초안을 작성합니다.",
	},
	{
		num: "03",
		title: "항목별 체크",
		desc: "허용 표현·금지 표현을 대조해 위반 소지를 전수 검토합니다.",
	},
	{
		num: "04",
		title: "발행",
		desc: "규정 준수 확인 후 채널에 발행합니다. 이후 결과는 수치로 보고합니다.",
	},
];

export const RegulationProcess = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-28">
			<div className="mx-auto max-w-5xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Process
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						규정 검토 <span className="gradient-text">4단계</span>
					</h2>
				</Reveal>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
					{STEPS.map((step, i) => (
						<Reveal key={step.num} delay={i * 0.1} direction="up">
							<div className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
								{/* Connector line (desktop) */}
								{i < STEPS.length - 1 && (
									<div
										className="absolute top-10 right-0 hidden h-px w-4 bg-slate-200 md:block"
										style={{ right: "-16px" }}
										aria-hidden="true"
									/>
								)}

								<span className="mb-4 font-mono font-bold text-[#7c3aed] text-xl">{step.num}</span>
								<h3 className="mb-2 font-bold text-[#0a0a0a] text-base tracking-tight">
									{step.title}
								</h3>
								<p className="break-keep text-slate-500 text-sm leading-relaxed">{step.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
