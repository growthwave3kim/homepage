"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_GRID } from "@/data/case-grid";

// SVG 미니 막대 차트 상수
const CHART_BOTTOM = 44;
const MAX_BAR_H = 36;
const BAR_W = 26;

type BarChartProps = {
	before: number;
	after: number;
	inView: boolean;
	delay: number;
};

const MiniBarChart = ({ before, after, inView, delay }: BarChartProps) => {
	const beforeH = Math.round((before / after) * MAX_BAR_H);
	const afterH = MAX_BAR_H;

	return (
		<svg viewBox="0 0 80 54" className="w-20" aria-hidden="true">
			{/* 기준선 */}
			<line x1="4" y1={CHART_BOTTOM} x2="76" y2={CHART_BOTTOM} stroke="#e2e8f0" strokeWidth="1" />

			{/* 이전 막대 (회색) */}
			<motion.rect
				x={8}
				y={CHART_BOTTOM - beforeH}
				width={BAR_W}
				height={beforeH}
				rx="3"
				fill="#e2e8f0"
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.6, delay, ease: "easeOut" }}
			/>

			{/* 이후 막대 (보라) */}
			<motion.rect
				x={46}
				y={CHART_BOTTOM - afterH}
				width={BAR_W}
				height={afterH}
				rx="3"
				fill="#7c3aed"
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.8, delay: delay + 0.15, ease: "easeOut" }}
			/>

			{/* 라벨 */}
			<text x={21} y={52} textAnchor="middle" fontSize="8" fill="#94a3b8">
				전
			</text>
			<text x={59} y={52} textAnchor="middle" fontSize="8" fill="#7c3aed">
				후
			</text>
		</svg>
	);
};

export const CaseGrid = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const inView = useInView(sectionRef, { once: true, margin: "-80px" });

	return (
		<section className="bg-white py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* 헤더 */}
				<Reveal className="mb-12">
					<p className="mb-3 font-medium text-[#7c3aed] text-sm">운영 사례</p>
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
						6개월이면 달라집니다.
					</h2>
					<p className="mt-4 break-keep text-base text-slate-500 md:text-lg">
						직군별 실제 운영 데이터입니다. 숫자는 가상이며 실데이터로 교체 예정입니다.
					</p>
				</Reveal>

				{/* 카드 그리드 */}
				<div ref={sectionRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{CASE_GRID.map((item, i) => (
						<Reveal key={item.id} delay={i * 0.08} direction="up">
							<div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
								{/* 미니 막대 차트 */}
								<div className="mb-4">
									<MiniBarChart
										before={item.before}
										after={item.after}
										inView={inView}
										delay={i * 0.1}
									/>
								</div>

								{/* 분야 + 기간 */}
								<p className="mb-2 font-mono text-[10px] text-slate-400 tracking-[0.2em]">
									{item.field} · {item.duration}
								</p>

								{/* 지표 라벨 */}
								<p className="mb-3 break-keep font-medium text-[#0a0a0a] text-sm">
									{item.metricLabel}
								</p>

								{/* 비포 → 애프터 */}
								<div className="mb-2 flex items-end gap-2">
									<span className="font-bold text-2xl text-[#7c3aed]">
										{item.after}
										{item.unit}
									</span>
									<span className="mb-0.5 text-slate-400 text-xs line-through">
										{item.before}
										{item.unit}
									</span>
								</div>

								{/* 배수 */}
								<p className="mb-4 font-extrabold text-[#7c3aed] text-lg">{item.multiplier} 증가</p>

								{/* 인용 */}
								<p className="mt-auto break-keep text-slate-500 text-xs leading-relaxed">
									&ldquo;{item.quote}&rdquo;
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
