import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { cn } from "@/lib/utils";

// ── Types ─────────────────────────────────────────────────────────────────────

interface SubTeam {
	name: string;
	desc: string;
}

interface Department {
	name: string;
	desc: string;
	subs: SubTeam[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const DEPARTMENTS: Department[] = [
	{
		name: "마케팅팀",
		desc: "키워드 분석 · SNS 채널 운영",
		subs: [
			{ name: "브랜드 마케팅팀", desc: "콘텐츠 기획 · 광고 소재 제작" },
			{ name: "퍼포먼스 마케팅팀", desc: "CPC·CPM 광고 집행 · 성과 분석" },
		],
	},
	{
		name: "영상팀",
		desc: "숏폼 촬영 · 출연자 디렉팅",
		subs: [
			{ name: "콘텐츠 기획팀", desc: "각본·스토리 구성 · 레퍼런스 리서치" },
			{ name: "촬영·디렉팅팀", desc: "현장 촬영 · 출연자 코칭" },
		],
	},
	{
		name: "편집팀",
		desc: "릴스·쇼츠 편집 · 자막·후반 작업",
		subs: [
			{ name: "영상 편집팀", desc: "릴스·쇼츠 편집 · 컬러 그레이딩" },
			{ name: "후반 작업팀", desc: "자막 작업 · 썸네일 제작" },
		],
	},
];

// ── Cards ──────────────────────────────────────────────────────────────────────

function LeadCard() {
	return (
		<div className="gradient-brand rounded-2xl p-6 shadow-[0_8px_30px_rgba(124,58,237,0.20)]">
			<p className="font-bold text-base text-white">대표</p>
			<p className="mt-1 text-white/65 text-xs leading-relaxed">전문직 마케팅 전략 총괄</p>
		</div>
	);
}

function DeptCard({ name, desc }: { name: string; desc: string }) {
	return (
		<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
			<p className="font-bold text-foreground text-sm">{name}</p>
			<p className="mt-1 text-muted-foreground text-xs leading-relaxed">{desc}</p>
		</div>
	);
}

function SubCard({ name, desc }: { name: string; desc: string }) {
	return (
		<div className="rounded-xl border border-slate-200 border-dashed bg-slate-50 p-4">
			<p className="font-semibold text-foreground text-xs">{name}</p>
			<p className="mt-0.5 text-muted-foreground text-xs leading-relaxed">{desc}</p>
		</div>
	);
}

// ── Connector primitives ───────────────────────────────────────────────────────

function VDash({ height = "h-5" }: { height?: string }) {
	return (
		<div className="flex justify-center" aria-hidden="true">
			<div
				className={cn("w-px border-[#7c3aed]/30 border-dashed", height)}
				style={{ borderLeftWidth: "1.5px" }}
			/>
		</div>
	);
}

function HBar() {
	return (
		<div className="mx-auto grid h-6 max-w-4xl grid-cols-3" aria-hidden="true">
			{[0, 1, 2].map((i) => (
				<div key={i} className="relative">
					{i === 0 && (
						<>
							<div className="absolute top-0 right-0 left-1/2 border-[#7c3aed]/25 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-[#7c3aed]/25 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
					{i === 1 && (
						<>
							<div className="absolute inset-x-0 top-0 border-[#7c3aed]/25 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-[#7c3aed]/25 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
					{i === 2 && (
						<>
							<div className="absolute top-0 right-1/2 left-0 border-[#7c3aed]/25 border-t border-dashed" />
							<div
								className="absolute top-0 left-1/2 h-full border-[#7c3aed]/25 border-l border-dashed"
								style={{ borderLeftWidth: "1.5px" }}
							/>
						</>
					)}
				</div>
			))}
		</div>
	);
}

// ── Section ────────────────────────────────────────────────────────────────────

export default function OrgChart() {
	return (
		<section className="relative overflow-hidden bg-slate-50 px-4 py-20 md:py-24">
			<div className="gradient-soft pointer-events-none absolute inset-0" aria-hidden="true" />

			<div className="relative mx-auto max-w-4xl">
				<Reveal>
					<SectionHeading eyebrow="Organization" title="조직도" className="mb-12" />
				</Reveal>

				<Reveal delay={0.1}>
					{/* CEO */}
					<div className="flex justify-center">
						<div className="w-60">
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
}
