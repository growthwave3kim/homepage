"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface MobileMenuProps {
  transparent: boolean;
}

export default function MobileMenu({ transparent }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-muted lg:hidden",
          transparent
            ? "text-white/70 hover:bg-white/10 hover:text-white"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">메뉴 열기</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold">
            GrowthWave
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-2 px-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                pathname.startsWith(item.href)
                  ? "bg-primary/5 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              alert("회사소개서는 준비 중입니다.");
            }}
            className="rounded-lg px-4 py-3 text-left text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            회사소개서
          </button>
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-lg bg-primary px-4 py-3 text-center text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            견적문의
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
