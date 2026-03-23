"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import SectionTitle from "@/components/shared/SectionTitle";

const GRADIENTS: Record<string, string> = {
  "1": "from-slate-700 via-slate-600 to-slate-500",
  "2": "from-zinc-800 via-zinc-700 to-stone-600",
  "3": "from-stone-700 via-neutral-600 to-stone-500",
  "4": "from-amber-900 via-stone-700 to-amber-800",
  "5": "from-rose-900 via-rose-800 to-pink-700",
  "6": "from-pink-900 via-pink-800 to-rose-700",
};

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = PORTFOLIO_ITEMS.slice(0, 6);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, visibleItems.length - itemsPerView);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex items-end justify-between">
          <SectionTitle
            subtitle="Portfolio"
            title="포트폴리오"
            description="데이터와 크리에이티브가 만든 성과를 확인하세요."
            align="left"
            className="mb-8"
          />
          <div className="mb-8 hidden items-center gap-2 lg:flex">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)`,
            }}
          >
            {visibleItems.map((item) => (
              <div key={item.id} className="w-full shrink-0 sm:w-1/2 lg:w-1/3">
                <div className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl">
                  <div className="aspect-[4/3] overflow-hidden">
                    <div
                      className={`relative flex h-full items-end bg-gradient-to-br p-5 transition-transform duration-500 group-hover:scale-105 ${GRADIENTS[item.id] ?? "from-slate-700 to-slate-500"}`}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="relative">
                        <p className="text-xs font-medium tracking-widest text-white/50 uppercase mb-1">
                          {item.category === "homepage"
                            ? "Website"
                            : item.category === "brand"
                              ? "Brand"
                              : "Performance"}
                        </p>
                        <p className="text-lg font-bold text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="mb-3 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/portfolio">
            <Button variant="outline" size="lg">
              전체 포트폴리오 보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
