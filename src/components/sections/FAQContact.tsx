import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export const FAQContact = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
					{/* 좌: 헤딩 */}
					<Reveal direction="left">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Contact
						</p>
						<h2 className="mb-4 font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-4xl">
							답을 못 찾으셨나요?
						</h2>
						<p className="break-keep text-slate-500 leading-relaxed">
							직접 물어보시면 영업일 1일 내로 답변드립니다.
							<br />
							계약 압박 없이 궁금한 점만 여쭤보셔도 됩니다.
						</p>
					</Reveal>

					{/* 우: CTA 그리드 */}
					<Reveal delay={0.1} direction="right">
						<div className="flex flex-col gap-3">
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[#7c3aed]/40 hover:shadow-[0_4px_16px_rgba(124,58,237,0.08)]"
							>
								<div className="flex items-center gap-3">
									<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FEE500]">
										<MessageCircle className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
									</div>
									<div>
										<p className="font-semibold text-[#0a0a0a] text-sm">카카오톡 1:1 문의</p>
										<p className="text-slate-500 text-xs">바로 답변</p>
									</div>
								</div>
								<ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
							</a>

							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-[#7c3aed]/40 hover:shadow-[0_4px_16px_rgba(124,58,237,0.08)]"
							>
								<div className="flex items-center gap-3">
									<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c3aed]/10">
										<Mail className="h-4 w-4 text-[#7c3aed]" aria-hidden="true" />
									</div>
									<div>
										<p className="font-semibold text-[#0a0a0a] text-sm">이메일 문의</p>
										<p className="text-slate-500 text-xs">{siteConfig.contact.email}</p>
									</div>
								</div>
								<ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
							</a>

							<Link
								href="/contact"
								className="group flex items-center justify-between rounded-xl border border-[#7c3aed]/30 bg-[#7c3aed]/[0.04] px-5 py-4 transition-all hover:-translate-y-0.5 hover:bg-[#7c3aed]/[0.08]"
							>
								<div className="flex items-center gap-3">
									<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7c3aed]">
										<ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
									</div>
									<div>
										<p className="font-semibold text-[#7c3aed] text-sm">상담 신청</p>
										<p className="text-slate-500 text-xs">30분 무료 · 영업일 1일 내 회신</p>
									</div>
								</div>
								<ArrowRight className="h-4 w-4 text-[#7c3aed]/60 transition-transform group-hover:translate-x-0.5" />
							</Link>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
