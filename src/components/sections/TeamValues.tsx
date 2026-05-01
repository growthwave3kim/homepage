import { BarChart3, BookText, Layers } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const VALUES = [
	{
		icon: BookText,
		title: "규정 먼저, 카피 나중",
		description: "발행 전 광고 규정 검토를 거르지 않습니다. 모든 콘텐츠는 규정 통과 후 발행합니다.",
	},
	{
		icon: BarChart3,
		title: "숫자로 말합니다",
		description: "노출이 아니라 상담 인입수로 보고합니다. 매월 수임 KPI를 함께 확인합니다.",
	},
	{
		icon: Layers,
		title: "직군에 산다",
		description: "6개 직군만 다룹니다. 그래서 깊습니다. 넓게 하지 않아서 잘 합니다.",
	},
] as const;

export default function TeamValues() {
	return (
		<section className="bg-white px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Our Way
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							일하는 방식
						</h2>
					</div>
				</Reveal>
				<div className="grid gap-6 md:grid-cols-3">
					{VALUES.map((v, i) => {
						const Icon = v.icon;
						return (
							<Reveal key={v.title} delay={i * 0.1}>
								<div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
									<div className="gradient-brand mb-5 flex h-12 w-12 items-center justify-center rounded-full">
										<Icon className="h-5 w-5 text-white" aria-hidden="true" />
									</div>
									<h3 className="mb-2 font-bold text-foreground text-lg">{v.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
