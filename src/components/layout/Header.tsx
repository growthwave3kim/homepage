"use client";

import { ChevronDown, Clapperboard, Crown, FileText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/shared/Logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const CHILD_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
	Clapperboard,
	Crown,
	FileText,
};

export const Header = () => {
	const [scrolled, setScrolled] = useState(false);
	const [openMenu, setOpenMenu] = useState<string | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={cn(
				"fixed top-0 right-0 left-0 z-50 h-16 border-b transition-all duration-300 md:h-20",
				scrolled
					? "border-slate-200 bg-white/95 shadow-[0_1px_12px_rgba(0,0,0,0.06)] backdrop-blur-sm"
					: "border-transparent bg-white",
			)}
		>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				{/* Logo */}
				<Link
					href="/"
					className="transition-opacity hover:opacity-80"
					aria-label="Growth Wave 홈으로"
					onClick={() => {
						if (pathname === "/") window.scrollTo({ top: 0, behavior: "instant" });
					}}
				>
					<Logo />
				</Link>

				{/* Desktop nav */}
				<nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
					{siteConfig.nav.map((item) => {
						if (item.children) {
							const isActive = !!item.matchPrefix && pathname.startsWith(item.matchPrefix);
							const isOpen = openMenu === item.label;
							return (
								// biome-ignore lint/a11y/noStaticElementInteractions: hover detection wrapper for dropdown
								<div
									key={item.label}
									className="relative"
									onMouseEnter={() => setOpenMenu(item.label)}
									onMouseLeave={() => setOpenMenu(null)}
								>
									{/* Trigger */}
									<button
										type="button"
										className={cn(
											"flex items-center gap-1 rounded-lg px-4 py-2 font-medium text-sm transition-colors hover:bg-slate-50",
											isActive ? "text-[#7c3aed]" : "text-slate-600 hover:text-foreground",
										)}
									>
										{item.label}
										<ChevronDown
											className={cn(
												"h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-200",
												isOpen && "rotate-180",
											)}
											aria-hidden="true"
										/>
									</button>

									{/* Dropdown */}
									<div
										className={cn(
											"absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200",
											isOpen ? "visible opacity-100" : "invisible opacity-0",
										)}
									>
										<div className="w-[360px] rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
											{item.children.map((child) => {
												const ChildIcon = CHILD_ICON_MAP[child.icon];
												const isChildActive =
													pathname === child.href || pathname.startsWith(`${child.href}/`);
												return (
													<Link
														key={child.href}
														href={child.href}
														onClick={() => setOpenMenu(null)}
														className={cn(
															"flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-slate-50",
															isChildActive && "bg-[#7c3aed]/6 text-[#7c3aed]",
														)}
													>
														<div className="gradient-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
															{ChildIcon && (
																<ChildIcon className="h-4 w-4 text-white" aria-hidden="true" />
															)}
														</div>
														<div className="min-w-0 flex-1">
															<div className="flex items-center gap-2">
																<span
																	className={cn(
																		"font-semibold text-sm",
																		isChildActive ? "text-[#7c3aed]" : "text-foreground",
																	)}
																>
																	{child.label}
																</span>
																{child.flagship && <span className="badge-purple">대표</span>}
															</div>
															<p className="truncate text-muted-foreground text-xs">
																{child.description}
															</p>
														</div>
													</Link>
												);
											})}
										</div>
									</div>
								</div>
							);
						}

						const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"relative rounded-lg px-4 py-2 font-medium text-sm transition-colors hover:bg-slate-50 hover:text-foreground",
									isActive
										? "text-[#7c3aed] after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[#7c3aed] after:content-['']"
										: "text-slate-600",
								)}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				{/* Right */}
				<div className="flex items-center gap-2">
					<a
						href="/growthwave-brochure.pdf"
						download="Growth Wave 회사소개서.pdf"
						className="hidden rounded-full border border-slate-200 px-4 py-2.5 font-semibold text-foreground text-sm transition-colors hover:bg-slate-50 lg:block"
					>
						회사소개서
					</a>
					<Link
						href="/contact"
						className="gradient-brand hidden rounded-full px-5 py-2.5 font-semibold text-sm text-white shadow-[0_4px_16px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90 lg:block"
					>
						무료 상담 신청
					</Link>
					<MobileMenu />
				</div>
			</div>
		</header>
	);
};
