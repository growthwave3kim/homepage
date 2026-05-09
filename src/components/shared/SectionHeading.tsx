import { cn } from "@/lib/utils";

type SectionHeadingProps = {
	eyebrow?: string;
	title: string;
	sub?: string;
	className?: string;
	align?: "left" | "center";
	gradientTitle?: boolean;
};

export const SectionHeading = ({
	eyebrow,
	title,
	sub,
	className,
	align = "center",
}: SectionHeadingProps) => {
	return (
		<div className={cn(align === "center" ? "text-center" : "text-left", className)}>
			{eyebrow && (
				<p className="mb-2 font-mono font-semibold text-[#a78bfa] text-[13px] uppercase tracking-[0.25em] md:mb-3">
					{eyebrow}
				</p>
			)}
			<h2 className="font-bold text-3xl text-foreground leading-tight tracking-tight md:text-4xl lg:text-[48px]">
				{title}
			</h2>
			{sub && (
				<p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground leading-relaxed md:mt-4 md:text-lg">
					{sub}
				</p>
			)}
		</div>
	);
};
