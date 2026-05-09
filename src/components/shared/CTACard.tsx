import Link from "next/link";

type CTACardProps = {
	headline?: string;
	sub?: string;
	buttonText?: string;
};

export const CTACard = ({
	headline = "상담으로 시작하세요",
	sub = "진행 의무 없음 · 영업일 1일 내 회신",
	buttonText = "상담 신청",
}: CTACardProps) => {
	return (
		<section className="px-4 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<div className="rounded-md bg-[#0a0a0a] p-6 sm:p-12">
					<h2 className="mb-3 font-bold text-3xl text-white leading-tight tracking-tight md:text-4xl">
						{headline}
					</h2>
					<p className="mb-8 text-white/60">{sub}</p>
					<Link
						href="/contact"
						className="block rounded-md border border-white/20 bg-white px-8 py-3.5 font-semibold text-[#0a0a0a] text-base transition-opacity hover:opacity-90 sm:inline-block"
					>
						{buttonText}
					</Link>
				</div>
			</div>
		</section>
	);
};
