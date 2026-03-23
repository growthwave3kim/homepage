"use client";

import { useState } from "react";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import PortfolioFilter from "./PortfolioFilter";

const GRADIENTS: Record<string, string> = {
  "1": "from-slate-700 via-slate-600 to-slate-500",
  "2": "from-zinc-800 via-zinc-700 to-stone-600",
  "3": "from-stone-700 via-neutral-600 to-stone-500",
  "4": "from-amber-900 via-stone-700 to-amber-800",
  "5": "from-rose-900 via-rose-800 to-pink-700",
  "6": "from-pink-900 via-pink-800 to-rose-700",
  "7": "from-emerald-900 via-teal-800 to-emerald-700",
  "8": "from-cyan-900 via-teal-800 to-cyan-700",
  "9": "from-indigo-900 via-indigo-800 to-slate-700",
};

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PortfolioFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <div
                className={`relative flex h-full items-end bg-gradient-to-br p-6 transition-transform duration-500 group-hover:scale-105 ${GRADIENTS[item.id] ?? "from-slate-700 to-slate-500"}`}
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
                  <p className="text-xl font-bold text-white">{item.title}</p>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
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
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">
            해당 카테고리에 등록된 포트폴리오가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
