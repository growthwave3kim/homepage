import { Quote } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { PAIN_POINTS } from "@/data/pain-points";

export default function PainPoints() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="혹시 이런 경험"
						title="마케팅 회사에 맡겨봤지만, 결국 같은 자리"
						className="mb-16"
					/>
				</Reveal>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{PAIN_POINTS.map((point, i) => (
						<Reveal key={point.id} delay={i * 0.08}>
							<div className="card-hover flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6">
								<div
									className="gradient-brand flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
									aria-hidden="true"
								>
									<Quote className="h-4 w-4 text-white" />
								</div>
								<p className="font-medium text-[15px] text-foreground leading-relaxed">
									{point.text}
								</p>
							</div>
						</Reveal>
					))}

					{/* Extra card */}
					<Reveal delay={PAIN_POINTS.length * 0.08}>
						<div className="gradient-brand flex flex-col justify-center gap-3 rounded-2xl p-6 text-white sm:col-span-2 lg:col-span-1">
							<p className="font-bold text-xl leading-snug">
								그로스웨이브는 그 문제를 알고 있습니다.
							</p>
							<p className="text-sm text-white/80 leading-relaxed">
								변호사 마케팅에 특화된 팀이 수임으로 이어지는 콘텐츠를 직접 설계합니다.
							</p>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
