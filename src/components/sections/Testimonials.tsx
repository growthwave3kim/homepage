import { Quote } from "lucide-react";
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
			</div>
		</section>
	);
}
