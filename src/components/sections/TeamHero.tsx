"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/data/team";

type MemberCardMeta = {
	nameKo: string;
	roleLabel: string;
	photo?: string;
	accentBar: string;
	rotate: number;
	z: number;
	mt: string;
	delay: number;
};

// TEAM_MEMBERS 순서: 김태훈(0) → 김성민(1) → 김도현(2)
const MEMBER_CARDS: MemberCardMeta[] = [
	{
		nameKo: TEAM_MEMBERS[0].nameKo,
		roleLabel: "FOUNDER",
		photo: TEAM_MEMBERS[0].photo,
		accentBar: "bg-[#a78bfa]",
		rotate: -6,
		z: 1,
		mt: "mt-5",
		delay: 0.35,
	},
	{
		nameKo: TEAM_MEMBERS[1].nameKo,
		roleLabel: "CONTENT LEAD",
		photo: TEAM_MEMBERS[1].photo,
		accentBar: "bg-cyan-400/80",
		rotate: 0,
		z: 10,
		mt: "mt-0",
		delay: 0.2,
	},
	{
		nameKo: TEAM_MEMBERS[2].nameKo,
		roleLabel: "PERFORMANCE",
		photo: TEAM_MEMBERS[2].photo,
		accentBar: "bg-emerald-400/80",
		rotate: 5,
		z: 1,
		mt: "mt-3",
		delay: 0.5,
	},
];

const STATS = [
	{ value: "3명", label: "인하우스" },
	{ value: "12개", label: "직군" },
	{ value: "0건", label: "위반" },
] as const;

export const TeamHero = () => {
	const scrollDown = () => {
		window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
	};

	return (
		<section className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0e2e] px-6 py-24 md:px-10 md:py-32">
			{/* 배경 grid pattern */}
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.06]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
					backgroundSize: "56px 56px",
					maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
					WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
				}}
			/>
			{/* 우상단 orb */}
			<motion.div
				className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#7c3aed] opacity-[0.14] blur-[140px]"
				style={{ top: "-120px", right: "-120px" }}
				animate={{ x: [0, -40, 20, 0], y: [0, 50, -20, 0] }}
				transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>
			{/* 좌하단 orb */}
			<motion.div
				className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-[#4f46e5] opacity-[0.08] blur-[100px]"
				style={{ bottom: "-80px", left: "-60px" }}
				animate={{ x: [0, 30, -20, 0], y: [0, -30, 20, 0] }}
				transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
			/>

			<div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
				{/* 좌측 텍스트 */}
				<div>
					<motion.p
						className="mb-5 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Our Team
					</motion.p>
					<motion.h1
						className="mb-5 font-bold text-[34px] text-white leading-[1.1] tracking-tight sm:text-[42px] md:text-[52px] lg:text-[58px]"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						직접 <span className="gradient-text">검수</span>하는 팀이
						<br />
						발행까지 책임집니다.
					</motion.h1>
					<motion.p
						className="mb-10 max-w-sm break-keep text-base text-white/80 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						규정·전략·기획·발행을 한 팀이 끝까지 가져갑니다.
					</motion.p>

					{/* 신뢰 지표 스트립 */}
					<motion.div
						className="flex items-center gap-6"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						{STATS.map((s, i) => (
							<div key={s.label} className="flex items-center gap-6">
								<div>
									<p className="font-bold text-xl text-white leading-none">{s.value}</p>
									<p className="mt-0.5 font-mono text-white/70 text-xs tracking-[0.12em]">
										{s.label}
									</p>
								</div>
								{i < STATS.length - 1 && <div className="h-8 w-px bg-white/15" />}
							</div>
						))}
					</motion.div>
				</div>

				{/* 우측 멤버 카드 stack */}
				<div className="flex items-end justify-center py-8">
					<div className="flex items-end">
						{MEMBER_CARDS.map((card, i) => (
							<motion.div
								key={card.nameKo}
								className={`relative w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-[0_24px_64px_rgba(0,0,0,0.6)] sm:w-36 md:w-40 ${
									i === 0 ? "" : "-ml-4 sm:-ml-5 md:-ml-6"
								} ${card.mt}`}
								style={{
									zIndex: card.z,
									rotate: card.rotate,
								}}
								initial={{ opacity: 0, y: 70, rotate: card.rotate }}
								animate={{ opacity: 1, y: 0, rotate: card.rotate }}
								transition={{
									delay: card.delay,
									duration: 0.65,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								{/* 상단 컬러 accent bar */}
								<div className={`h-1 w-full ${card.accentBar}`} />

								{/* 멤버 사진 */}
								{card.photo && (
									<div className="relative aspect-[3/4] w-full overflow-hidden">
										<Image
											src={card.photo}
											alt={card.nameKo}
											fill
											sizes="176px"
											className="object-cover object-top grayscale-[0.15]"
										/>
									</div>
								)}

								{/* 하단 정보 */}
								<div className="border-t border-white/[0.07] px-4 py-3">
									<p className="font-bold text-sm text-white">{card.nameKo}</p>
									<p className="mt-1 font-mono text-[10px] text-white/70 tracking-[0.12em]">
										{card.roleLabel}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* 더 알아보기 */}
			<motion.button
				type="button"
				onClick={scrollDown}
				className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white/95"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.9 }}
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
