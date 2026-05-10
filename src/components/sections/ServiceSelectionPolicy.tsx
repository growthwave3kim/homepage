import { Reveal } from "@/components/shared/Reveal";
import { SELECTION_POLICY } from "@/data/selection-policy";

export const ServiceSelectionPolicy = () => {
	return (
		<section className="bg-[#0a0a0a] px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
					{/* 좌: 헤딩 */}
					<Reveal direction="left">
						<p className="mb-3 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
							{SELECTION_POLICY.eyebrow}
						</p>
						<h2 className="mb-4 font-bold text-3xl text-white tracking-tight md:text-4xl">
							{SELECTION_POLICY.title}
						</h2>
						<p className="mb-8 break-keep text-white/50 leading-relaxed">
							{SELECTION_POLICY.sub}
						</p>
						<div className="inline-flex items-baseline gap-2">
							<span className="font-extrabold text-[52px] leading-none tracking-tighter text-white">
								{SELECTION_POLICY.rechurnRate}
							</span>
							<span className="font-bold text-2xl text-white/70">%+</span>
							<span className="ml-1 font-medium text-white/40 text-sm">재계약율</span>
						</div>
					</Reveal>

					{/* 우: 기준 목록 */}
					<div className="flex flex-col gap-4">
						{SELECTION_POLICY.criteria.map((c, i) => (
							<Reveal key={c.id} delay={i * 0.1} direction="right">
								<div className="rounded-xl border border-white/10 bg-white/5 p-5">
									<div className="mb-2 flex items-center gap-2">
										<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c3aed] font-bold text-white text-xs">
											{i + 1}
										</span>
										<p className="font-semibold text-white text-sm">{c.title}</p>
									</div>
									<p className="break-keep text-white/50 text-sm leading-relaxed">{c.desc}</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
