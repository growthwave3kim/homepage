import { ArrowRight, BookText } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { REGULATIONS } from "@/data/regulations";

type AdRegulationGuideProps = {
	preview?: boolean;
};

export const AdRegulationGuide = ({ preview = false }: AdRegulationGuideProps) => {
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
					<div
						className={
							preview ? "grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
													<span className="text-muted-foreground text-xs leading-relaxed">
														{p}
													</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
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
};
