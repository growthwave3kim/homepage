"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navigation";

interface NavLinksProps {
  transparent: boolean;
}

export default function NavLinks({ transparent }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            transparent
              ? pathname.startsWith(item.href)
                ? "text-white"
                : "text-white/70 hover:text-white"
              : pathname.startsWith(item.href)
                ? "text-primary"
                : "text-muted-foreground hover:text-primary",
          )}
        >
          {item.label}
        </Link>
      ))}
      <a
        href="/downloads/company.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "text-sm font-medium transition-colors duration-300",
          transparent
            ? "text-white/70 hover:text-white"
            : "text-muted-foreground hover:text-primary",
        )}
      >
        회사소개서
      </a>
    </nav>
  );
}
