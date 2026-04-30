"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/shared/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";

export default function MobileMenu() {
	const [open, setOpen] = useState(false);

	const handleNavClick = (href: string) => {
		setOpen(false);
		if (href.startsWith("#")) {
			const el = document.querySelector(href);
			if (el) el.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger
				className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-slate-100 lg:hidden"
				aria-label="메뉴 열기"
			>
				<MenuIcon className="h-5 w-5" />
			</SheetTrigger>
			<SheetContent side="right" className="w-72 bg-white p-0">
				<div className="flex h-full flex-col">
					<div className="border-slate-100 border-b px-6 py-5">
						<Logo />
					</div>
					<nav className="flex flex-1 flex-col gap-1 p-4">
						{siteConfig.nav.map((item) => (
							<button
								key={item.href}
								type="button"
								onClick={() => handleNavClick(item.href)}
								className="rounded-lg px-4 py-3 text-left font-medium text-[15px] text-foreground transition-colors hover:bg-slate-50"
							>
								{item.label}
							</button>
						))}
					</nav>
					<div className="border-slate-100 border-t p-4">
						<button
							type="button"
							onClick={() => handleNavClick("#contact")}
							className="gradient-brand w-full rounded-full py-3 font-semibold text-sm text-white transition-opacity hover:opacity-90"
						>
							상담문의
						</button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
