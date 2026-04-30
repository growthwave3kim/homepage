import CountUp from "@/components/shared/CountUp";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { NUMBERS } from "@/data/numbers";

export default function Numbers() {
	return (
		<section className="bg-white px-4 py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading eyebrow="Results" title="숫자로 증명합니다" className="mb-16" />
				</Reveal>

				<div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 lg:grid-cols-4">
					{NUMBERS.map((stat, i) => (
						<Reveal key={stat.label} delay={i * 0.1}>
							<div className="bg-white px-8 py-12 text-center">
								<p className="mb-2 font-[var(--font-inter)] font-bold text-[64px] leading-none">
									<span className="gradient-text">
										<CountUp end={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
									</span>
								</p>
								<p className="font-medium text-muted-foreground text-sm">{stat.label}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
