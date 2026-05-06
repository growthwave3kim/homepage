import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const DEPARTMENTS = [
	{
		name: "마케팅팀",
		desc: "콘텐츠 기획 · 키워드 DB · 채널 운영",
	},
	{
		name: "영상팀",
		desc: "숏폼 촬영 · 출연자 디렉팅",
	},
	{
		name: "편집팀",
		desc: "릴스·쇼츠 편집 · 자막·후반 작업",
	},
] as const;

export default function OrgChart() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-4xl">
				<Reveal>
					<SectionHeading eyebrow="Organization" title="조직도" className="mb-12" />
				</Reveal>

				<Reveal delay={0.1}>
					{/* CEO Box */}
					<div className="flex justify-center">
						<div className="gradient-brand w-48 rounded-2xl px-6 py-5 text-center shadow-[0_4px_20px_rgba(124,58,237,0.25)]">
							<p className="font-bold text-base text-white">대표</p>
							<p className="mt-1 text-white/80 text-xs">전문직 마케팅 전략 총괄</p>
						</div>
					</div>

					{/* Vertical drop from CEO */}
					<div className="flex justify-center" aria-hidden="true">
						<div className="h-8 w-px bg-slate-300" />
					</div>

					{/* Desktop: 3-col connector matching the grid below */}
					<div className="hidden h-6 grid-cols-3 gap-4 md:grid" aria-hidden="true">
						{/* Left column: horizontal bar from center → right (+half-gap) */}
						<div className="relative flex justify-center">
							<div className="absolute top-0 -right-2 left-1/2 h-px bg-slate-300" />
							<div className="h-full w-px bg-slate-300" />
						</div>
						{/* Center column: horizontal bar full width (bridging both gaps) */}
						<div className="relative flex justify-center">
							<div className="absolute top-0 -right-2 -left-2 h-px bg-slate-300" />
							<div className="h-full w-px bg-slate-300" />
						</div>
						{/* Right column: horizontal bar from left (+half-gap) → center */}
						<div className="relative flex justify-center">
							<div className="absolute top-0 right-1/2 -left-2 h-px bg-slate-300" />
							<div className="h-full w-px bg-slate-300" />
						</div>
					</div>

					{/* Mobile: single vertical continuation */}
					<div className="flex justify-center md:hidden" aria-hidden="true">
						<div className="h-4 w-px bg-slate-300" />
					</div>

					{/* Department Boxes */}
					<div className="grid gap-4 md:grid-cols-3">
						{DEPARTMENTS.map((dept) => (
							<div
								key={dept.name}
								className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm transition-shadow hover:shadow-md"
							>
								<p className="font-bold text-foreground">{dept.name}</p>
								<p className="mt-1 text-muted-foreground text-sm">{dept.desc}</p>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
