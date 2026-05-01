import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export default function FinalCTA() {
	return (
		<section className="relative overflow-hidden bg-[#0f172a] px-4 py-28">
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
						<br />첫 상담 무료 · 진행 의무 없음 · 영업일 1일 내 회신
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="/contact"
							className="gradient-brand w-full rounded-full px-8 py-4 font-semibold text-base text-white shadow-[0_8px_32px_rgba(124,58,237,0.4)] transition-opacity hover:opacity-90 sm:w-auto"
						>
							무료 상담 신청
						</Link>
						<Link
							href="/contact"
							className="w-full rounded-full border border-white/20 px-8 py-4 font-semibold text-base text-white/80 transition-colors hover:border-white/40 hover:text-white sm:w-auto"
						>
							카카오톡 1:1 문의
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
