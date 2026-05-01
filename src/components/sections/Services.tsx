"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { SERVICES } from "@/data/services";

function BlogMockup() {
	return (
		<div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
			<div className="mb-3 flex items-center gap-2">
				<div className="h-2.5 w-2.5 rounded-full bg-red-400" />
				<div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
				<div className="h-2.5 w-2.5 rounded-full bg-green-400" />
				<div className="ml-2 flex-1 rounded-md bg-white px-2 py-1 text-[10px] text-slate-400">
					blog.naver.com/growthwave_law
				</div>
			</div>
			<div className="space-y-2">
				{["이혼 변호사 선임 비용", "상속 소송 절차", "형사 합의금 기준"].map((kw) => (
					<div key={kw} className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-xs">
						<div className="gradient-brand h-4 w-4 rounded" />
						<span className="text-[11px] text-slate-600">{kw}</span>
						<span className="gradient-text ml-auto font-bold text-[10px]">1위</span>
					</div>
				))}
			</div>
		</div>
	);
}

function PhoneMockup() {
	const [gifFailed, setGifFailed] = useState(false);

	return (
		<div className="mx-auto w-[200px]">
			<div className="relative aspect-[9/19] overflow-hidden rounded-[32px] border-[6px] border-slate-800 bg-slate-800 shadow-xl">
				<div className="absolute top-2 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-900" />
				{!gifFailed ? (
					<Image
						src="/jeong-jongwook-reels.gif"
						alt="정종욱 변호사 릴스 미리보기"
						fill
						unoptimized
						className="object-cover"
						onError={() => setGifFailed(true)}
					/>
				) : (
					<div className="gradient-soft flex h-full w-full flex-col items-center justify-center gap-2">
						<div className="gradient-brand h-10 w-10 rounded-full opacity-60" />
						<span className="px-3 text-center text-[10px] text-slate-500">
							릴스 영상
							<br />
							자리입니다
						</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<section id="services" className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="Services"
						title="변호사 사건 수임을 만드는 두 가지 채널"
						className="mb-20"
					/>
				</Reveal>

				<div className="space-y-24">
					{SERVICES.map((service, i) => {
						const isEven = i % 2 === 0;
						const visual = service.index === "01" ? <BlogMockup /> : <PhoneMockup />;

						return (
							<Reveal key={service.index} delay={0.1}>
								<div
									className={`grid items-center gap-12 lg:grid-cols-2 ${
										!isEven ? "lg:[&>:first-child]:order-2" : ""
									}`}
								>
									{/* Visual */}
									<div className="flex items-center justify-center rounded-2xl bg-slate-50 px-8 py-12">
										{visual}
									</div>

									{/* Text */}
									<div>
										<p className="mb-3 font-semibold text-[#7c3aed] text-xs uppercase tracking-[0.25em]">
											{service.index} / {service.category}
										</p>
										<h3 className="mb-4 font-bold text-2xl text-foreground leading-snug md:text-3xl">
											{service.title}
										</h3>
										<p className="mb-8 text-base text-muted-foreground leading-relaxed">
											{service.description}
										</p>

										{/* Stepper */}
										<ol className="flex flex-wrap gap-2">
											{service.steps.map((step, si) => (
												<li key={step.step} className="flex items-center gap-2">
													<span className="gradient-brand flex h-7 w-7 items-center justify-center rounded-full font-bold text-[11px] text-white">
														{step.step}
													</span>
													<span className="font-medium text-foreground text-sm">{step.label}</span>
													{si < service.steps.length - 1 && (
														<span className="text-slate-300 text-sm">→</span>
													)}
												</li>
											))}
										</ol>
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
