"use client";

import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CASES } from "@/data/cases";
import { PROFESSIONS } from "@/data/professions";

export default function ProfessionTabs() {
	return (
		<section className="bg-slate-50 px-4 py-20">
			<div className="mx-auto max-w-6xl">
				<p className="mb-3 text-center font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					Profession
				</p>
				<h2 className="mb-12 text-center font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
					직군별 맞춤 접근법
				</h2>

				<Tabs defaultValue="lawyer">
					<TabsList
						variant="line"
						className="mb-8 h-auto w-full flex-wrap justify-start gap-1 border-slate-200 border-b pb-0"
					>
						{PROFESSIONS.map((p) => (
							<TabsTrigger key={p.slug} value={p.slug} className="rounded-none pb-3 text-sm">
								{p.label}
								{p.adRule && (
									<span className="ml-1.5 rounded-full bg-amber-100 px-1.5 py-0.5 font-medium text-[10px] text-amber-600">
										규정
									</span>
								)}
							</TabsTrigger>
						))}
					</TabsList>

					{PROFESSIONS.map((p) => {
						const professionCases = CASES.filter((c) => c.profession === p.slug);
						return (
							<TabsContent key={p.slug} value={p.slug} className="mt-0">
								<div className="grid gap-8 md:grid-cols-2">
									{/* Key points */}
									<div className="rounded-2xl bg-white p-8 shadow-sm">
										<h3 className="mb-2 font-bold text-foreground text-xl">{p.label} 마케팅</h3>
										<p className="mb-6 text-muted-foreground text-sm leading-relaxed">
											{p.description}
										</p>
										<ul className="space-y-3">
											{p.keyPoints.map((kp) => (
												<li key={kp} className="flex items-start gap-3">
													<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7c3aed]" />
													<span className="text-foreground text-sm">{kp}</span>
												</li>
											))}
										</ul>
										{p.adRule && (
											<div className="mt-6 rounded-xl bg-amber-50 px-4 py-3">
												<p className="font-medium text-amber-700 text-xs">
													⚠ 광고 규정이 적용되는 직군입니다. 모든 콘텐츠는 관련 규정 검토 후
													발행됩니다.
												</p>
											</div>
										)}
									</div>

									{/* Cases */}
									<div className="flex flex-col gap-4">
										{professionCases.length > 0 ? (
											professionCases.map((c) => (
												<div
													key={`${c.anonymous}-${c.field}`}
													className="rounded-2xl bg-white p-6 shadow-sm"
												>
													<div className="mb-3 flex items-center justify-between">
														<span className="rounded-full bg-[#7c3aed]/10 px-3 py-1 font-medium text-[#7c3aed] text-xs">
															{c.field}
														</span>
														<span className="font-bold text-[#7c3aed] text-lg">{c.metric}</span>
													</div>
													<p className="mb-2 text-foreground text-sm leading-relaxed">
														&ldquo;{c.quote}&rdquo;
													</p>
													<p className="text-muted-foreground text-xs">
														{c.anonymous} · {c.period}
													</p>
												</div>
											))
										) : (
											<div className="flex items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm">
												<p className="text-muted-foreground text-sm">
													{p.label} 사례를 준비 중입니다.
													<br />
													문의하시면 유사 사례를 안내드립니다.
												</p>
											</div>
										)}
									</div>
								</div>
							</TabsContent>
						);
					})}
				</Tabs>
			</div>
		</section>
	);
}
