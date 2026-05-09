"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
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
		<section className="border-slate-100 border-y bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-6xl">
				<div className="grid grid-cols-2 divide-x divide-slate-100 md:grid-cols-4">
					{STATS.map((stat) => {
						const numericVal = Number(stat.value);
						const canCount = !Number.isNaN(numericVal) && numericVal > 1;
						return (
							<div key={stat.label} className="px-6 py-4 text-center first:pl-0 last:pr-0 md:px-10">
								<p className="font-extrabold text-4xl text-[#7c3aed] leading-none md:text-5xl">
									{canCount ? <CountUp to={numericVal} /> : <span>{stat.value}</span>}
									<span className="text-2xl md:text-3xl">{stat.suffix}</span>
								</p>
								<p className="mt-3 text-slate-500 text-sm leading-snug">{stat.label}</p>
								{stat.asOf && (
									<p className="mt-1 font-mono text-[10px] text-slate-400">{stat.asOf} 기준</p>
								)}
							</div>
						);
					})}
				</div>
				<p className="mt-6 text-center font-mono text-[10px] text-slate-400 tracking-wide">
					* 운영 데이터 기준 / 세부 수치는 상담 시 공유드립니다
				</p>
			</div>
		</section>
	);
};
