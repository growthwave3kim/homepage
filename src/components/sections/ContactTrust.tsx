import { BarChart2, Mail, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

const REASONS = [
	{
		id: "regulation",
		Icon: ShieldCheck,
		title: "광고 규정 직접 검토",
		desc: "변호사법·의료법 등 6개 직군 규정을 발행 전 항목별로 체크합니다.",
	},
	{
		id: "data",
		Icon: BarChart2,
		title: "노출이 아닌 상담 수 보고",
		desc: "매월 실제 상담 신청 수를 기준으로 결과를 공유합니다.",
	},
	{
		id: "field",
		Icon: Users,
		title: "직군 전담 팀",
		desc: "12개 전문직 직군에 특화된 키워드·콘텐츠 데이터베이스를 운영합니다.",
	},
];

export const ContactTrust = () => {
	return (
		<section className="bg-white px-4 py-16 md:py-20">
			<div className="mx-auto max-w-5xl">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
					{/* 좌: 이유 */}
					<Reveal direction="left">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Why us
						</p>
						<h2 className="mb-8 font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
							왜 그로스웨이브에 의뢰하나
						</h2>
						<div className="space-y-5">
							{REASONS.map((r) => (
								<div key={r.id} className="flex items-start gap-4">
									<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/8">
										<r.Icon className="h-4 w-4 text-[#7c3aed]" aria-hidden="true" />
									</div>
									<div>
										<p className="mb-0.5 font-semibold text-[#0a0a0a] text-sm">{r.title}</p>
										<p className="break-keep text-slate-500 text-sm leading-relaxed">{r.desc}</p>
									</div>
								</div>
							))}
						</div>
					</Reveal>

					{/* 우: 직접 연락 */}
					<Reveal delay={0.1} direction="right">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Direct Contact
						</p>
						<h2 className="mb-8 font-bold text-2xl text-[#0a0a0a] tracking-tight md:text-3xl">
							직접 연락도 됩니다
						</h2>
						<div className="space-y-3">
							<a
								href={siteConfig.contact.kakaoOpenChat}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-colors hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/3"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEE500]">
									<MessageCircle className="h-4 w-4 text-[#0a0a0a]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#0a0a0a] text-sm">카카오톡 1:1 문의</p>
									<p className="text-slate-500 text-xs">바로 답변</p>
								</div>
							</a>

							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 transition-colors hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/3"
							>
								<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#7c3aed]/10">
									<Mail className="h-4 w-4 text-[#7c3aed]" aria-hidden="true" />
								</div>
								<div>
									<p className="font-semibold text-[#0a0a0a] text-sm">이메일</p>
									<p className="text-slate-500 text-xs">{siteConfig.contact.email}</p>
								</div>
							</a>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
};
