import { BookText } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const REGULATIONS = [
	{
		profession: "변호사",
		slug: "lawyer",
		law: "변호사법 §23",
		rule: "변호사 광고에 관한 규정",
		note: "허위·과장·비교 광고 금지. 수임 사건 성공 사례 표현 제한.",
	},
	{
		profession: "의사",
		slug: "doctor",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		note: "효능·치료 결과 과장 금지. 환자 후기·비교 광고 사전 심의 필요.",
	},
	{
		profession: "한의사",
		slug: "hanbang",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		note: "효능 과장·비교 표현 금지. 일부 매체 사전 심의 필요.",
	},
	{
		profession: "변리사",
		slug: "patent",
		law: "변리사법 §23",
		rule: "변리사 광고 기준",
		note: "자격 과장 금지. 성공률 수치 표현 제한.",
	},
	{
		profession: "노무사",
		slug: "labor",
		law: "공인노무사법",
		rule: "광고 기준",
		note: "사건 결과 표방 금지. 타 노무사 비교 광고 금지.",
	},
	{
		profession: "세무사",
		slug: "tax",
		law: "세무사법 §22의2",
		rule: "세무사 광고 기준",
		note: "성공 실적 수치 금지. 수수료 허위 표시 금지.",
	},
];

export default function AdRegulationGuide() {
	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							규정 기반 작업
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							직군별 광고 규정 체크포인트
						</h2>
						<p className="mt-4 text-muted-foreground">
							모든 콘텐츠는 발행 전 직군별 규정을 확인하고 제작합니다.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{REGULATIONS.map((r) => (
							<div key={r.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
								<div className="mb-3 flex items-center gap-3">
									<BookText className="h-5 w-5 shrink-0 text-[#7c3aed]" aria-hidden="true" />
									<span className="font-bold text-foreground">{r.profession}</span>
								</div>
								<p className="mb-2 font-medium text-[#7c3aed] text-xs">
									{r.law} · {r.rule}
								</p>
								<p className="text-muted-foreground text-sm leading-relaxed">{r.note}</p>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
