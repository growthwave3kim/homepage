import { ArrowRight, BookOpen, Clapperboard, Users } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { SERVICE_CARDS } from "@/data/service-cards";

const ICON_MAP: Record<string, React.ElementType> = {
	Users,
	BookOpen,
	Clapperboard,
};

export const ServiceCards = () => {
	return (
		<section className="bg-[#F8FAFC] px-4 pt-20 pb-24 md:pb-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-14 text-center">
						<p className="mb-4 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Services
						</p>
						<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-4xl">
							전문직 마케팅, <span className="gradient-text">세 가지</span>로 합니다.
						</h2>
					</div>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
					{SERVICE_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? Users;
						return (
							<Reveal key={card.href} delay={i * 0.1}>
								<Link
									href={card.href}
									className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/40 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]"
								>
									{/* 아이콘 */}
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#7c3aed]/[0.08] transition-colors group-hover:bg-[#7c3aed]/[0.14]">
										<Icon className="h-6 w-6 text-[#7c3aed]" aria-hidden="true" />
									</div>

									{/* Eyebrow */}
									<p className="mb-2 font-semibold text-[#a78bfa] text-xs uppercase tracking-widest">
										{card.eyebrow}
									</p>

									{/* 제목 */}
									<h3 className="mb-3 whitespace-pre-line font-bold text-foreground text-xl leading-snug tracking-tight">
										{card.title}
									</h3>

									{/* 설명 */}
									<p className="mb-6 flex-1 text-muted-foreground text-sm leading-relaxed">
										{card.description}
									</p>

									{/* KPI 배지 */}
									{card.kpi && (
										<div className="mb-5 inline-block self-start rounded-sm bg-[#7c3aed]/[0.08] px-3 py-1.5">
											<span className="font-semibold text-[#7c3aed] text-xs">{card.kpi}</span>
										</div>
									)}

									{/* CTA */}
									<span className="flex items-center gap-1.5 self-start border-current border-b pb-0.5 font-semibold text-[#0a0a0a] text-sm transition-opacity group-hover:opacity-70">
										{card.cta}
										<ArrowRight
											className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
											aria-hidden="true"
										/>
									</span>
								</Link>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
