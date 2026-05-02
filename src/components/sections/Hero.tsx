"use client";

import { motion } from "motion/react";
import Link from "next/link";
import WaveDivider from "@/components/shared/WaveDivider";

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
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16 md:pt-20">
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

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 leading-[1.2] tracking-tight md:leading-[1.12]"
				>
					<span className="gradient-text font-bold text-[40px] sm:text-[52px] md:text-[68px] lg:text-[80px]">
						전문직 마케팅은
						<br />
						달라야합니다.
					</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 text-pretty text-lg text-muted-foreground leading-relaxed md:text-xl"
				>
					읽히는 블로그와 터지는 숏폼, 저희가 가장 잘 만듭니다.
				</motion.p>

				{/* CTAs */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-col items-center gap-3"
				>
					<div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
						<Link
							href="/services/blog"
							className="gradient-brand rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90"
						>
							읽히는 블로그란?
						</Link>
						<Link
							href="/services/shortform"
							className="rounded-full border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
						>
							터지는 숏폼이란?
						</Link>
					</div>
					<Link
						href="/contact"
						className="rounded-full border border-slate-200 px-8 py-3 font-medium text-slate-500 text-sm transition-colors hover:border-slate-300 hover:text-foreground"
					>
						단 3줄로 상담하기
					</Link>
				</motion.div>

				{/* Trust copy */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.55 }}
					className="mt-8 text-[11px] text-slate-400 tracking-wide"
				>
					24시간 안으로 답변드립니다.
				</motion.p>
			</div>

			{/* Wave bottom */}
			<div className="absolute right-0 bottom-0 left-0">
				<WaveDivider fillColor="#f8fafc" height={64} />
			</div>
		</section>
	);
}
