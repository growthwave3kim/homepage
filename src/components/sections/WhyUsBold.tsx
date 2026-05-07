import { Check, Database, ShieldCheck, Target, X } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { WHY_US_BOLD_CARDS } from "@/data/why-us";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	ShieldCheck,
	Database,
	Target,
};

export default function WhyUsBold() {
	return (
		<section className="bg-[#0b1220] px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
							Why Us
						</p>
						<h2 className="font-bold text-3xl text-white leading-tight tracking-tight md:text-4xl">
							대부분의 대행사는 노출 수만 보고합니다.
						</h2>
						<p className="mt-4 text-lg text-white/60">노출이 아닌, 의뢰로 평가합니다.</p>
					</div>
				</Reveal>

				{/* 3 카드 */}
				<div className="mb-12 grid gap-6 md:grid-cols-3">
					{WHY_US_BOLD_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? ShieldCheck;
						return (
							<Reveal key={card.title} delay={i * 0.1} className="h-full">
								<div className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm">
									<div className="gradient-brand mb-5 flex h-12 w-12 items-center justify-center rounded-full">
										<Icon className="h-5 w-5 text-white" aria-hidden="true" />
									</div>
									<div className="mb-2 flex items-center gap-3">
										<h3 className="font-bold text-foreground text-lg">{card.title}</h3>
									</div>
									<p className="mb-4 text-muted-foreground text-sm leading-relaxed">
										{card.description}
									</p>
									<div className="mt-auto flex min-h-[3.25rem] items-center rounded-xl bg-[#7c3aed]/5 px-4 py-3">
										<span className="font-bold text-[#7c3aed] text-sm">{card.stat}</span>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>

				{/* Before / After 비교 */}
				<Reveal>
					<div className="overflow-hidden rounded-2xl border border-white/10">
						{/* Header */}
						<div className="grid grid-cols-2">
							<div className="flex items-center gap-2.5 bg-white/6 px-4 py-3 md:px-8 md:py-5">
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
									<X className="h-3 w-3 text-white/60" />
								</div>
								<p className="font-semibold text-sm text-white/40">일반 대행사</p>
							</div>
							<div className="gradient-brand flex items-center gap-2.5 border-white/20 border-l px-4 py-3 md:px-8 md:py-5">
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/25">
									<Check className="h-3 w-3 text-white" />
								</div>
								<p className="font-semibold text-sm text-white">그로스웨이브</p>
							</div>
						</div>
						{/* Rows */}
						{WHY_US_BOLD_CARDS.map((card) => (
							<div
								key={`compare-${card.title}`}
								className="grid grid-cols-2 border-white/[0.07] border-t"
							>
								<div className="bg-white/3 px-4 py-3 md:px-8 md:py-5">
									<p className="text-sm text-white/30">{card.before}</p>
								</div>
								<div className="border-[#7c3aed]/50 border-l bg-[#7c3aed]/10 px-4 py-3 md:px-8 md:py-5">
									<p className="font-semibold text-sm text-white">{card.after}</p>
								</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
