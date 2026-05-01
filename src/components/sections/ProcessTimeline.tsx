import Reveal from "@/components/shared/Reveal";
import { PROCESS_STEPS } from "@/data/process";

export default function ProcessTimeline() {
	return (
		<section className="bg-white px-4 py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-16 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Process
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							어떻게 일하는가.
						</h2>
					</div>
				</Reveal>

				{/* Desktop: 가로 타임라인 */}
				<div className="relative hidden lg:block">
					{/* 연결선 */}
					<div
						className="absolute top-6 right-0 left-0 h-[2px] bg-slate-100"
						style={{ left: "10%", right: "10%" }}
					/>

					<div className="relative grid grid-cols-5 gap-4">
						{PROCESS_STEPS.map((step, i) => (
							<Reveal key={step.step} delay={i * 0.1}>
								<div className="flex flex-col items-center text-center">
									{/* 번호 원 */}
									<div className="gradient-brand relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full font-bold text-base text-white shadow-[0_4px_16px_rgba(124,58,237,0.3)]">
										{step.step}
									</div>
									<h3 className="mb-2 font-bold text-foreground text-base">{step.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{step.description}
									</p>
								</div>
							</Reveal>
						))}
					</div>
				</div>

				{/* Mobile: 세로 타임라인 */}
				<div className="relative lg:hidden">
					{/* 세로선 */}
					<div className="absolute top-6 bottom-6 left-5 w-[2px] bg-slate-100" />

					<div className="flex flex-col gap-8">
						{PROCESS_STEPS.map((step, i) => (
							<Reveal key={step.step} delay={i * 0.08}>
								<div className="relative flex gap-6">
									<div className="gradient-brand relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-sm text-white shadow-[0_4px_12px_rgba(124,58,237,0.3)]">
										{step.step}
									</div>
									<div className="pt-1.5">
										<h3 className="mb-1 font-bold text-foreground text-base">{step.title}</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
