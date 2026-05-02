import { ArrowRight, BookOpen, Clapperboard, Users } from "lucide-react";
import Link from "next/link";

const CARDS = [
	{
		href: "/services/professional",
		icon: Users,
		eyebrow: "전문직 마케팅",
		title: "변호사·의사·한의사·변리사 등\n전문직 특화 마케팅",
		description: "광고 규정과 신뢰가 까다로운 분야에서 상담 전환을 설계합니다.",
		cta: "자세히 보기",
	},
	{
		href: "/services/blog",
		icon: BookOpen,
		eyebrow: "블로그 마케팅",
		title: "검색하는 고객을 만나는\n읽히는 블로그",
		description: "전문직 키워드 DB로 검색 상위 노출을 설계합니다.",
		cta: "자세히 보기",
	},
	{
		href: "/services/shortform",
		icon: Clapperboard,
		eyebrow: "숏폼 마케팅",
		title: "의뢰인이 먼저 찾아오는\n터지는 숏폼",
		description: "릴스·쇼츠·틱톡으로 전문가 퍼스널 브랜드를 구축합니다.",
		cta: "자세히 보기",
	},
];

export default function ServiceCards() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<p className="mb-10 text-center font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					Services
				</p>
				<div className="grid gap-6 md:grid-cols-3">
					{CARDS.map((card) => {
						const Icon = card.icon;
						return (
							<Link
								key={card.href}
								href={card.href}
								className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(124,58,237,0.12)]"
							>
								<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#7c3aed]/10">
									<Icon className="h-5 w-5 text-[#7c3aed]" />
								</div>
								<p className="mb-2 font-semibold text-[#7c3aed] text-xs uppercase tracking-widest">
									{card.eyebrow}
								</p>
								<h3 className="mb-3 whitespace-pre-line font-bold text-foreground text-lg leading-snug">
									{card.title}
								</h3>
								<p className="mb-5 flex-1 text-muted-foreground text-sm leading-relaxed">
									{card.description}
								</p>
								<span className="flex items-center gap-1 font-semibold text-[#7c3aed] text-sm transition-gap group-hover:gap-2">
									{card.cta} <ArrowRight className="h-4 w-4" />
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
