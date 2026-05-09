import { Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroProps = {
	eyebrow: string;
	title: string;
	titleHighlight?: string;
	sub: string;
	ctaText?: string;
	ctaHref?: string;
	secondaryText?: string;
	secondaryHref?: string;
	secondaryDownload?: boolean;
	children?: React.ReactNode;
	className?: string;
};

export const PageHero = ({
	eyebrow,
	title,
	titleHighlight,
	sub,
	ctaText = "상담 신청",
	ctaHref = "/contact",
	secondaryText,
	secondaryHref,
	secondaryDownload = false,
	children,
	className,
}: PageHeroProps) => {
	return (
		<section className={cn("bg-white px-4 py-24 pt-32 text-center md:py-32 md:pt-40", className)}>
			<div className="mx-auto max-w-4xl">
				<p className="mb-5 font-mono font-semibold text-[#a78bfa] text-sm uppercase tracking-[0.25em]">
					{eyebrow}
				</p>
				<h1 className="mb-5 font-bold text-[28px] text-foreground leading-[1.2] tracking-tight sm:text-[34px] md:text-[56px] md:leading-[1.12] lg:text-[68px]">
					{titleHighlight ? (
						<>
							{title}
							<br />
							<span className="text-[#0a0a0a]">{titleHighlight}</span>
						</>
					) : (
						title
					)}
				</h1>
				<p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl">{sub}</p>

				<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
					<Link
						href={ctaHref}
						className="gradient-brand rounded-md px-8 py-3.5 font-semibold text-base text-white transition-opacity hover:opacity-80"
					>
						{ctaText}
					</Link>
					{secondaryText &&
						secondaryHref &&
						(secondaryDownload ? (
							<a
								href={secondaryHref}
								download
								className="flex items-center gap-2 rounded-md border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
							>
								<Download className="h-4 w-4" aria-hidden="true" />
								{secondaryText}
							</a>
						) : (
							<Link
								href={secondaryHref}
								className="rounded-md border border-slate-200 px-8 py-3.5 font-semibold text-base text-foreground transition-colors hover:border-slate-300 hover:bg-slate-50"
							>
								{secondaryText}
							</Link>
						))}
				</div>

				{children && <div className="mt-12">{children}</div>}
			</div>
		</section>
	);
};
