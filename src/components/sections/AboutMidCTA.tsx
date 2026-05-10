import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export const AboutMidCTA = () => {
	return (
		<section className="bg-[#0a0e2e] px-4 py-20 md:py-24">
			<div className="mx-auto max-w-4xl text-center">
				<Reveal>
					<p className="mb-4 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
						Direct Contact
					</p>
					<h2 className="mb-3 font-bold text-3xl text-white tracking-tight md:text-4xl">
						30분 무료 진단
					</h2>
					<p className="mb-10 break-keep text-white/60 leading-relaxed">
						광고비 더 태우기 전에, 위반 항목부터 점검하세요.
					</p>

					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<Link
							href="/contact"
							className="gradient-brand w-full rounded-md px-8 py-4 font-semibold text-base text-white transition-opacity hover:opacity-90 sm:w-auto"
						>
							상담 신청
						</Link>
						<a
							href="https://open.kakao.com/o/growthwave"
							target="_blank"
							rel="noopener noreferrer"
							className="w-full rounded-md bg-[#FAE100] px-8 py-4 font-semibold text-[#3A1D1D] text-base transition-opacity hover:opacity-90 sm:w-auto"
						>
							카카오톡 1:1 문의
						</a>
						<a
							href="/growthwave-brochure.pdf"
							download="Growth Wave 회사소개서.pdf"
							className="w-full rounded-md border border-white/30 px-8 py-4 font-semibold text-base text-white transition-colors hover:border-white/60 hover:bg-white/5 sm:w-auto"
						>
							회사소개서 PDF
						</a>
					</div>

					<p className="mt-8 font-mono text-white/30 text-xs tracking-[0.15em]">
						영업일 1일 내 회신 · 24시간 카카오 응답 · 즉시 다운로드
					</p>
				</Reveal>
			</div>
		</section>
	);
};
