import CountUp from "@/components/shared/CountUp";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { NUMBERS } from "@/data/numbers";

const PARTNER_BADGES = [
	"네이버 공식 파트너",
	"메타 비즈니스 파트너",
	"서울지방변호사회 협력업체",
] as const;

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

				{/* Partner badges */}
				<Reveal delay={0.5}>
					<div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-slate-100 border-t pt-10">
						<span className="text-[11px] text-slate-400 uppercase tracking-widest">
							공식 파트너
						</span>
						{PARTNER_BADGES.map((badge) => (
							<span
								key={badge}
								className="rounded-full border border-slate-200 px-4 py-1.5 text-slate-400 text-xs"
							>
								{badge}
							</span>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
