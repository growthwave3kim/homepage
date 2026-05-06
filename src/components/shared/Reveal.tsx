"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface RevealProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
}

export default function Reveal({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 0.6,
}: RevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	const directionMap = {
		up: { y: 32, x: 0 },
		down: { y: -32, x: 0 },
		left: { x: 32, y: 0 },
		right: { x: -32, y: 0 },
		none: { x: 0, y: 0 },
	};

	// Omit opacity from initial so server-rendered content is visible before hydration.
	// This prevents LCP elements from being invisible on slow connections.
	const initial = directionMap[direction];

	return (
		<motion.div
			ref={ref}
			initial={initial}
			animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
			transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
