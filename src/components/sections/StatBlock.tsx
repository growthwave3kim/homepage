"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { STATS } from "@/data/stats";

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

export const StatBlock = () => {
	return (
		<section className="bg-linear-to-br from-[#a78bfa] to-[#7c3aed] px-6 py-20 md:px-10 md:py-24">
			<div className="mx-auto max-w-[1440px]">
				<Reveal>
					<div className="mb-14 text-center md:mb-16">
						<p className="mb-4 font-mono font-semibold text-base text-white/90 uppercase tracking-[0.25em]">
							왜 그로스웨이브인가
						</p>
						<h2 className="font-bold text-5xl text-white leading-tight tracking-tight md:text-6xl lg:text-7xl">
							결과가 증명합니다.
						</h2>
						<p className="mx-auto mt-5 max-w-2xl text-white/70 text-xl leading-relaxed md:text-2xl">
							운영 데이터로 만든 4가지 약속.
						</p>
					</div>
				</Reveal>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
					{STATS.map((stat, i) => {
						const numericVal = Number(stat.value);
						const canCount = !Number.isNaN(numericVal) && numericVal > 1;
						return (
							<Reveal key={stat.title} delay={i * 0.08}>
								<article className="flex h-full min-h-[340px] flex-col rounded-2xl bg-white p-8">
									<h3 className="font-bold text-foreground text-xl tracking-tight md:text-2xl">
										{stat.title}
									</h3>
									<p className="mt-3 flex-1 whitespace-pre-line break-keep text-[15px] text-slate-500 leading-relaxed md:text-base">
										{stat.description}
									</p>
									<div className="mt-6">
										{stat.label && (
											<p className="mb-2 font-medium text-slate-600 text-xs tracking-wide">
												{stat.label}
											</p>
										)}
										<p className="font-extrabold text-6xl text-[#7c3aed] leading-none tracking-tight md:text-7xl">
											{canCount ? <CountUp to={numericVal} /> : <span>{stat.value}</span>}
											<span className="ml-1 text-4xl md:text-5xl">{stat.suffix}</span>
										</p>
										{stat.asOf && (
											<p className="mt-2 font-mono text-[11px] text-slate-500">{stat.asOf} 기준</p>
										)}
									</div>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
