"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden">
			{/* 배경 이미지 — 실제 사진으로 교체 시 아래 div를 <Image fill> 로 변경 */}
			<div className="absolute inset-0 bg-slate-800">
				{/*
					import Image from "next/image";
					<Image
						src="/images/about-hero.jpg"
						alt="그로스웨이브 팀"
						fill
						className="object-cover object-center"
						priority
					/>
				*/}
			</div>

			{/* 대각선 보라 오버레이 (isanghan 대각 분할 패턴) */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background: "linear-gradient(135deg, #3b0764 0%, #6d28d9 60%, #7c3aed 100%)",
					clipPath: "polygon(0 0, 62% 0, 44% 100%, 0 100%)",
				}}
			/>

			{/* 우측 어두운 오버레이 — 사진 위 가독성 */}
			<div className="pointer-events-none absolute inset-0 bg-black/40" />

			{/* 콘텐츠 */}
			<div className="relative z-10 mx-auto w-full max-w-6xl px-8 py-32 md:px-12">
				<div className="max-w-xl">
					<motion.p
						className="mb-6 font-semibold text-white/70 text-sm uppercase tracking-[0.5em]"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease }}
					>
						회 사 소 개
					</motion.p>

					<motion.h1
						className="mb-8 font-bold text-[52px] leading-[1.08] tracking-tight text-white md:text-[72px] lg:text-[88px]"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75, delay: 0.1, ease }}
					>
						규정을 모르면,
						<br />
						<span className="gradient-text">마케팅이</span>
						<br />
						아닙니다.
					</motion.h1>

					<motion.p
						className="mb-10 max-w-sm break-keep text-lg text-white/75 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.2, ease }}
					>
						대부분의 대행사는 변호사법·의료법·세무사법을 검토하지 않습니다.
						<br />
						8년간 그걸 처음부터 당연한 일로 했습니다.
					</motion.p>

					<motion.p
						className="font-mono text-white/40 text-xs tracking-[0.2em]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3, ease }}
					>
						전문직 12개 직군 · 광고 위반 0건 · 재계약율 90%+
					</motion.p>
				</div>
			</div>

			{/* 스크롤 인디케이터 */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white/90"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.8, ease }}
				aria-label="아래로 스크롤"
			>
				<motion.div
					className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
					animate={{ y: [0, 5, 0] }}
					transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
				>
					<ChevronDown className="h-5 w-5" />
				</motion.div>
				<span className="font-semibold text-xs tracking-[0.15em]">더 알아보기</span>
			</motion.button>
		</section>
	);
};
