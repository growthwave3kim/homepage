import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import TeamCard from "@/components/shared/TeamCard";
import { TEAM_MEMBERS } from "@/data/team";

export default function Team() {
	return (
		<section id="team" className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="People"
						title="전문직 마케팅을 가장 잘 아는 팀"
						sub="6개 직군의 광고 규정과 검색 의도를 이해하고 움직입니다."
						className="mb-16"
					/>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-3">
					{TEAM_MEMBERS.map((member, i) => (
						<Reveal key={member.nameEn} delay={i * 0.08}>
							<TeamCard member={member} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
