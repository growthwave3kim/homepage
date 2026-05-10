"use client";

import { motion } from "motion/react";

export const Hero = () => {
	return (
		<section className="relative flex min-h-[520px] items-center justify-center overflow-hidden bg-white pt-16 md:min-h-screen md:pt-20">
			{/* Background video (converted from GIF for performance) */}
			<video
				autoPlay
				muted
				loop
				playsInline
				poster="/hero-bg-poster.jpg"
				tabIndex={-1}
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover"
			>
				<source src="/hero-bg.webm" type="video/webm" />
				<source src="/hero-bg.mp4" type="video/mp4" />
			</video>
			{/* Readability overlay */}
			<div
				className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/40 via-white/65 to-white/45"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
				{/* Eyebrow */}
				<motion.p
					initial={{ y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]"
				>
					고객이 먼저 찾아옵니다
				</motion.p>

				{/* Headline */}
				<motion.h1
					initial={{ y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 leading-[1.2] tracking-tight md:leading-[1.12]"
				>
					<span className="font-bold text-[#0a0a0a] text-[32px] tracking-[-0.04em] sm:text-[44px] md:text-[68px] lg:text-[80px]">
						전문직 마케팅은
						<br />
						<span className="gradient-text">달라야</span> 합니다
					</span>
				</motion.h1>

				{/* Sub */}
				<motion.p
					initial={{ y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 text-pretty font-medium text-lg text-slate-800 leading-relaxed md:text-xl"
				>
					상담 문의가 늘고, 광고 걱정이 사라집니다
				</motion.p>
			</div>
		</section>
	);
};
