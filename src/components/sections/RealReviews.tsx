import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { ReviewCardBubble } from "@/components/shared/ReviewCardBubble";
import { ReviewCardPhone } from "@/components/shared/ReviewCardPhone";
import { ReviewCardThumb } from "@/components/shared/ReviewCardThumb";
import { REAL_REVIEWS_ROW1, REAL_REVIEWS_ROW2 } from "@/data/real-reviews";

const TRUST_METRICS = [
	{ value: "전문직", label: "전용 서비스" },
	{ value: "1일", label: "평균 응답 영업일" },
	{ value: "익명", label: "이름·소속 처리" },
	{ value: "전원", label: "동의 후 게시" },
] as const;

const renderCard = (review: (typeof REAL_REVIEWS_ROW1)[number]) => {
	if (review.type === "phone") return <ReviewCardPhone key={review.id} review={review} />;
	if (review.type === "bubble") return <ReviewCardBubble key={review.id} review={review} />;
	return <ReviewCardThumb key={review.id} review={review} />;
};

export const RealReviews = () => {
	const row1 = [
		...REAL_REVIEWS_ROW1.map((r) => ({ ...r, _key: `a-${r.id}` })),
		...REAL_REVIEWS_ROW1.map((r) => ({ ...r, _key: `b-${r.id}` })),
		...REAL_REVIEWS_ROW1.map((r) => ({ ...r, _key: `c-${r.id}` })),
		...REAL_REVIEWS_ROW1.map((r) => ({ ...r, _key: `d-${r.id}` })),
	];
	const row2 = [
		...REAL_REVIEWS_ROW2.map((r) => ({ ...r, _key: `a-${r.id}` })),
		...REAL_REVIEWS_ROW2.map((r) => ({ ...r, _key: `b-${r.id}` })),
		...REAL_REVIEWS_ROW2.map((r) => ({ ...r, _key: `c-${r.id}` })),
		...REAL_REVIEWS_ROW2.map((r) => ({ ...r, _key: `d-${r.id}` })),
	];

	return (
		<section className="overflow-hidden bg-white py-24 md:py-32">
			{/* Header */}
			<Reveal>
				<div className="mx-auto mb-12 max-w-3xl px-4 text-center">
					<p className="mb-4 font-semibold text-[#a78bfa] text-xs uppercase tracking-[0.3em]">
						Real Voices
					</p>
					<h2 className="font-extrabold text-3xl text-[#0a0a0a] leading-tight tracking-tight md:text-5xl">
						클라이언트 <span className="gradient-text">후기</span>
					</h2>
					<p className="mt-5 text-base text-slate-500 leading-relaxed md:text-lg">
						함께한 클라이언트가 직접 보낸 카카오톡 메시지입니다.
						<br className="hidden md:block" />
						이름·소속은 익명 처리됩니다.
					</p>
				</div>
			</Reveal>

			{/* Trust strip */}
			<Reveal>
				<div className="mx-auto mb-16 max-w-3xl px-4">
					<div className="grid grid-cols-2 divide-x divide-y divide-slate-100 rounded-md border border-slate-100 md:grid-cols-4 md:divide-y-0">
						{TRUST_METRICS.map((m) => (
							<div key={m.label} className="px-6 py-4 text-center">
								<p className="font-bold text-[#7c3aed] text-lg">{m.value}</p>
								<p className="mt-1 text-slate-500 text-xs">{m.label}</p>
							</div>
						))}
					</div>
				</div>
			</Reveal>

			{/* Marquee rows */}
			<div className="marquee-wrap flex flex-col gap-6">
				<div className="marquee-row left flex items-end gap-6">
					{row1.map((review) => (
						<div key={review._key} className="shrink-0">
							{renderCard(review)}
						</div>
					))}
				</div>

				<div className="marquee-row right flex items-start gap-6">
					{row2.map((review) => (
						<div key={review._key} className="shrink-0">
							{renderCard(review)}
						</div>
					))}
				</div>
			</div>

			{/* Bottom strip */}
			<div className="mx-auto mt-12 max-w-3xl border-slate-100 border-t px-4 pt-8 text-center">
				<p className="text-slate-400 text-xs leading-relaxed">
					이름·소속은 익명 처리됩니다.
					<br />
					원본 스크린샷은 상담 시 요청하시면 제공해드립니다.
				</p>
				<Link
					href="/contact"
					className="mt-4 inline-flex items-center gap-1.5 border-current border-b pb-0.5 font-semibold text-[#0a0a0a] text-sm transition-opacity hover:opacity-70"
				>
					지금 상담 신청하기 →
				</Link>
			</div>
		</section>
	);
};
