"use client";

import { motion } from "motion/react";
import Link from "next/link";
import WaveDivider from "@/components/shared/WaveDivider";
import { PROFESSIONS } from "@/data/professions";

function BlobShape({ className, delay = 0 }: { className: string; delay?: number }) {
	return (
		<motion.div
			className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
			animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
			transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay }}
			aria-hidden="true"
		/>
	);
}

export default function Hero() {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-20">
			{/* Blobs */}
			<BlobShape className="top-[-5%] right-[-10%] h-[500px] w-[500px] bg-[#7c3aed]/10" delay={0} />
			<BlobShape
				className="bottom-[-5%] left-[-10%] h-[450px] w-[450px] bg-[#1e3a8a]/10"
				delay={3}
			/>

			<div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center">
				{/* Eyebrow */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]"
				>
					전문직 마케팅 전문
				</motion.p>

				{/* Headline — 2-tier hierarchy: setup(muted·small) → punchline(gradient·large) */}
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 leading-[1.12] tracking-tight"
				>
					<span className="block font-semibold text-[36px] text-slate-400 md:text-[44px] lg:text-[52px]">
						일반 광고로는
					</span>
					<span className="gradient-text font-bold text-[52px] md:text-[68px] lg:text-[80px]">
						의뢰가 잘 늘지 않습니다.
					</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 text-pretty text-lg text-muted-foreground leading-relaxed md:text-xl"
				>
					전문직은 검색 의도와 신뢰 누적이 다릅니다.
					<br className="hidden sm:block" />
					6개 직군의 광고 규정을 이해하고 콘텐츠를 설계합니다.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
				>
					<Link
						href="/contact"
						className="gradient-brand rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90"
					>
						무료 상담 신청
					</Link>
					<Link
						href="/services/professional"
						className="rounded-full border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
					>
						어떻게 다른가요
					</Link>
				</motion.div>

				{/* 직군 pill row */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.45 }}
					className="mt-6 flex flex-wrap items-center justify-center gap-2"
				>
					{PROFESSIONS.map((p) => (
						<span
							key={p.slug}
							className="rounded-full bg-slate-100 px-3 py-1 font-medium text-[12px] text-slate-500"
						>
							{p.label}
						</span>
					))}
				</motion.div>

				{/* Trust copy */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.55 }}
					className="mt-5 text-[11px] text-slate-400 tracking-wide"
				>
					첫 상담 무료 · 계약 압박 없음 · 영업일 1일 내 회신
				</motion.p>
			</div>

			{/* Wave bottom */}
			<div className="absolute right-0 bottom-0 left-0">
				<WaveDivider fillColor="#f8fafc" height={64} />
			</div>
		</section>
	);
}
