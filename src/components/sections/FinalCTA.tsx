import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export default function FinalCTA() {
	return (
		<section className="relative overflow-hidden bg-[#0f172a] px-4 py-24 md:py-28">
			{/* 보라 radial glow */}
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.35) 0%, transparent 70%)",
				}}
				aria-hidden="true"
			/>

			<div className="relative mx-auto max-w-3xl text-center">
				<Reveal>
					<p className="mb-4 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
						무료 상담
					</p>
					<h2 className="mb-4 font-extrabold text-[40px] text-white leading-[1.1] tracking-tight md:text-[56px]">
						광고비, 더 태우기 전에.
					</h2>
					<p className="mb-10 text-[#94a3b8] text-lg leading-relaxed">
						3분이면 상담 신청이 끝납니다.
						<br />
						24시간 안으로 답변드립니다.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="/contact"
							className="gradient-brand w-full rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90 sm:w-auto"
						>
							무료 상담 신청
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-semibold text-base text-white/80 transition-colors hover:border-white/40 hover:text-white sm:w-auto"
						>
							<MessageCircle className="h-4 w-4" />
							카카오톡 1:1 문의
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
