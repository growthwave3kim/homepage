type LogoProps = {
	variant?: "dark" | "light";
	className?: string;
};

export const Logo = ({ variant = "dark", className = "" }: LogoProps) => {
	return (
		<span
			className={`font-bold text-[20px] tracking-[-0.02em] ${
				variant === "light" ? "text-white" : "text-foreground"
			} ${className}`}
		>
			Growth Wave
		</span>
	);
};
