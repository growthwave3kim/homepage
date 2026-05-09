"use client";

import { Reveal } from "@/components/shared/Reveal";
import { CASES } from "@/data/cases";

export const Cases = () => {
	return (
		<section className="bg-[#FAF8FF] px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-16">
						<p className="mb-4 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
							Cases
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							직군마다, 다른 결과.
						</h2>
					</div>
				</Reveal>

				<div className="divide-y divide-slate-200">
					{CASES.map((c, i) => {
						const num = String(i + 1).padStart(2, "0");
						return (
							<Reveal key={c.anonymous} delay={i * 0.07} direction="left">
								<div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-16">
									{/* Number + badge */}
									<div className="flex items-center gap-5 md:w-52 md:shrink-0 md:flex-col md:items-start md:gap-3">
										<span className="select-none font-black text-7xl text-[#0a0a0a] leading-none opacity-[0.05] md:text-8xl">
											{num}
										</span>
										<span className="badge-purple">{c.field}</span>
									</div>

									{/* Metric + quote */}
									<div className="flex-1">
										<p className="mb-3 font-bold text-2xl text-[#7c3aed] leading-tight md:text-3xl">
											{c.metric}
										</p>
										<p className="max-w-lg text-muted-foreground leading-relaxed">
											&ldquo;{c.quote}&rdquo;
										</p>
									</div>

									{/* Period */}
									<div className="shrink-0">
										<span className="font-mono text-slate-400 text-sm">{c.period}</span>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>

				<Reveal>
					<p className="mt-10 border-slate-200 border-t pt-8 text-slate-400 text-xs">
						* 구체적인 수치와 사례는 상담 시 상세히 공유드립니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
