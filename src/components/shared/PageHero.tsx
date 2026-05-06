import Link from "next/link";
import { cn } from "@/lib/utils";

interface PageHeroProps {
	eyebrow: string;
	title: string;
	titleHighlight?: string;
	sub: string;
	ctaText?: string;
	ctaHref?: string;
	secondaryText?: string;
	secondaryHref?: string;
	children?: React.ReactNode;
	className?: string;
}

export default function PageHero({
	eyebrow,
	title,
	titleHighlight,
	sub,
	ctaText = "무료 상담 신청",
	ctaHref = "/contact",
	secondaryText,
	secondaryHref,
	children,
	className,
}: PageHeroProps) {
	return (
		<section
			className={cn(
				"relative overflow-hidden bg-white px-4 py-20 pt-28 text-center md:py-28 md:pt-32",
				className,
			)}
		>
			{/* Background blobs */}
			<div
				className="pointer-events-none absolute top-[-5%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#7c3aed]/8 blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="pointer-events-none absolute bottom-[-5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-[#1e3a8a]/8 blur-3xl"
				aria-hidden="true"
			/>

			<div className="relative z-10 mx-auto max-w-4xl">
				<p className="mb-5 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					{eyebrow}
				</p>
				<h1 className="mb-5 font-bold text-[28px] text-foreground leading-[1.2] tracking-tight sm:text-[34px] md:text-[56px] md:leading-[1.12] lg:text-[68px]">
					{titleHighlight ? (
						<>
							{title}
							<br />
							<span className="gradient-text">{titleHighlight}</span>
						</>
					) : (
						title
					)}
				</h1>
				<p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl">{sub}</p>

				<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
					<Link
						href={ctaHref}
						className="gradient-brand rounded-full px-8 py-3.5 font-semibold text-base text-white shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-opacity hover:opacity-90"
					>
						{ctaText}
					</Link>
					{secondaryText && secondaryHref && (
						<Link
							href={secondaryHref}
							className="rounded-full border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
						>
							{secondaryText}
						</Link>
					)}
				</div>

				{children && <div className="mt-12">{children}</div>}
			</div>
		</section>
	);
}
