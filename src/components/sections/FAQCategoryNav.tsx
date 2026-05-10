"use client";

import { useEffect, useRef, useState } from "react";
import { FAQ_CATEGORIES } from "@/data/faq";
import { cn } from "@/lib/utils";

const CATEGORY_IDS: Record<string, string> = {
	비용: "faq-cost",
	기간·계약: "faq-contract",
	규정: "faq-regulation",
	성과: "faq-results",
	채널: "faq-channel",
};

export const FAQCategoryNav = () => {
	const [active, setActive] = useState<string>(FAQ_CATEGORIES[0]);
	const ticking = useRef(false);

	useEffect(() => {
		const onScroll = () => {
			if (ticking.current) return;
			ticking.current = true;
			requestAnimationFrame(() => {
				const offset = 140;
				let current = FAQ_CATEGORIES[0] as string;
				for (const cat of FAQ_CATEGORIES) {
					const el = document.getElementById(CATEGORY_IDS[cat]);
					if (el && el.getBoundingClientRect().top <= offset) {
						current = cat;
					}
				}
				setActive(current);
				ticking.current = false;
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollTo = (cat: string) => {
		const el = document.getElementById(CATEGORY_IDS[cat]);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.scrollY - 100;
		window.scrollTo({ top, behavior: "smooth" });
	};

	return (
		<div className="sticky top-[64px] z-30 border-slate-100 border-b bg-white/95 backdrop-blur-sm">
			<div className="mx-auto max-w-3xl px-4">
				<div className="scrollbar-none flex gap-1 overflow-x-auto py-3">
					{FAQ_CATEGORIES.map((cat) => (
						<button
							key={cat}
							type="button"
							onClick={() => scrollTo(cat)}
							className={cn(
								"shrink-0 rounded-full px-4 py-1.5 font-semibold text-sm transition-all duration-200",
								active === cat
									? "bg-[#7c3aed] text-white"
									: "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#0a0a0a]",
							)}
						>
							{cat}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
