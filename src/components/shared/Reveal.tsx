"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
};

export const Reveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 0.6,
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });
	const prefersReducedMotion = useReducedMotion();

	const directionMap = {
		up: { y: 24, x: 0 },
		down: { y: -24, x: 0 },
		left: { x: 24, y: 0 },
		right: { x: -24, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initial = prefersReducedMotion
		? { opacity: 0 }
		: { opacity: 0, ...directionMap[direction] };

	const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

	const transition = prefersReducedMotion
		? { duration: 0.3, delay, ease: "easeOut" as const }
		: { duration, delay, ease: [0.22, 1, 0.36, 1] as const };

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={animate}
			transition={transition}
			className={className}
		>
			{children}
		</motion.div>
	);
};
