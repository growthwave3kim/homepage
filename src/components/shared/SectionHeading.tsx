import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	eyebrow?: string;
	title: string;
	sub?: string;
	className?: string;
	align?: "left" | "center";
	gradientTitle?: boolean;
}

export default function SectionHeading({
	eyebrow,
	title,
	sub,
	className,
	align = "center",
	gradientTitle = false,
}: SectionHeadingProps) {
	return (
		<div className={cn(align === "center" ? "text-center" : "text-left", className)}>
			{eyebrow && (
				<p className="mb-2 font-semibold text-[#7c3aed] text-[13px] uppercase tracking-[0.25em] md:mb-3">
					{eyebrow}
				</p>
			)}
			<h2
				className={cn(
					"font-bold text-3xl leading-tight tracking-tight md:text-4xl lg:text-[48px]",
					gradientTitle ? "gradient-text" : "text-foreground",
				)}
			>
				{title}
			</h2>
			{sub && (
				<p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed md:mt-4 md:text-lg">
					{sub}
				</p>
			)}
		</div>
	);
}
