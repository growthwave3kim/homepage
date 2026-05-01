"use client";

import { Briefcase, Calculator, ClipboardList, FileSearch, Scale, Stethoscope } from "lucide-react";
import { PROFESSIONS } from "@/data/professions";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	Scale,
	Stethoscope,
	FileSearch,
	Briefcase,
	Calculator,
	ClipboardList,
};

function ProfessionCard({
	slug,
	icon,
	label,
	strength,
	tag,
}: {
	slug: string;
	icon: string;
	label: string;
	strength: string;
	tag: string;
}) {
	const Icon = ICON_MAP[icon];
	return (
		<div className="flex w-[260px] shrink-0 flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
			<div className="gradient-brand mb-4 flex h-10 w-10 items-center justify-center rounded-full">
				{Icon && <Icon className="h-5 w-5 text-white" aria-hidden="true" />}
			</div>
			<p className="mb-1 font-bold text-foreground text-lg">{label}</p>
			<p className="mb-2 text-muted-foreground text-sm leading-snug">{strength}</p>
			<span className="mt-auto inline-block rounded-full bg-slate-100 px-3 py-1 text-[11px] text-slate-500">
				{tag}
			</span>
		</div>
	);
}

export default function ProfessionMarquee() {
	return (
		<section className="overflow-hidden bg-white py-4">
			{/* 상단 레이블 */}
			<div className="mx-auto mb-8 max-w-6xl px-4 text-center">
				<p className="mb-1 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					전문직 라인업
				</p>
				<p className="text-muted-foreground text-sm">이 직군에 한해서만 작업합니다.</p>
			</div>

			{/* 마퀴 */}
			<div className="relative">
				{/* 좌 fade */}
				<div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
				{/* 우 fade */}
				<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

				<div className="animate-marquee flex gap-5 pb-4">
					{PROFESSIONS.map((p) => (
						<ProfessionCard key={`a-${p.slug}`} {...p} />
					))}
					{PROFESSIONS.map((p) => (
						<ProfessionCard key={`b-${p.slug}`} {...p} />
					))}
				</div>
			</div>
		</section>
	);
}
