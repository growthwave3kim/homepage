import Link from "next/link";

type CTACardProps = {
	headline?: string;
	sub?: string;
	buttonText?: string;
};

export const CTACard = ({
	headline = "무료 상담으로 시작하세요",
	sub = "첫 상담 무료 · 진행 의무 없음 · 영업일 1일 내 회신",
	buttonText = "무료 상담 신청",
}: CTACardProps) => {
	return (
		<section className="px-4 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<div className="rounded-3xl bg-gradient-to-br from-[#7c3aed]/8 via-[#4338ca]/6 to-[#1e3a8a]/8 p-6 ring-1 ring-[#7c3aed]/15 sm:p-12">
					<h2 className="mb-3 font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl">
						{headline}
					</h2>
					<p className="mb-8 text-muted-foreground">{sub}</p>
					<Link
						href="/contact"
						className="gradient-brand block rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90 sm:inline-block"
					>
						{buttonText}
					</Link>
				</div>
			</div>
		</section>
	);
};
