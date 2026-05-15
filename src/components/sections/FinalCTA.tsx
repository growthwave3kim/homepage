import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FinalCTA = () => {
	return (
		<section className="gradient-brand relative overflow-hidden px-4 py-24 md:py-28">
			<div className="relative mx-auto max-w-3xl text-center">
				<Reveal>
					<p className="mb-4 font-semibold text-sm text-white/80 uppercase tracking-[0.25em]">
						마케팅 컨설팅
					</p>
					<h2 className="mb-4 font-extrabold text-[44px] text-white leading-[1.1] tracking-tight md:text-[64px]">
						광고비, 더 태우기 전에.
					</h2>
					<p className="mb-10 text-lg text-white/60 leading-relaxed">
						3분이면 컨설팅 요청이 끝납니다.
						<br />
						영업일 1일 내 답변드립니다.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<Link
							href="/contact"
							className="w-full rounded-md bg-white px-8 py-3.5 font-semibold text-[#0a0a0a] text-base transition-opacity hover:opacity-90 sm:w-auto"
						>
							마케팅 컨설팅
						</Link>
						<a
							href={siteConfig.contact.kakaoOpenChat}
							target="_blank"
							rel="noopener noreferrer"
							className="flex w-full items-center justify-center gap-2 rounded-md border border-white/40 px-8 py-3.5 font-semibold text-base text-white/80 transition-colors hover:border-white/60 hover:text-white sm:w-auto"
						>
							<MessageCircle className="h-4 w-4" />
							카카오톡 1:1 문의
						</a>
					</div>
					<p className="mt-6 text-sm text-white/40">
						영업일 1일 내 회신 · 광고 규정 위반 항목 즉시 확인
					</p>
				</Reveal>
			</div>
		</section>
	);
};
