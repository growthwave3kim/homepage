"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none" | "scale";
	duration?: number;
};

export const Reveal = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
	duration = 1.1,
}: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const scrollDirRef = useRef<"down" | "up">("down");
	const isInView = useInView(ref, { once: false, margin: "-120px" });
	const prefersReducedMotion = useReducedMotion();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let lastY = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			scrollDirRef.current = y > lastY ? "down" : "up";
			lastY = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (isInView) {
			setVisible(true);
		} else if (scrollDirRef.current === "up") {
			// 위로 스크롤 중 뷰포트 아래로 벗어남 → 다음 스크롤다운을 위해 리셋
			setVisible(false);
		}
		// 아래로 스크롤 중 뷰포트 위로 벗어남 → 경계 지점 루프 방지를 위해 visible 유지
	}, [isInView]);

	const directionMap = {
		up: { y: 90, x: 0 },
		down: { y: -90, x: 0 },
		left: { x: 90, y: 0 },
		right: { x: -90, y: 0 },
		none: { x: 0, y: 0 },
	};

	const initial = prefersReducedMotion
		? { opacity: 0 }
		: direction === "scale"
			? { opacity: 0, scale: 0.78 }
			: { opacity: 0, ...directionMap[direction] };

	const animate = visible
		? direction === "scale"
			? { opacity: 1, scale: 1, x: 0, y: 0 }
			: { opacity: 1, x: 0, y: 0 }
		: initial;

	const shouldAnimate = visible && scrollDirRef.current === "down" && !prefersReducedMotion;

	const transition = shouldAnimate
		? { duration, delay, ease: [0.22, 1, 0.36, 1] as const }
		: { duration: 0, delay: 0 };

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
