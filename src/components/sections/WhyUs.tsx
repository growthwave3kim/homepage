import { Database, Search, ShieldCheck, User } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { WHY_US_CARDS } from "@/data/why-us";

const ICON_MAP: Record<string, React.ElementType> = {
	ShieldCheck,
	Database,
	Search,
	User,
};

export default function WhyUs() {
	return (
		<section id="about" className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="Why Growth Wave"
						title="왜 전문직 마케팅만 합니까?"
						sub="6개 직군의 광고 규정과 의뢰 구조에 맞춘 콘텐츠를 설계합니다."
						className="mb-16"
					/>
				</Reveal>

				<div className="grid gap-6 sm:grid-cols-2">
					{WHY_US_CARDS.map((card, i) => {
						const Icon = ICON_MAP[card.icon] ?? ShieldCheck;
						return (
							<Reveal key={card.title} delay={i * 0.1}>
								<div className="card-hover flex gap-5 rounded-2xl border border-slate-200 bg-white p-7">
									<div className="gradient-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
										<Icon className="h-5 w-5 text-white" aria-hidden="true" />
									</div>
									<div>
										<h3 className="mb-2 font-bold text-[17px] text-foreground">{card.title}</h3>
										<p className="text-muted-foreground text-sm leading-relaxed">
											{card.description}
										</p>
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
