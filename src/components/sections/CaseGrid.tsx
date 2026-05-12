"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_GRID } from "@/data/case-grid";

const BC = {
	VW: 280,
	VH: 160,
	BAR_W: 76,
	MAX_H: 96,
	BOTTOM: 130,
	LEFT_X: 48,
	RIGHT_X: 156,
} as const;

const LEFT_CX = BC.LEFT_X + BC.BAR_W / 2;
const RIGHT_CX = BC.RIGHT_X + BC.BAR_W / 2;

type CardBarChartProps = {
	before: number;
	after: number;
	unit: string;
	multiplier: string;
	gradId: string;
	inView: boolean;
	delay?: number;
};

const CardBarChart = ({
	before,
	after,
	unit,
	multiplier,
	gradId,
	inView,
	delay = 0,
}: CardBarChartProps) => {
	const beforeH = Math.max(10, Math.round((before / after) * BC.MAX_H));
	const afterTopY = BC.BOTTOM - BC.MAX_H;

	return (
		<svg viewBox={`0 0 ${BC.VW} ${BC.VH}`} className="w-full" aria-hidden="true">
			<defs>
				<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#7c3aed" />
					<stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.88" />
				</linearGradient>
			</defs>

			{/* 50% 그리드 */}
			<line
				x1={BC.LEFT_X - 8}
				y1={BC.BOTTOM - BC.MAX_H / 2}
				x2={BC.RIGHT_X + BC.BAR_W + 8}
				y2={BC.BOTTOM - BC.MAX_H / 2}
				stroke="#f1f5f9"
				strokeWidth="1"
			/>

			{/* 기준선 */}
			<line
				x1={BC.LEFT_X - 8}
				y1={BC.BOTTOM}
				x2={BC.RIGHT_X + BC.BAR_W + 8}
				y2={BC.BOTTOM}
				stroke="#e2e8f0"
				strokeWidth="1.5"
			/>

			{/* Before bar */}
			<motion.rect
				x={BC.LEFT_X}
				y={BC.BOTTOM - beforeH}
				width={BC.BAR_W}
				height={beforeH}
				rx="5"
				fill="#e2e8f0"
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.6, delay, ease: "easeOut" }}
			/>
			{/* Before 값 */}
			<motion.text
				x={LEFT_CX}
				y={BC.BOTTOM - beforeH - 7}
				textAnchor="middle"
				fontSize="14"
				fontWeight="700"
				fill="#64748b"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: delay + 0.55 }}
			>
				{before}
				{unit}
			</motion.text>

			{/* After bar */}
			<motion.rect
				x={BC.RIGHT_X}
				y={afterTopY}
				width={BC.BAR_W}
				height={BC.MAX_H}
				rx="5"
				fill={`url(#${gradId})`}
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.9, delay: delay + 0.1, ease: "easeOut" }}
			/>
			{/* After 값 + 배수 (바 안) */}
			<motion.g
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: delay + 0.8 }}
			>
				<text
					x={RIGHT_CX}
					y={afterTopY + 38}
					textAnchor="middle"
					fontSize="22"
					fontWeight="800"
					fill="white"
				>
					{after}
					{unit}
				</text>
				<text
					x={RIGHT_CX}
					y={afterTopY + 62}
					textAnchor="middle"
					fontSize="12"
					fontWeight="700"
					fill="rgba(255,255,255,0.92)"
				>
					{multiplier} 증가
				</text>
			</motion.g>

			{/* X축 라벨 */}
			<text
				x={LEFT_CX}
				y={BC.BOTTOM + 18}
				textAnchor="middle"
				fontSize="11"
				fontWeight="600"
				fill="#64748b"
			>
				시작 전
			</text>
			<text
				x={RIGHT_CX}
				y={BC.BOTTOM + 18}
				textAnchor="middle"
				fontSize="11"
				fontWeight="700"
				fill="#7c3aed"
			>
				6개월 후
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
				<Reveal className="mb-12">
					<p className="mb-3 font-medium text-[#7c3aed] text-sm">운영 사례</p>
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
						6개월이면 달라집니다.
					</h2>
					<p className="mt-4 break-keep text-base text-slate-500 md:text-lg">
						직군별 실제 운영 데이터입니다. 숫자는 가상이며 실데이터로 교체 예정입니다.
					</p>
				</Reveal>

				<div ref={sectionRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{CASE_GRID.map((item, i) => (
						<Reveal key={item.id} delay={i * 0.08} direction="up">
							<div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
								{/* 차트 — 카드 전체 너비 */}
								<div className="bg-[#faf8ff] px-5 pt-6 pb-3">
									<CardBarChart
										before={item.before}
										after={item.after}
										unit={item.unit}
										multiplier={item.multiplier}
										gradId={`cg-${item.id}`}
										inView={inView}
										delay={i * 0.1}
									/>
								</div>

								{/* 텍스트 */}
								<div className="flex flex-1 flex-col p-5">
									<p className="mb-1.5 font-mono text-[10px] text-slate-400 tracking-[0.2em]">
										{item.field} · {item.duration}
									</p>
									<p className="mb-4 break-keep font-medium text-[#0a0a0a] text-sm">
										{item.metricLabel}
									</p>
									<p className="mt-auto break-keep text-slate-500 text-xs leading-relaxed">
										&ldquo;{item.quote}&rdquo;
									</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
