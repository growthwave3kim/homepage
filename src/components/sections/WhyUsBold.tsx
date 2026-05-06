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
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Why Us
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							대행사 절반은 노출 수만 보고합니다.
						</h2>
						<p className="mt-4 text-lg text-muted-foreground">노출이 아닌, 의뢰로 평가합니다.</p>
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
					<div className="overflow-hidden rounded-2xl shadow-sm">
						{/* Header */}
						<div className="grid grid-cols-2">
							<div className="flex items-center gap-2.5 bg-slate-100 px-8 py-5">
								<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-300">
									<X className="h-3 w-3 text-white" />
								</div>
								<p className="font-semibold text-slate-500 text-sm">일반 대행사</p>
							</div>
							<div className="gradient-brand flex items-center gap-2.5 border-white/30 border-l-2 px-8 py-5">
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
								className="grid grid-cols-2 border-slate-100 border-t"
							>
								<div className="bg-slate-50 px-8 py-5">
									<p className="text-slate-400 text-sm">{card.before}</p>
								</div>
								<div className="border-[#7c3aed]/40 border-l-2 bg-[#7c3aed]/5 px-8 py-5">
									<p className="font-semibold text-foreground text-sm">{card.after}</p>
								</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
