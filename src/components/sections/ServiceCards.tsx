import { ArrowRight, BookOpen, Clapperboard, Users } from "lucide-react";
import Link from "next/link";
import { SERVICE_CARDS } from "@/data/service-cards";

const ICON_MAP: Record<string, React.ElementType> = {
	Users,
	BookOpen,
	Clapperboard,
};

export const ServiceCards = () => {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<p className="mb-10 text-center font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					Services
				</p>
				<div className="grid gap-6 md:grid-cols-3">
					{SERVICE_CARDS.map((card) => {
						const Icon = ICON_MAP[card.icon] ?? Users;
						return (
							<Link
								key={card.href}
								href={card.href}
								className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)] md:p-8"
							>
								<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/10">
									<Icon className="h-5 w-5 text-[#7c3aed]" />
								</div>
								<p className="mb-2 font-semibold text-[#7c3aed] text-xs uppercase tracking-widest">
									{card.eyebrow}
								</p>
								<h3 className="mb-3 whitespace-pre-line font-bold text-foreground text-lg leading-snug">
									{card.title}
								</h3>
								<p className="mb-5 flex-1 text-muted-foreground text-sm leading-relaxed">
									{card.description}
								</p>
								<span className="flex items-center gap-1 font-semibold text-[#7c3aed] text-sm transition-gap group-hover:gap-2">
									{card.cta} <ArrowRight className="h-4 w-4" />
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
};
