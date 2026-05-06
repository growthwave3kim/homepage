import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { TEAM_MEMBERS } from "@/data/team";

export default function AboutTeamLeads() {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<SectionHeading eyebrow="Our Team" title="대표 AE 소개" className="mb-12" />
				</Reveal>

				<div className="grid gap-6 md:grid-cols-3">
					{TEAM_MEMBERS.map((member, i) => {
						const initials = member.nameKo.slice(1);
						return (
							<Reveal key={member.nameEn} delay={i * 0.1} className="h-full">
								<div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
									{/* Avatar */}
									<div className="gradient-brand mb-5 flex h-16 w-16 items-center justify-center rounded-full">
										<span className="font-bold text-lg text-white">{initials}</span>
									</div>

									{/* Name + Role */}
									<p className="font-bold text-foreground text-lg">{member.nameKo}</p>
									<p className="gradient-text mt-0.5 font-semibold text-sm">{member.role}</p>

									{/* Quote */}
									{member.quote && (
										<p className="mt-3 text-muted-foreground text-sm italic leading-relaxed">
											&ldquo;{member.quote}&rdquo;
										</p>
									)}

									{/* Divider */}
									<div className="my-4 border-slate-100 border-t" />

									{/* Careers */}
									{member.careers && member.careers.length > 0 && (
										<ul className="mt-auto space-y-1.5">
											{member.careers.map((career) => (
												<li
													key={career}
													className="flex items-start gap-2 text-muted-foreground text-sm"
												>
													<span className="mt-0.5 shrink-0 text-[#7c3aed]">•</span>
													{career}
												</li>
											))}
										</ul>
									)}
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
