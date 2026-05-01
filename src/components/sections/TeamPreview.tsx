import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import TeamCard from "@/components/shared/TeamCard";
import { TEAM_MEMBERS } from "@/data/team";

export default function TeamPreview() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Team
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							규정을 아는 사람들이 직접 만듭니다.
						</h2>
						<p className="mt-4 text-muted-foreground">운영팀이 아니라 기획자가 콘텐츠를 씁니다.</p>
					</div>
				</Reveal>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{TEAM_MEMBERS.map((member, i) => (
						<Reveal key={member.nameEn} delay={i * 0.08}>
							<TeamCard member={member} />
						</Reveal>
					))}
				</div>

				<Reveal>
					<div className="mt-10 text-center">
						<Link
							href="/team"
							className="inline-flex items-center gap-2 font-semibold text-[#7c3aed] text-sm hover:underline"
						>
							팀 전체 보기 →
						</Link>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
