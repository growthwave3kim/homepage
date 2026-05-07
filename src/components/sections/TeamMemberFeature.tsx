import Image from "next/image";
import Reveal from "@/components/shared/Reveal";
import { TEAM_MEMBERS } from "@/data/team";

export default function TeamMemberFeature() {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<div className="space-y-24">
					{TEAM_MEMBERS.map((member, i) => {
						const isEven = i % 2 === 0;
						const paragraphs = member.bio.split("\n\n");

						return (
							<Reveal key={member.nameEn} delay={0.05}>
								<div
									className={`flex flex-col items-start gap-12 md:flex-row md:gap-16 ${
										!isEven ? "md:flex-row-reverse" : ""
									}`}
								>
									{/* Photo */}
									{member.photo && (
										<div className="shrink-0">
											<div className="relative h-72 w-56 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] md:h-96 md:w-72">
												<Image
													src={member.photo}
													alt={member.nameKo}
													fill
													className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
													sizes="(max-width: 768px) 224px, 288px"
												/>
											</div>
										</div>
									)}

									{/* Content */}
									<div className="flex flex-1 flex-col">
										{/* Name / Role */}
										<div className="mb-6">
											<p className="mb-1 font-bold text-2xl text-foreground md:text-3xl">
												{member.nameKo}
											</p>
											<p className="text-muted-foreground text-sm">
												{member.nameEn} · {member.role}
											</p>
										</div>

										{/* Quote */}
										{member.quote && (
											<blockquote className="mb-8 border-[#7c3aed]/20 border-l-4 pl-5">
												<p className="gradient-text font-bold text-xl leading-snug md:text-2xl">
													&ldquo;{member.quote}&rdquo;
												</p>
											</blockquote>
										)}

										{/* Bio */}
										<div className="mb-8 space-y-3">
											{paragraphs.map((para) => (
												<p key={para} className="text-slate-600 text-sm leading-relaxed">
													{para}
												</p>
											))}
										</div>

										{/* Career */}
										{member.careers && member.careers.length > 0 && (
											<div>
												<p className="mb-3 font-semibold text-foreground text-xs uppercase tracking-widest">
													경력
												</p>
												<ul className="space-y-2">
													{member.careers.map((c) => (
														<li key={c} className="flex items-start gap-2 text-slate-600 text-sm">
															<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7c3aed]" />
															{c}
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
