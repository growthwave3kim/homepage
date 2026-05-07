import { ArrowRight, BookText } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const REGULATIONS = [
	{
		profession: "변호사",
		slug: "lawyer",
		law: "변호사법 §23",
		rule: "변호사 광고에 관한 규정",
		allowed: ["법률 서비스 분야·전문 영역 소개", "연락처·사무소 위치 안내", "학력·경력·논문 게재"],
		prohibited: ["수임 사건 성공률·결과 보장 표현", "다른 변호사와의 비교 광고", "허위·과장 표현"],
	},
	{
		profession: "의사",
		slug: "doctor",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["진료 과목·전문 분야 안내", "의료진 학력·경력 소개", "의료기관 시설·장비 소개"],
		prohibited: [
			"치료 효과·완치 보장 표현",
			"환자 후기·경험담 (사전 심의 없이)",
			"다른 의료기관과의 비교 광고",
		],
	},
	{
		profession: "한의사",
		slug: "hanbang",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["한방 진료 과목·치료법 안내", "의료진 경력·학력 소개", "시설·장비 현황 안내"],
		prohibited: ["효능 과장·치료 결과 보장", "특정 질환 완치 표현", "비교 광고 (사전 심의 없이)"],
	},
	{
		profession: "수의사",
		slug: "vet",
		law: "수의사법 §12",
		rule: "수의사 광고 기준",
		allowed: ["진료 과목·전문 분야 소개", "의료진 경력·학력 안내", "진료 시간·위치 안내"],
		prohibited: ["치료 결과 보장 표현", "의약품·시술 효능 과장", "허위·과장 광고"],
	},
	{
		profession: "노무사",
		slug: "labor",
		law: "공인노무사법",
		rule: "광고 기준",
		allowed: ["취급 업무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["사건 처리 결과 표방", "타 노무사와의 비교 광고", "수임료 허위 표시"],
	},
	{
		profession: "세무사",
		slug: "tax",
		law: "세무사법 §22의2",
		rule: "세무사 광고 기준",
		allowed: ["취급 세무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["성공 실적·절세 수치 보장", "다른 세무사와의 비교 광고", "수수료 허위 표시"],
	},
];

interface AdRegulationGuideProps {
	preview?: boolean;
}

export default function AdRegulationGuide({ preview = false }: AdRegulationGuideProps) {
	const items = preview ? REGULATIONS.slice(0, 4) : REGULATIONS;

	return (
		<section className="bg-slate-50 px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal>
					<div className="mb-12 text-center">
						<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
							Regulation
						</p>
						<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
							직군별 광고 규정을 직접 검토합니다
						</h2>
						<p className="mt-4 text-muted-foreground">
							모든 콘텐츠는 발행 전 해당 직군의 광고 규정을 확인하고 제작합니다.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-{preview ? '2' : '3'}">
						<div
							className={
								preview
									? "grid gap-4 sm:grid-cols-2 col-span-full"
									: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 col-span-full"
							}
						>
							{items.map((r) => (
								<div key={r.slug} className="rounded-2xl border border-slate-200 bg-white p-6">
									<div className="mb-4 flex items-center gap-3">
										<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/10">
											<BookText className="h-4 w-4 text-[#7c3aed]" aria-hidden="true" />
										</div>
										<div>
											<p className="font-bold text-foreground">{r.profession}</p>
											<p className="text-[#7c3aed] text-xs">
												{r.law} · {r.rule}
											</p>
										</div>
									</div>
									<div className="space-y-3">
										<div>
											<p className="mb-1.5 font-semibold text-emerald-700 text-xs uppercase tracking-wide">
												가능
											</p>
											<ul className="space-y-1">
												{r.allowed.map((a) => (
													<li key={a} className="flex items-start gap-1.5">
														<span className="mt-0.5 text-emerald-500 text-xs">✓</span>
														<span className="text-foreground text-xs leading-relaxed">{a}</span>
													</li>
												))}
											</ul>
										</div>
										<div>
											<p className="mb-1.5 font-semibold text-red-600 text-xs uppercase tracking-wide">
												금지
											</p>
											<ul className="space-y-1">
												{r.prohibited.map((p) => (
													<li key={p} className="flex items-start gap-1.5">
														<span className="mt-0.5 text-red-400 text-xs">✕</span>
														<span className="text-muted-foreground text-xs leading-relaxed">{p}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</Reveal>

				{preview && (
					<Reveal>
						<div className="mt-8 text-center">
							<Link
								href="/regulation"
								className="inline-flex items-center gap-2 font-semibold text-[#7c3aed] text-sm transition-gap hover:gap-3"
							>
								6개 직군 전체 광고 규정 가이드 보기
								<ArrowRight className="h-4 w-4" />
							</Link>
						</div>
					</Reveal>
				)}
			</div>
		</section>
	);
}
