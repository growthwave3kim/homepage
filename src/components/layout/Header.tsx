"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/shared/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

function handleAnchorClick(href: string) {
	if (href.startsWith("#")) {
		const el = document.querySelector(href);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	}
}

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 h-20 transition-all duration-300",
				scrolled
					? "border-slate-200 border-b bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm"
					: "bg-white",
			)}
		>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				{/* Logo */}
				<button
					type="button"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
					className="transition-opacity hover:opacity-80"
					aria-label="Growth Wave 홈으로"
				>
					<Logo />
				</button>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
					{siteConfig.nav.map((item) => (
						<button
							key={item.href}
							type="button"
							onClick={() => handleAnchorClick(item.href)}
							className="rounded-lg px-4 py-2 font-medium text-slate-600 text-sm transition-colors hover:bg-slate-50 hover:text-foreground"
						>
							{item.label}
						</button>
					))}
				</nav>

				{/* Right */}
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => handleAnchorClick("#contact")}
						className="gradient-brand hidden rounded-full px-5 py-2.5 font-semibold text-sm text-white shadow-[0_4px_16px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90 lg:block"
					>
						상담문의
					</button>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
}
