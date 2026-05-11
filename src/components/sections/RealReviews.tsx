"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { ReviewCardBubble } from "@/components/shared/ReviewCardBubble";
import { ReviewCardPhone } from "@/components/shared/ReviewCardPhone";
import { ReviewCardThumb } from "@/components/shared/ReviewCardThumb";
import { REAL_REVIEWS_ROW1, REAL_REVIEWS_ROW2 } from "@/data/real-reviews";

const renderCard = (review: (typeof REAL_REVIEWS_ROW1)[number]) => {
	if (review.type === "phone") return <ReviewCardPhone key={review.id} review={review} />;
	if (review.type === "bubble") return <ReviewCardBubble key={review.id} review={review} />;
	return <ReviewCardThumb key={review.id} review={review} />;
};

export const RealReviews = () => {
	return (
		<section className="overflow-hidden bg-white py-24 md:py-32">
			{/* Header */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-3xl px-4 text-center">
					<p className="mb-4 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Real Voices
					</p>
					<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						직접 겪은 <span className="gradient-text">이야기입니다</span>
					</h2>
					<p className="mt-5 text-base text-slate-500 leading-relaxed md:text-lg">
						상담 문의가 늘어난 전문직 대표들의 실제 후기입니다.
					</p>
				</div>
			</Reveal>

			{/* Marquee rows */}
			<div className="flex flex-col gap-6">
				<Marquee speed={40} gradient={false}>
					{REAL_REVIEWS_ROW1.map((review) => (
						<div key={review.id} className="mr-6 flex items-end">
							{renderCard(review)}
						</div>
					))}
				</Marquee>
				<Marquee speed={30} direction="right" gradient={false}>
					{REAL_REVIEWS_ROW2.map((review) => (
						<div key={review.id} className="mr-6 flex items-start">
							{renderCard(review)}
						</div>
					))}
				</Marquee>
			</div>

			{/* Bottom strip */}
			<div className="mx-auto mt-12 max-w-3xl border-slate-100 border-t px-4 pt-8 text-center">
				<Link
					href="/contact"
					className="inline-flex items-center gap-1.5 border-current border-b pb-0.5 font-semibold text-[#0a0a0a] text-sm transition-opacity hover:opacity-70"
				>
					마케팅 컨설팅 받기 →
				</Link>
			</div>
		</section>
	);
};
