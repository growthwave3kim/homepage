import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DEPARTMENTS } from "@/data/org-structure";
import { cn } from "@/lib/utils";

const LeadCard = () => {
	return (
		<div className="rounded-md bg-[#0a0a0a] p-6">
			<p className="font-bold text-base text-white">대표</p>
			<p className="mt-1 text-white/65 text-xs leading-relaxed">전문직 마케팅 전략 총괄</p>
		</div>
	);
};

const DeptCard = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
			<p className="font-bold text-foreground text-sm">{name}</p>
			<p className="mt-1 text-muted-foreground text-xs leading-relaxed">{desc}</p>
		</div>
	);
};

const SubCard = ({ name, desc }: { name: string; desc: string }) => {
	return (
		<div className="rounded-xl border border-slate-200 border-dashed bg-slate-50 p-4">
			<p className="font-semibold text-foreground text-xs">{name}</p>
			<p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">{desc}</p>
		</div>
	);
};

const VDash = ({ height = "h-5" }: { height?: string }) => {
	return (
		<div className="flex justify-center" aria-hidden="true">
			<div
				className={cn("w-px border-slate-200 border-dashed", height)}
				style={{ borderLeftWidth: "1.5px" }}
			/>
		</div>
	);
};

const HBar = () => {
	return (
		<div className="mx-auto grid h-6 max-w-4xl grid-cols-3" aria-hidden="true">
			{[0, 1, 2].map((i) => (
				<div key={i} className="relative">
					{i === 0 && (
						<>
							<div className="absolute top-0 right-0 left-1/2 border-slate-200 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-slate-200 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
					{i === 1 && (
						<>
							<div className="absolute inset-x-0 top-0 border-slate-200 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-slate-200 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
					{i === 2 && (
						<>
							<div className="absolute top-0 right-1/2 left-0 border-slate-200 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-slate-200 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
				</div>
			))}
		</div>
	);
};

export const OrgChart = () => {
	return (
		<section className="relative overflow-hidden bg-white px-4 py-24 md:py-28">
			<div className="gradient-soft pointer-events-none absolute inset-0" aria-hidden="true" />

			<div className="relative mx-auto max-w-4xl">
				<Reveal>
					<SectionHeading eyebrow="Organization" title="조직도" className="mb-12" />
				</Reveal>

				<Reveal delay={0.1}>
					{/* CEO */}
					<div className="flex justify-center">
						<div className="w-full max-w-[240px] md:w-60">
							<LeadCard />
						</div>
					</div>

					{/* CEO → departments connector */}
					<VDash />
					<div className="hidden md:block">
						<HBar />
					</div>

					{/* Departments */}
					<div className="grid items-start gap-4 md:grid-cols-3">
						{DEPARTMENTS.map((dept) => (
							<div key={dept.name} className="flex flex-col">
								<DeptCard name={dept.name} desc={dept.desc} />
								<VDash height="h-4" />
								<div className="flex flex-col gap-2">
									{dept.subs.map((sub) => (
										<SubCard key={sub.name} name={sub.name} desc={sub.desc} />
									))}
								</div>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
};
