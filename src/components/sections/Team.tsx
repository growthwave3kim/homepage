import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { TEAM_MEMBERS } from "@/data/team";

export default function Team() {
	return (
		<section id="team" className="bg-slate-50 px-4 py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="People"
						title="변호사 마케팅을 가장 잘 아는 팀"
						sub="법률 시장에 특화된 경험과 데이터로 움직입니다."
						className="mb-16"
					/>
				</Reveal>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{TEAM_MEMBERS.map((member, i) => (
						<Reveal key={member.nameEn} delay={i * 0.08}>
							<div className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white">
								{/* Photo placeholder */}
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
										<span className="font-normal text-muted-foreground text-sm">
											{member.nameEn}
										</span>
									</p>
									<p className="gradient-text mt-0.5 font-medium text-sm">{member.role}</p>
									<p className="mt-2 text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
