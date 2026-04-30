"use client";

import Reveal from "@/components/shared/Reveal";
import { siteConfig } from "@/config/site";

export default function CTA() {
	return (
		<section className="relative overflow-hidden px-4 py-24">
			<div className="gradient-brand absolute inset-0" aria-hidden="true" />
			{/* Wave decor top */}
			<svg
				viewBox="0 0 1440 40"
				className="absolute top-0 w-full opacity-20"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<path d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,0 L0,0 Z" fill="white" />
			</svg>

			<div className="relative z-10 mx-auto max-w-3xl text-center text-white">
				<Reveal>
					<h2 className="mb-4 font-bold text-3xl leading-tight md:text-4xl lg:text-5xl">
						수임으로 이어지는 마케팅,
						<br />
						지금 시작하세요
					</h2>
					<p className="mb-10 text-base text-white/75">상담은 무료이며, 진행 의무가 없습니다.</p>
					<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						<button
							type="button"
							onClick={() =>
								document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
							}
							className="rounded-full bg-white px-8 py-3.5 font-semibold text-[#4338ca] text-base shadow-lg transition-shadow hover:shadow-xl"
						>
							무료 상담 신청
						</button>
						<a
							href={`mailto:${siteConfig.contact.email}`}
							className="rounded-full border border-white/30 px-8 py-3.5 font-semibold text-base text-white transition-colors hover:bg-white/10"
						>
							이메일 문의
						</a>
					</div>
				</Reveal>
			</div>

			{/* Wave decor bottom */}
			<svg
				viewBox="0 0 1440 40"
				className="absolute bottom-0 w-full opacity-20"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<path d="M0,20 C240,0 480,40 720,20 C960,0 1200,40 1440,20 L1440,40 L0,40 Z" fill="white" />
			</svg>
		</section>
	);
}
