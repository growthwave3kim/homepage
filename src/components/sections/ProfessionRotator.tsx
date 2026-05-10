"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useReducer } from "react";
import { PROFESSIONS } from "@/data/professions";

const labels = PROFESSIONS.map((p) => p.label);
const INTERVAL = 2400;

export const ProfessionRotator = () => {
	const [index, tick] = useReducer((i: number) => (i + 1) % labels.length, 0);
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) return;
		const id = setInterval(tick, INTERVAL);
		return () => clearInterval(id);
	}, [prefersReducedMotion]);

	return (
		<section className="bg-slate-50 px-4 py-28 md:py-36">
			<div className="mx-auto max-w-6xl text-center">
				{/* 헤드라인 */}
				<div className="mb-6 flex flex-col items-center gap-2">
					<p className="mb-4 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Specialized
					</p>
					<h2 className="font-extrabold text-[26px] text-foreground leading-[1.15] tracking-tight sm:text-[36px] md:text-[52px] lg:text-[68px]">
						오직 <span className="text-[#7c3aed]/30">[</span>
						<AnimatePresence mode="wait" initial={false}>
							<motion.span
								key={labels[index]}
								initial={{ y: 24, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -24, opacity: 0 }}
								transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
								className="gradient-text inline-block"
							>
								{labels[index]}
							</motion.span>
						</AnimatePresence>
						<span className="text-[#7c3aed]/30">]</span>를 위해
						<br />
						만들어졌습니다.
					</h2>
				</div>

				{/* 서브 */}
				<p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl">
					직군의 언어와 광고 규정 위에서 시작합니다.
				</p>
			</div>
		</section>
	);
};
