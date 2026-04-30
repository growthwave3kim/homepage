interface LogoProps {
	variant?: "dark" | "light";
	className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
	return (
		<span
			className={`font-bold text-[19px] tracking-tight ${
				variant === "light" ? "text-white" : "text-foreground"
			} ${className}`}
		>
			Growth Wave
		</span>
	);
}
