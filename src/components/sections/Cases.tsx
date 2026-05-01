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
						title="수임으로 이어진 사례"
						className="mb-16"
					/>
				</Reveal>

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
			</div>
		</section>
	);
}
