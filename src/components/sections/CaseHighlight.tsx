"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { CASE_GRID } from "@/data/case-grid";
import { CASE_HIGHLIGHT } from "@/data/case-highlight";

const SUPPORT_CASES = [CASE_GRID[1], CASE_GRID[3]] as const;

// ── CountUp ───────────────────────────────────────────────────
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

// ── adresult 스타일 임팩트 막대 차트 ─────────────────────────
// SVG 좌표 (viewBox 360 × 220)
const BC = {
	W: 360,
	H: 220,
	PL: 8,
	PR: 8,
	PT: 56, // 상단 annotation 공간
	PB: 36, // X축 라벨 공간
	BAR_W: 108,
	BAR_MAX_H: 120,
} as const;

const BC_CW = BC.W - BC.PL - BC.PR; // 344
const BC_Y_BASE = BC.PT + (BC.H - BC.PT - BC.PB); // 184
const BC_GAP = (BC_CW - 2 * BC.BAR_W) / 3; // ~42.7
const BC_LEFT_X = Math.round(BC.PL + BC_GAP); // ~51
const BC_RIGHT_X = Math.round(BC.PL + BC_GAP + BC.BAR_W + BC_GAP); // ~201
const BC_LEFT_CX = BC_LEFT_X + BC.BAR_W / 2; // ~105
const BC_RIGHT_CX = BC_RIGHT_X + BC.BAR_W / 2; // ~255

type ImpactBarProps = {
	before: number;
	after: number;
	unit: string;
	multiplier: string;
	gradId: string;
	inView: boolean;
	delay?: number;
};

const ImpactBar = ({
	before,
	after,
	unit,
	multiplier,
	gradId,
	inView,
	delay = 0,
}: ImpactBarProps) => {
	const beforeH = Math.max(10, Math.round((before / after) * BC.BAR_MAX_H));
	const afterH = BC.BAR_MAX_H;
	const afterTopY = BC_Y_BASE - afterH;

	return (
		<svg viewBox={`0 0 ${BC.W} ${BC.H}`} className="w-full" aria-hidden="true">
			<defs>
				<linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#7c3aed" />
					<stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.85" />
				</linearGradient>
			</defs>

			{/* 50% 그리드 */}
			<line
				x1={BC.PL}
				y1={BC_Y_BASE - BC.BAR_MAX_H / 2}
				x2={BC.W - BC.PR}
				y2={BC_Y_BASE - BC.BAR_MAX_H / 2}
				stroke="#f1f5f9"
				strokeWidth="1"
			/>

			{/* 기준선 */}
			<line
				x1={BC.PL}
				y1={BC_Y_BASE}
				x2={BC.W - BC.PR}
				y2={BC_Y_BASE}
				stroke="#e2e8f0"
				strokeWidth="1.5"
			/>

			{/* ── Annotation: "N배 증가!" ── */}
			<motion.g
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: delay + 1.0, duration: 0.35 }}
			>
				<motion.text
					x={BC_RIGHT_CX}
					y={28}
					textAnchor="middle"
					fontSize="24"
					fontWeight="800"
					fill="#7c3aed"
					style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }}
					animate={inView ? { scale: [1, 1.18, 0.94, 1.08, 1], opacity: [1, 1, 1, 0.45, 1] } : {}}
					transition={{
						delay: delay + 1.35,
						duration: 2.0,
						times: [0, 0.22, 0.52, 0.76, 1.0],
						repeat: Number.POSITIVE_INFINITY,
						repeatDelay: 1.8,
					}}
				>
					{multiplier} 증가!
				</motion.text>
			</motion.g>

			{/* Before bar (회색) */}
			<motion.rect
				x={BC_LEFT_X}
				y={BC_Y_BASE - beforeH}
				width={BC.BAR_W}
				height={beforeH}
				rx="5"
				fill="#e2e8f0"
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.6, delay, ease: "easeOut" }}
			/>
			{/* Before 값 (막대 위) */}
			<motion.text
				x={BC_LEFT_CX}
				y={BC_Y_BASE - beforeH - 7}
				textAnchor="middle"
				fontSize="15"
				fontWeight="700"
				fill="#94a3b8"
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: delay + 0.55 }}
			>
				{before}
				{unit}
			</motion.text>

			{/* After bar (보라 그라디언트) */}
			<motion.rect
				x={BC_RIGHT_X}
				y={afterTopY}
				width={BC.BAR_W}
				height={afterH}
				rx="5"
				fill={`url(#${gradId})`}
				style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
				initial={{ scaleY: 0 }}
				animate={inView ? { scaleY: 1 } : {}}
				transition={{ duration: 0.95, delay: delay + 0.1, ease: "easeOut" }}
			/>
			{/* After 값 (막대 안, 흰색) */}
			<motion.g
				initial={{ opacity: 0 }}
				animate={inView ? { opacity: 1 } : {}}
				transition={{ delay: delay + 0.85, duration: 0.3 }}
			>
				<motion.text
					x={BC_RIGHT_CX}
					y={afterTopY + 30}
					textAnchor="middle"
					fontSize="22"
					fontWeight="800"
					fill="white"
					animate={inView ? { opacity: [1, 0.38, 1] } : {}}
					transition={{
						delay: delay + 1.35,
						duration: 1.3,
						repeat: Number.POSITIVE_INFINITY,
						repeatDelay: 2.3,
					}}
				>
					{after}
					{unit}
				</motion.text>
			</motion.g>

			{/* X축 라벨 */}
			<text x={BC_LEFT_CX} y={BC_Y_BASE + 18} textAnchor="middle" fontSize="11" fill="#94a3b8">
				시작 전
			</text>
			<text
				x={BC_RIGHT_CX}
				y={BC_Y_BASE + 18}
				textAnchor="middle"
				fontSize="11"
				fontWeight="600"
				fill="#7c3aed"
			>
				6개월 후
			</text>
		</svg>
	);
};

