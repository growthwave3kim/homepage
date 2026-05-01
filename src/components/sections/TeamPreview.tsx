import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { TEAM_MEMBERS } from "@/data/team";

export default function TeamPreview() {
	return (
		<section className="bg-slate-50 px-4 py-24">
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
							<div className="card-hover overflow-hidden rounded-2xl border border-slate-200 bg-white">
								<div className="aspect-square w-full bg-gradient-to-br from-slate-100 to-slate-200">
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
