"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        transparent
          ? "bg-transparent"
          : "border-b bg-background/95 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="GrowthWave"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors duration-300",
              transparent ? "text-white" : "text-foreground",
            )}
          >
            GrowthWave
          </span>
        </Link>

        <NavLinks transparent={transparent} />

        <div className="flex items-center gap-3">
          <Link href="/#contact" className="hidden lg:block">
            <Button
              size="sm"
              variant={transparent ? "outline" : "default"}
              className={cn(
                "transition-all duration-300",
                transparent &&
                  "border-white/20 bg-transparent text-white hover:bg-white/10",
              )}
            >
              견적문의
            </Button>
          </Link>
          <MobileMenu transparent={transparent} />
        </div>
      </div>
    </header>
  );
}
