import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

type CTACardProps = {
	headline?: string;
	sub?: string;
	buttonText?: string;
	variant?: "dark" | "gradient";
};

export const CTACard = ({
	headline = "마케팅 컨설팅으로 시작하세요",
	sub = "진행 의무 없음 · 영업일 1일 내 회신",
	buttonText = "마케팅 컨설팅",
	variant = "dark",
}: CTACardProps) => {
	if (variant === "gradient") {
		return (
			<section className="gradient-brand px-4 py-24 md:py-28">
				<div className="mx-auto max-w-3xl text-center">
					<Reveal>
						<h2 className="mb-4 font-extrabold text-[40px] text-white leading-[1.15] tracking-tight md:text-[56px]">
							{headline}
						</h2>
						<p className="mb-10 text-lg text-white/60 leading-relaxed">{sub}</p>
						<Link
							href="/contact"
							className="inline-block rounded-md bg-white px-8 py-3.5 font-semibold text-[#0a0a0a] text-base transition-opacity hover:opacity-90"
						>
							{buttonText}
						</Link>
					</Reveal>
				</div>
			</section>
		);
	}

	return (
		<section className="px-4 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal>
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
				</Reveal>
			</div>
		</section>
	);
};
