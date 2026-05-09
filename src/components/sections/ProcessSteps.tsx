import { BarChart2, CalendarDays, MessageSquare, PenLine } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { PROCESS_STEPS } from "@/data/process-steps";

const ICON_MAP: Record<string, React.ElementType> = {
	MessageSquare,
	CalendarDays,
	PenLine,
	BarChart2,
};

export const ProcessSteps = () => {
	return (
		<section className="bg-white px-4 py-24 md:py-28">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-16 text-center">
						<p className="mb-3 font-mono font-semibold text-[#a78bfa] text-[13px] uppercase tracking-[0.25em]">
							Process
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							이렇게 함께합니다.
						</h2>
						<p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground leading-relaxed">
							상담부터 발행까지, 규정 검토가 모든 단계에 있습니다.
						</p>
					</div>
				</Reveal>

				<div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
					{/* 데스크톱 연결선 */}
					<div
						className="absolute top-8 hidden h-px w-full bg-slate-100 md:block"
						aria-hidden="true"
					/>

					{PROCESS_STEPS.map((step, i) => {
						const Icon = ICON_MAP[step.icon] ?? MessageSquare;
						return (
							<Reveal key={step.title} delay={i * 0.1} direction="up">
								<div className="relative flex flex-col">
									{/* 번호 원 */}
									<div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-slate-100 bg-white">
										<span className="font-bold font-mono text-[#7c3aed] text-sm">
											{String(i + 1).padStart(2, "0")}
										</span>
									</div>

									<Icon className="mb-3 h-5 w-5 text-[#7c3aed]" aria-hidden="true" />
									<h3 className="mb-2 font-bold text-foreground text-lg">{step.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{step.description}
									</p>
									{step.badge && (
										<span className="mt-4 inline-block w-fit rounded-sm bg-[#7c3aed]/[0.08] px-2.5 py-1 font-semibold text-[#7c3aed] text-xs">
											{step.badge}
										</span>
									)}
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
};
