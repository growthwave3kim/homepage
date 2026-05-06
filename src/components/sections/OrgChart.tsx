import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

type CardTone = "lead" | "department" | "sub";

interface OrgCardProps {
	name: string;
	desc: string;
	tone?: CardTone;
}

// ── Unified Card ──────────────────────────────────────────────────────────────

function OrgCard({ name, desc, tone = "department" }: OrgCardProps) {
	const isLead = tone === "lead";
	const isSub = tone === "sub";

	return (
		<div
			className={cn(
				"rounded-2xl border transition-shadow duration-200 hover:shadow-md",
				isLead
					? "gradient-brand border-transparent p-6 shadow-[0_8px_30px_rgba(124,58,237,0.18)]"
					: isSub
						? "border-slate-200 bg-slate-50 p-4 shadow-sm"
						: "border-slate-200 bg-white p-6 shadow-sm",
			)}
		>
			<p
				className={cn(
					"font-bold",
					isLead
						? "text-base text-white"
						: isSub
							? "text-foreground text-sm"
							: "text-base text-foreground",
				)}
			>
				{name}
			</p>
			<p
				className={cn(
					"mt-1 leading-relaxed",
					isLead
						? "text-white/70 text-xs"
						: isSub
							? "text-muted-foreground text-xs"
							: "text-muted-foreground text-xs",
				)}
			>
				{desc}
			</p>
		</div>
	);
}

// ── Connector Primitives ──────────────────────────────────────────────────────

const C = "bg-slate-300";

function VLine({ height = "h-6" }: { height?: string }) {
	return (
		<div className="flex justify-center" aria-hidden="true">
			<div className={cn("w-px", height, C)} />
		</div>
	);
}

// CEO → 3 departments (desktop only)
function ThreeSplit() {
	return (
		<div className="grid h-8 grid-cols-3" aria-hidden="true">
			<div className="relative">
				<div className={cn("absolute top-0 right-0 left-1/2 h-px", C)} />
				<div className={cn("absolute top-0 left-1/2 h-full w-px", C)} />
			</div>
			<div className="relative">
				<div className={cn("absolute inset-x-0 top-0 h-px", C)} />
				<div className={cn("absolute top-0 left-1/2 h-full w-px", C)} />
			</div>
			<div className="relative">
				<div className={cn("absolute top-0 right-1/2 left-0 h-px", C)} />
				<div className={cn("absolute top-0 left-1/2 h-full w-px", C)} />
			</div>
		</div>
	);
}

// ── Data ──────────────────────────────────────────────────────────────────────

const MARKETING_SUB_TEAMS = [
	{ name: "브랜드 마케팅팀", desc: "콘텐츠 기획 · 광고 소재 제작" },
	{ name: "퍼포먼스 마케팅팀", desc: "CPC·CPM 광고 집행 · 성과 분석" },
] as const;

// ── Section ───────────────────────────────────────────────────────────────────

export default function OrgChart() {
	return (
		<section className="relative overflow-hidden bg-slate-50 px-4 py-20 md:py-24">
			{/* Subtle radial glow */}
			<div className="gradient-soft pointer-events-none absolute inset-0" aria-hidden="true" />

			<div className="relative mx-auto max-w-4xl">
				<Reveal>
					<SectionHeading eyebrow="Organization" title="조직도" className="mb-12" />
				</Reveal>

				<Reveal delay={0.1}>
					{/* CEO */}
					<div className="flex justify-center">
						<div className="w-64">
							<OrgCard name="대표" desc="전문직 마케팅 전략 총괄" tone="lead" />
						</div>
					</div>

					{/* CEO → 3 departments connector */}
					<VLine />
					<div className="hidden md:block">
						<ThreeSplit />
					</div>

					{/* Department columns */}
					<div className="grid items-start gap-4 md:grid-cols-3">
						{/* 마케팅팀 + sub-teams */}
						<div className="flex flex-col">
							<OrgCard name="마케팅팀" desc="키워드 분석 · SNS 채널 운영" tone="department" />
							<VLine height="h-4" />
							<div className="flex flex-col gap-3">
								{MARKETING_SUB_TEAMS.map((sub) => (
									<OrgCard key={sub.name} name={sub.name} desc={sub.desc} tone="sub" />
								))}
							</div>
						</div>

						{/* 영상팀 */}
						<div className="flex flex-col">
							<OrgCard name="영상팀" desc="숏폼 촬영 · 출연자 디렉팅" tone="department" />
							<VLine height="h-4" />
							<OrgCard name="콘텐츠 기획팀" desc="각본·스토리 구성 · 레퍼런스 리서치" tone="sub" />
						</div>

						{/* 편집팀 */}
						<OrgCard name="편집팀" desc="릴스·쇼츠 편집 · 자막·후반 작업" tone="department" />
					</div>
				</Reveal>
			</div>
		</section>
	);
}
