"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "border-b border-border/50 bg-background/80 shadow-[0_1px_32px_oklch(0.22_0.035_265/0.06)] backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-[72px] lg:px-8">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <Image
            src="/images/logo.png"
            alt="GrowthWave"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span
            className={cn(
              "text-[17px] font-bold tracking-tight transition-colors duration-300",
              transparent ? "text-white" : "text-foreground",
            )}
          >
            GrowthWave
          </span>
        </Link>

        {/* 데스크탑 네비 */}
        <NavLinks transparent={transparent} />

        {/* 우측 버튼 */}
        <div className="flex items-center gap-3">
          <Link href="/#contact" className="hidden lg:block">
            <button
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300",
                transparent
                  ? "border border-white/20 bg-white/[0.08] text-white backdrop-blur-sm hover:bg-white/[0.14]"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_4px_16px_oklch(0.22_0.035_265/0.25)]",
              )}
            >
              견적문의
            </button>
          </Link>
          <MobileMenu transparent={transparent} />
        </div>
      </div>

      {/* 스크롤 시 하단 미세 라인 */}
      {!transparent && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      )}
    </header>
  );
}
