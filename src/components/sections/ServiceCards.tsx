"use client";

import { ArrowRight, BookOpen, Clapperboard, Users } from "lucide-react";
import { motion, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/shared/Reveal";
import { SERVICE_CARDS } from "@/data/service-cards";

const ICON_MAP: Record<string, React.ElementType> = {
	Users,
	BookOpen,
	Clapperboard,
};

type FlipCardProps = {
	children: React.ReactNode;
	delay: number;
};

const FlipCard = ({ children, delay }: FlipCardProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(ref, { once: false, margin: "-200px" });
	const prefersReducedMotion = useReducedMotion();
	const [{ visible, enteredDown }, setAnimState] = useState({
		visible: false,
		enteredDown: false,
	});

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			scrollDirRef.current = y > lastY ? "down" : "up";
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (isInView) {
			setAnimState({ visible: true, enteredDown: scrollDirRef.current === "down" });
		} else if (scrollDirRef.current === "up") {
			setAnimState({ visible: false, enteredDown: false });
		}
	}, [isInView]);

	const shouldAnimate = visible && enteredDown && !prefersReducedMotion;

	const initial = prefersReducedMotion ? { opacity: 0, rotateY: 0 } : { opacity: 0, rotateY: -90 };

	const animate = visible ? { opacity: 1, rotateY: 0 } : initial;

	const transition = shouldAnimate
		? { duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] as const }
		: { duration: 0, delay: 0 };

	return (
		<div style={{ perspective: "800px" }}>
			<motion.div
				ref={ref}
				initial={initial}
				animate={animate}
				transition={transition}
				style={{ transformOrigin: "center" }}
			>
				{children}
			</motion.div>
		</div>
	);
};

export const ServiceCards = () => {
	return (
		<section className="bg-[#F8FAFC] px-4 pt-20 pb-24 md:pb-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-14 text-center">
						<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
							전문직 마케팅 <span className="gradient-text">세 가지</span>면 끝납니다.
						</h2>
					</div>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{SERVICE_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? Users;
						return (
							<FlipCard key={card.href} delay={i * 0.12}>
								<Link
									href={card.href}
									className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/40 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]"
								>
									{/* 아이콘 */}
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#7c3aed]/[0.08] transition-colors group-hover:bg-[#7c3aed]/[0.14]">
										<Icon className="h-6 w-6 text-[#7c3aed]" aria-hidden="true" />
									</div>

									{/* Eyebrow */}
									<p className="mb-2 font-semibold text-[#a78bfa] text-xs uppercase tracking-widest">
										{card.eyebrow}
									</p>

									{/* 제목 */}
									<h3 className="mb-3 whitespace-pre-line font-bold text-foreground text-xl leading-snug tracking-tight">
										{card.title}
									</h3>

									{/* 설명 */}
									<p className="mb-6 flex-1 text-muted-foreground text-sm leading-relaxed">
										{card.description}
									</p>

									{/* KPI 배지 */}
									{card.kpi && (
										<div className="mb-5 inline-block self-start rounded-sm bg-[#7c3aed]/[0.08] px-3 py-1.5">
											<span className="font-semibold text-[#7c3aed] text-xs">{card.kpi}</span>
										</div>
									)}

									{/* CTA */}
									<span className="flex items-center gap-1.5 self-start border-current border-b pb-0.5 font-semibold text-[#0a0a0a] text-sm transition-opacity group-hover:opacity-70">
										{card.cta}
										<ArrowRight
											className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
											aria-hidden="true"
										/>
									</span>
								</Link>
							</FlipCard>
						);
					})}
				</div>
			</div>
		</section>
	);
};
