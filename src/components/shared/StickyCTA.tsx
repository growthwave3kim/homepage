"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function StickyCTA() {
	const [visible, setVisible] = useState(false);
	const pathname = usePathname();

	// Hide on the contact page itself
	const isContactPage = pathname === "/contact";

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (isContactPage) return null;

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 16 }}
					transition={{ duration: 0.22 }}
					className="fixed right-4 bottom-6 z-40 md:hidden"
				>
					<Link
						href="/contact"
						className="gradient-brand flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-sm text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)] transition-opacity hover:opacity-90"
						aria-label="무료 상담 신청"
					>
						무료 상담 신청
					</Link>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
