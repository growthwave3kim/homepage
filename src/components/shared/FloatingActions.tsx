"use client";

import { ChevronUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function FloatingActions() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const onScroll = () => setShowScrollTop(window.scrollY > 400);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<div className="fixed right-5 bottom-20 z-50 flex flex-col items-center gap-2.5 md:right-8 md:bottom-8">
			<a
				href={siteConfig.contact.naverBlog}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="네이버 블로그"
				className="flex h-11 w-11 items-center justify-center rounded-full bg-[#03c75a] text-white shadow-lg transition-all duration-300 hover:scale-110"
			>
				<span className="sr-only">네이버 블로그</span>
				<span className="font-bold text-sm" aria-hidden="true">
					N
				</span>
			</a>
			<a
				href={siteConfig.contact.kakaoOpenChat}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="카카오톡 채널"
				className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fee500] text-[#3c1e1e] shadow-lg transition-all duration-300 hover:scale-110"
			>
				<span className="sr-only">카카오톡 채널</span>
				<MessageCircle className="h-5 w-5" aria-hidden="true" />
			</a>
			{showScrollTop && (
				<button
					type="button"
					onClick={scrollToTop}
					aria-label="맨 위로 이동"
					className="flex h-11 w-11 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#6d28d9]"
				>
					<ChevronUp className="h-5 w-5" />
				</button>
			)}
		</div>
	);
}
