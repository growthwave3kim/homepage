"use client";

import { Clock, MessageSquare, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export const StickyCTA = () => {
	const [open, setOpen] = useState(true);
	const pathname = usePathname();

	const isHidden = pathname.startsWith("/contact");

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);

	if (isHidden) return null;

	return (
		<>
			{/* 백드롭 */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
						className="fixed inset-0 z-40"
						onClick={() => setOpen(false)}
					/>
				)}
			</AnimatePresence>

			{/* 빠른 상담 카드 */}
			<AnimatePresence>
				{open && (
					<motion.div
						key="card"
						initial={{ opacity: 0, y: 16, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.96 }}
						transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
						aria-modal="true"
						role="dialog"
						aria-labelledby="sticky-cta-heading"
						className="fixed right-6 bottom-[7.5rem] z-50 w-[calc(100vw-3rem)] max-w-[340px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.2)] md:right-8"
					>
						{/* 그라디언트 헤더 */}
						<div className="gradient-brand relative overflow-hidden px-5 py-5">
							<div
								className="pointer-events-none absolute inset-0 opacity-20"
								style={{
									backgroundImage:
										"radial-gradient(circle at 85% 15%, rgba(255,255,255,0.8) 0%, transparent 55%)",
								}}
							/>
							<button
								type="button"
								onClick={() => setOpen(false)}
								aria-label="닫기"
								className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
							>
								<X className="h-3.5 w-3.5 text-white" />
							</button>
							<p className="mb-0.5 font-semibold text-[10px] text-white/80 uppercase tracking-[0.2em]">
								{siteConfig.nameKo}
							</p>
							<p
								id="sticky-cta-heading"
								className="font-extrabold text-white text-xl leading-tight"
							>
								첫 상담, 무료입니다
							</p>
							<p className="mt-2 flex items-center gap-1.5 text-white/90 text-xs">
								<span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
								영업일 1일 내 회신 · 계약 압박 없음
							</p>
						</div>

						{/* 본문 */}
						<div className="p-5">
							{/* 메인 CTA */}
							<Link
								href="/contact"
								onClick={() => setOpen(false)}
								className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] py-3.5 font-bold text-sm text-white transition-opacity hover:opacity-85"
							>
								<MessageSquare className="h-4 w-4" aria-hidden="true" />
								마케팅 컨설팅
							</Link>

							{/* 전화 */}
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="mb-4 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:bg-slate-100"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/15">
									<Phone className="h-4 w-4 text-[#7c3aed]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-medium text-[10px] text-slate-500 tracking-wide">전화 문의</p>
									<p className="font-bold text-slate-900 text-sm">{siteConfig.contact.tel}</p>
								</div>
							</a>

							{/* 영업시간 */}
							<div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs">
								<Clock className="h-3 w-3" aria-hidden="true" />
								<span>{siteConfig.contact.businessHours}</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* CONTACT 트리거 버튼 */}
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				aria-controls="sticky-cta-heading"
				aria-label="CONTACT 빠른 상담 열기"
				className="gradient-brand fixed right-6 bottom-6 z-50 flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full text-white shadow-[0_8px_32px_rgba(124,58,237,0.5)] transition-transform hover:scale-110 active:scale-95 md:right-8 md:bottom-8"
			>
				<span className="gradient-brand absolute inset-0 animate-ping rounded-full opacity-20" />
				<MessageSquare className="relative h-6 w-6" aria-hidden="true" />
				<span className="relative font-bold text-[10px] uppercase tracking-widest">CONTACT</span>
			</button>
		</>
	);
};
