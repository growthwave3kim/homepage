"use client";

import { motion } from "motion/react";

const PROOF_ITEMS = ["누적 200+ 콘텐츠", "재계약율 90%+", "의료광고 심의 통과 100%"] as const;

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-16 md:pt-20">
			{/* Background video */}
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

			{/* Overlay — 이전보다 진하게 (가독성) */}
			<div
				className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/75 via-white/80 to-white/70"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center md:py-24">
				{/* Eyebrow — 자격 증명 */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
					className="mb-5 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]"
				>
					전문직 12개 직군 · 광고 위반 0건
				</motion.p>

				{/* Headline — 현 상태 유지, 모바일 사이즈 정비 */}
				<motion.h1
					initial={{ opacity: 0, y: 28 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
					className="mb-6 font-bold text-[#0a0a0a] text-[38px] leading-[1.15] tracking-[-0.03em] sm:text-[52px] md:text-[72px] md:leading-[1.1] lg:text-[88px]"
				>
					전문직 마케팅은
					<br />
					<span className="gradient-text">달라야</span> 합니다
				</motion.h1>

				{/* Sub — 단언형으로 교체 */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
					className="mb-10 font-medium text-lg text-slate-700 leading-relaxed md:text-2xl"
				>
					고객이 먼저 찾아옵니다
				</motion.p>

				{/* Proof strip */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
					className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
				>
					{PROOF_ITEMS.map((item, i) => (
						<span key={item} className="flex items-center gap-3">
							<span className="font-mono text-[11px] text-slate-500 tracking-[0.15em]">{item}</span>
							{i < PROOF_ITEMS.length - 1 && (
								<span
									className="inline-block h-1 w-1 rounded-full bg-slate-300"
									aria-hidden="true"
								/>
							)}
						</span>
					))}
				</motion.div>
			</div>
		</section>
	);
};
