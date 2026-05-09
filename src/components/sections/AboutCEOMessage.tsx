import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { EXPERTISE, MESSAGE_PARAGRAPHS } from "@/data/ceo-message";

export const AboutCEOMessage = () => {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<div className="flex flex-col items-start gap-6 md:flex-row md:gap-16">
						{/* Photo */}
						<div className="shrink-0">
							<div className="relative h-48 w-40 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:h-80 md:w-64">
								<Image
									src="/images/team/taehoon-kim.png"
									alt="김태훈 대표"
									fill
									className="object-cover object-top"
									sizes="(max-width: 768px) 208px, 256px"
								/>
							</div>
						</div>

						{/* Message */}
						<div className="flex flex-col">
							<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
								CEO Message
							</p>
							<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
								퍼포먼스 마케팅으로 시작했습니다.
							</h2>
							<div className="mb-8 flex flex-wrap gap-2">
								{EXPERTISE.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-[#7c3aed]/20 bg-[#7c3aed]/8 px-3 py-1 font-semibold text-[#7c3aed] text-xs"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="space-y-4">
								{MESSAGE_PARAGRAPHS.map((para) => (
									<p key={para} className="text-slate-700 leading-relaxed">
										{para}
									</p>
								))}
							</div>
							<p className="mt-8 font-semibold text-slate-500 text-sm tracking-wide">
								― 김태훈 / 그로스웨이브 대표
							</p>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
};
