"use client";

import { Reveal } from "@/components/shared/Reveal";
import { PAIN_POINTS } from "@/data/pain-points";

export const PainPoints = () => {
	return (
		<section className="bg-white px-4 py-28 md:py-36">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<div className="mb-16">
						<p className="mb-4 font-mono text-[#0a0a0a]/40 text-[11px] uppercase tracking-[0.25em]">
							혹시 이런 경험
						</p>
						<h2 className="font-bold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl lg:text-[48px]">
							<span className="gradient-text">마케팅 회사</span>에 맡겨봤지만...
						</h2>
					</div>
				</Reveal>

				<div className="grid gap-4 md:grid-cols-2 md:gap-5">
					{PAIN_POINTS.map((point, i) => {
						const rotateClass = i % 2 === 0 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]";
						return (
							<Reveal key={point.id} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
								<div
									className={`group relative flex flex-col rounded-md border border-slate-100 bg-white p-6 transition-all duration-300 hover:rotate-0 hover:border-[#7c3aed]/20 hover:shadow-[0_4px_20px_rgba(124,58,237,0.07)] ${rotateClass}`}
								>
									<span className="mb-4 font-mono text-[#7c3aed]/40 text-[11px] tracking-[0.15em]">
										{String(i + 1).padStart(2, "0")}
									</span>
									<span
										className="pointer-events-none absolute top-3 right-4 select-none font-serif text-5xl text-[#7c3aed]/10 leading-none"
										aria-hidden="true"
									>
										{"“"}
									</span>
									<p className="font-medium text-[#0a0a0a]/80 text-lg leading-snug md:text-xl">
										{point.text}
									</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
