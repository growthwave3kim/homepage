import { Database, ShieldCheck, Target } from "lucide-react";
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
						<p className="mt-4 text-lg text-muted-foreground">그로스웨이브는 수임 전환만 봅니다.</p>
					</div>
				</Reveal>

				{/* 3 카드 */}
				<div className="mb-12 grid gap-6 md:grid-cols-3">
					{WHY_US_BOLD_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? ShieldCheck;
						return (
							<Reveal key={card.title} delay={i * 0.1}>
								<div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm">
									<div className="gradient-brand mb-5 flex h-12 w-12 items-center justify-center rounded-full">
										<Icon className="h-5 w-5 text-white" aria-hidden="true" />
									</div>
									<div className="mb-2 flex items-center gap-3">
										<h3 className="font-bold text-foreground text-lg">{card.title}</h3>
									</div>
									<p className="mb-4 text-muted-foreground text-sm leading-relaxed">
										{card.description}
									</p>
									<div className="mt-auto rounded-xl bg-[#7c3aed]/5 px-4 py-3">
										<span className="font-bold text-[#7c3aed] text-sm">{card.stat}</span>
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>

				{/* Before / After 비교 */}
				<Reveal>
					<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
						<div className="grid grid-cols-2">
							<div className="border-slate-200 border-r bg-slate-50 px-6 py-4">
								<p className="font-semibold text-slate-400 text-xs uppercase tracking-widest">
									일반 대행사
								</p>
							</div>
							<div className="px-6 py-4">
								<p className="font-semibold text-[#7c3aed] text-xs uppercase tracking-widest">
									그로스웨이브
								</p>
							</div>
						</div>
						{WHY_US_BOLD_CARDS.map((card) => (
							<div
								key={`compare-${card.title}`}
								className="grid grid-cols-2 border-slate-200 border-t"
							>
								<div className="border-slate-200 border-r px-6 py-4">
									<p className="text-slate-500 text-sm">{card.before}</p>
								</div>
								<div className="px-6 py-4">
									<p className="font-medium text-foreground text-sm">{card.after}</p>
								</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
