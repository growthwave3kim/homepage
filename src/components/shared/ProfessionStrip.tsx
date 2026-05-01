import {
	Briefcase,
	Calculator,
	ClipboardList,
	FileSearch,
	Scale,
	ShieldCheck,
	Stethoscope,
} from "lucide-react";
import { PROFESSIONS } from "@/data/professions";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	Scale,
	Stethoscope,
	FileSearch,
	Briefcase,
	Calculator,
	ClipboardList,
	ShieldCheck,
};

interface ProfessionStripProps {
	label?: string;
}

export default function ProfessionStrip({ label = "함께한 전문직" }: ProfessionStripProps) {
	return (
		<div className="w-full">
			{label && (
				<p className="mb-5 text-center font-medium text-muted-foreground text-sm">{label}</p>
			)}
			<div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
				{PROFESSIONS.map((p) => {
					const Icon = ICON_MAP[p.icon];
					return (
						<div
							key={p.slug}
							className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
						>
							{Icon && <Icon className="h-4 w-4 text-[#7c3aed]" />}
							<span className="font-medium text-foreground text-sm">{p.label}</span>
							{p.adRule && (
								<span className="rounded-full bg-amber-50 px-1.5 py-0.5 font-medium text-[10px] text-amber-600">
									규정준수
								</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
