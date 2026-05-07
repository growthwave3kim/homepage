import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { CASES } from "@/data/cases";

export default function Cases() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="Success Stories"
						title="의뢰·수임으로 이어진 사례"
						className="mb-16"
					/>
				</Reveal>

				{CASES.length === 0 ? (
					<Reveal>
						<div className="flex justify-center">
							<div className="w-full max-w-lg rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
								<span className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-500 text-xs">
									Coming soon
								</span>
								<h3 className="mb-3 font-bold text-foreground text-lg">
									사례는 준비되는 대로 공개합니다.
								</h3>
								<p className="mb-6 text-muted-foreground text-sm leading-relaxed">
									수임·의뢰로 이어진 사례를 직군별로 정리해 공개할 예정입니다.
									<br className="hidden sm:block" />
									먼저 확인하고 싶다면 상담에서 직접 보여드립니다.
								</p>
								<Link
									href="/contact"
									className="inline-flex items-center gap-1.5 font-semibold text-[#7c3aed] text-sm transition-gap hover:gap-2.5"
								>
									상담에서 사례 받아보기
									<ArrowRight className="h-4 w-4" />
								</Link>
							</div>
						</div>
					</Reveal>
				) : (
					<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{CASES.map((c, i) => (
							<Reveal key={c.anonymous} delay={i * 0.08}>
								<div className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6">
									<span className="gradient-brand mb-4 inline-block rounded-full px-3 py-1 font-semibold text-[11px] text-white">
										{c.field}
									</span>
									<p className="mb-4 flex-1 text-foreground text-sm leading-relaxed">
										&ldquo;{c.quote}&rdquo;
									</p>
									<div className="border-slate-100 border-t pt-4">
										<p className="gradient-text font-bold text-2xl">{c.metric}</p>
										<p className="mt-0.5 text-muted-foreground text-xs">
											{c.anonymous} · {c.period}
										</p>
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
