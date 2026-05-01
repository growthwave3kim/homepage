"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useReducer } from "react";
import { PROFESSIONS } from "@/data/professions";

const labels = PROFESSIONS.map((p) => p.label);
const INTERVAL = 1800;

export default function ProfessionRotator() {
	const [index, tick] = useReducer((i: number) => (i + 1) % labels.length, 0);

	useEffect(() => {
		const id = setInterval(tick, INTERVAL);
		return () => clearInterval(id);
	}, []);

	return (
		<section className="bg-gradient-to-b from-white via-slate-50 to-white px-4 py-28">
			<div className="mx-auto max-w-5xl text-center">
				{/* 헤드라인 */}
				<div className="mb-6 flex flex-col items-center gap-0">
					<p className="mb-4 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Specialized
					</p>
					<h2 className="font-extrabold text-[56px] leading-[1.05] tracking-tight text-foreground md:text-[80px]">
						오직 <span className="text-[#7c3aed]">[</span>
						<span className="inline-block min-w-[3ch] text-center">
							<AnimatePresence mode="popLayout" initial={false}>
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
						</span>
						<span className="text-[#7c3aed]">]</span>를 위해
					</h2>
					<h2 className="font-extrabold text-[56px] leading-[1.05] tracking-tight text-foreground md:text-[80px]">
						만들어졌습니다.
					</h2>
				</div>

				{/* 서브 */}
				<p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl">
					6개 직군, 광고 규정 데이터. 전문직만 다루는 단 하나의 팀.
				</p>

				{/* 진행바 */}
				<div className="mx-auto h-[3px] w-24 overflow-hidden rounded-full bg-slate-200">
					<motion.div
						key={index}
						className="h-full bg-[#7c3aed]"
						initial={{ width: "0%" }}
						animate={{ width: "100%" }}
						transition={{ duration: INTERVAL / 1000, ease: "linear" }}
					/>
				</div>

				{/* 직군 dot 인디케이터 */}
				<div className="mt-6 flex items-center justify-center gap-2">
					{labels.map((label, i) => (
						<div
							key={label}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === index ? "w-6 bg-[#7c3aed]" : "w-1.5 bg-slate-300"
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
