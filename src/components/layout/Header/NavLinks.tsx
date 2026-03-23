"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navigation";

interface NavLinksProps {
  transparent: boolean;
}

export default function NavLinks({ transparent }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.href);
        const hasChildren = item.children && item.children.length > 0;

        return (
          <div key={item.href} className="group relative">
            <Link
              href={item.href}
              className={cn(
                "flex items-center gap-0.5 text-sm font-medium transition-colors duration-300",
                transparent
                  ? isActive
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                  : isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
              )}
            >
              {item.label}
              {hasChildren && (
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>

            {hasChildren && (
              <div className="invisible absolute top-full left-1/2 z-50 mt-3 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {/* 호버 브릿지 */}
                <div className="absolute -top-3 left-0 right-0 h-3" />
                <div className="overflow-hidden rounded-xl border bg-background shadow-lg">
                  <div className="py-1.5">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-muted-foreground whitespace-nowrap transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <button
        onClick={() => alert("회사소개서는 준비 중입니다.")}
        className={cn(
          "text-sm font-medium transition-colors duration-300",
          transparent
            ? "text-white/70 hover:text-white"
            : "text-muted-foreground hover:text-primary",
        )}
      >
        회사소개서
      </button>
    </nav>
  );
}
