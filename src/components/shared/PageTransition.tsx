"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is the trigger, not consumed
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname]);

	return (
		<motion.div
			key={pathname}
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
};