// ── 메인 컴포넌트 ─────────────────────────────────────────────
export const CaseHighlight = () => {
	const featuredRef = useRef<HTMLDivElement>(null);
	const featuredInView = useInView(featuredRef, { once: true, margin: "-60px" });

	const cardsRef = useRef<HTMLDivElement>(null);
	const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

	return (
		<section className="bg-slate-50 py-20 md:py-28">
			<div className="mx-auto max-w-6xl px-4 md:px-8">
				{/* 섹션 헤더 */}
				<Reveal className="mb-12">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						성공 사례
					</p>
					<h2 className="break-keep font-bold text-4xl text-[#0a0a0a] tracking-tight md:text-5xl">
						직군별 실제 운영 결과입니다.
					</h2>
				</Reveal>

				{/* ── 사례 1. K 법무법인 ── */}
				<Reveal className="mb-4">
					<div className="flex items-center gap-2">
						<span className="font-bold text-slate-800 text-sm">사례 1.</span>
						<span className="font-medium text-slate-500 text-sm">K 법무법인</span>
					</div>
				</Reveal>

				<div className="mb-14 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
					{/* 좌측: 임팩트 막대 차트 */}
					<Reveal direction="left" className="md:col-span-7">
						<div
							ref={featuredRef}
							className="overflow-hidden rounded-2xl bg-white p-6 shadow-[0_2px_32px_rgba(15,23,42,0.06)] md:p-8"
						>
							<p className="mb-4 font-semibold text-[#0a0a0a] text-sm">월 상담 건수 (6개월)</p>
							<ImpactBar
								before={CASE_HIGHLIGHT.beforeValue}
								after={CASE_HIGHLIGHT.afterValue}
								unit={CASE_HIGHLIGHT.afterUnit}
								multiplier={`${CASE_HIGHLIGHT.multiplier}배`}
								gradId="grad-case1"
								inView={featuredInView}
							/>
						</div>
					</Reveal>

					{/* 우측: 텍스트 */}
					<Reveal delay={0.2} direction="right" className="md:col-span-5">
						<p className="mb-3 break-keep font-medium text-[#7c3aed] text-sm">
							{CASE_HIGHLIGHT.eyebrow}
						</p>

						<h3 className="mb-6 break-keep font-bold text-2xl text-[#0a0a0a] leading-snug tracking-tight md:text-3xl">
							광고비 줄이는 동안,
							<br />
							상담은{" "}
							<span className="gradient-text text-4xl md:text-5xl">
								<CountUp to={CASE_HIGHLIGHT.multiplier} />배
							</span>{" "}
							늘었습니다
						</h3>

						{/* 광고비 절감 배지 */}
						<div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
							<p className="font-mono text-[10px] text-emerald-700 tracking-[0.15em]">
								광고비 절감율
							</p>
							<p className="font-extrabold text-3xl text-emerald-600">
								{CASE_HIGHLIGHT.adSavingPct}
								<span className="ml-1 font-semibold text-xl">% 절감</span>
							</p>
						</div>

						<blockquote className="border-[#7c3aed]/30 border-l-2 pl-4">
							<p className="break-keep text-slate-700 text-sm leading-relaxed md:text-base">
								&ldquo;{CASE_HIGHLIGHT.quote}&rdquo;
							</p>
							<footer className="mt-2 font-mono text-slate-600 text-xs">
								— {CASE_HIGHLIGHT.quoteAuthor}
							</footer>
						</blockquote>
					</Reveal>
				</div>

				{/* ── 사례 2·3 — 막대 차트 카드 ── */}
				<div ref={cardsRef} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
					{SUPPORT_CASES.map((item, i) => (
						<Reveal key={item.id} delay={i * 0.12} direction="up">
							<div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
								{/* 사례 번호 */}
								<div className="mb-4 flex items-center gap-2">
									<span className="font-bold text-slate-800 text-sm">사례 {i + 2}.</span>
									<span className="font-medium text-slate-600 text-sm">{item.field}</span>
									<span className="ml-auto font-mono text-[10px] text-slate-500">
										{item.duration}
									</span>
								</div>

								{/* 막대 차트 */}
								<ImpactBar
									before={item.before}
									after={item.after}
									unit={item.unit}
									multiplier={item.multiplier}
									gradId={`grad-case${i + 2}`}
									inView={cardsInView}
									delay={i * 0.15}
								/>

								<div className="mt-3">
									<p className="mb-0.5 font-medium text-slate-700 text-sm">{item.metricLabel}</p>
									<p className="font-bold text-[#7c3aed] text-lg">{item.multiplier} 증가</p>
								</div>

								<p className="mt-4 break-keep text-slate-600 text-sm leading-relaxed">
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
