"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { REGULATION_STATS } from "@/data/regulation-stats";

const CountUp = ({ to, duration = 1.4 }: { to: number; duration?: number }) => {
	const [val, setVal] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView || to === 0) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(Math.round(v)),
		});
		return () => controls.stop();
	}, [isInView, to, duration]);

	return <span ref={ref}>{val}</span>;
};

const CELL_META = [
	{ numClass: "gradient-text", borderClass: "border-b border-slate-100 md:border-b-0" },
	{
		numClass: "text-rose-500",
		borderClass: "border-l border-b border-slate-100 md:border-b-0",
	},
	{ numClass: "gradient-text", borderClass: "md:border-l md:border-slate-100" },
] as const;

export const RegulationStats = () => {
	return (
		<section className="bg-white py-20 md:py-28">
			<div className="mx-auto max-w-5xl px-4 md:px-8">
				<Reveal className="mb-12 text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Why it matters
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						규정 위반, 생각보다 <span className="text-rose-500">가깝습니다</span>
					</h2>
					<p className="mx-auto mt-4 max-w-xl break-keep text-slate-500 leading-relaxed">
						광고 위반은 행정처분·징계·형사처벌로 이어집니다. 아래 수치는 모두 공식 출처입니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-2 md:grid-cols-3">
					{REGULATION_STATS.map((item, i) => {
						const meta = CELL_META[i];
						return (
							<Reveal key={item.id} delay={i * 0.1} direction="up" className={meta.borderClass}>
								<div className="flex flex-col px-5 py-8 md:px-8 md:py-10">
									<p className="font-extrabold leading-none tracking-tighter">
										<span className={`text-[52px] sm:text-[60px] md:text-[68px] ${meta.numClass}`}>
											{item.id === "law2" ? (
												<span ref={undefined}>
													<CountUp to={item.value} />
												</span>
											) : (
												<CountUp to={item.value} />
											)}
										</span>
										<span className={`ml-0.5 align-top text-2xl ${meta.numClass}`}>
											{item.suffix}
										</span>
									</p>

									<h3 className="mt-3 break-keep font-bold text-[#0a0a0a] text-base tracking-tight md:text-lg">
										{item.label}
									</h3>
									<p className="mt-1.5 font-mono text-[10px] text-slate-400 tracking-[0.15em]">
										출처: {item.source}
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
