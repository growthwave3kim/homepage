import type { TeamMember } from "@/types";

export default function TeamCard({ member }: { member: TeamMember }) {
	return (
		<div className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
			<div className="aspect-square w-full bg-gradient-to-br from-slate-100 to-slate-200 transition-all duration-500 hover:from-violet-50 hover:to-indigo-100">
				<div className="flex h-full w-full items-center justify-center">
					<div className="gradient-brand flex h-16 w-16 items-center justify-center rounded-full font-bold text-2xl text-white">
						{member.nameKo.charAt(0)}
					</div>
				</div>
			</div>
			<div className="p-5">
				<p className="font-bold text-base text-foreground">
					{member.nameKo}{" "}
					<span className="font-normal text-muted-foreground text-sm">{member.nameEn}</span>
				</p>
				<p className="gradient-text mt-0.5 font-medium text-sm">{member.role}</p>
				<p className="mt-2 text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
			</div>
		</div>
	);
}
