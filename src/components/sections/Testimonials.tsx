import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading eyebrow="Reviews" title="전문직 고객의 후기" className="mb-16" />
				</Reveal>

				{TESTIMONIALS.length === 0 ? (
					<Reveal>
						<div className="flex justify-center">
							<div className="w-full max-w-lg rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
								<span className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-500 text-xs">
									Coming soon
								</span>
								<h3 className="mb-3 font-bold text-foreground text-lg">
									후기는 들어오는 대로 공개합니다.
								</h3>
								<p className="mb-6 text-muted-foreground text-sm leading-relaxed">
									협업이 종료된 직군부터 동의를 받아 공개할 예정입니다.
									<br className="hidden sm:block" />
									비공개 후기는 상담에서 발췌해 보여드립니다.
								</p>
								<Link
									href="/contact"
									className="inline-flex items-center gap-1.5 font-semibold text-[#7c3aed] text-sm transition-gap hover:gap-2.5"
								>
									상담 신청
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</Reveal>
				) : (
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{TESTIMONIALS.map((t, i) => (
							<Reveal key={t.author} delay={i * 0.08}>
								<div className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7">
									<div
										className="gradient-brand mb-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
										aria-hidden="true"
									>
										<Quote className="h-4 w-4 text-white" />
									</div>
									<p className="flex-1 text-foreground text-sm leading-relaxed">{t.text}</p>
									<div className="mt-5 border-slate-100 border-t pt-4">
										<p className="font-semibold text-foreground text-sm">{t.author}</p>
										<p className="text-muted-foreground text-xs">{t.role}</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
