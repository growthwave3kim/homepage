"use client";

import { motion } from "motion/react";
import WaveDivider from "@/components/shared/WaveDivider";

function BlobShape({ className, delay = 0 }: { className: string; delay?: number }) {
	return (
		<motion.div
			className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
			animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
			transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay }}
			aria-hidden="true"
		/>
	);
}

function handleAnchorClick(href: string) {
	const el = document.querySelector(href);
	if (el) el.scrollIntoView({ behavior: "smooth" });
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
					변호사·법무법인 전문 마케팅
				</motion.p>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 font-bold text-[52px] text-foreground leading-[1.12] tracking-tight md:text-[68px] lg:text-[80px]"
				>
					변호사를 위한,
					<br />
					<span className="gradient-text">변호사만의 마케팅</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl"
				>
					법무법인에 특화된 콘텐츠 마케팅으로
					<br className="hidden sm:block" />
					사건 수임을 만듭니다.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
				>
					<button
						type="button"
						onClick={() => handleAnchorClick("#contact")}
						className="gradient-brand rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90"
					>
						무료 상담 신청
					</button>
					<button
						type="button"
						onClick={() => handleAnchorClick("#services")}
						className="rounded-full border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
					>
						서비스 보기
					</button>
				</motion.div>
			</div>

			{/* Wave bottom */}
			<div className="absolute right-0 bottom-0 left-0">
				<WaveDivider fillColor="#f8fafc" height={64} />
			</div>
		</section>
	);
}
