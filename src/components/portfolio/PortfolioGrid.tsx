"use client";

import { useState } from "react";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import PortfolioFilter from "./PortfolioFilter";

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
            className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-muted to-muted/50 text-muted-foreground transition-transform duration-500 group-hover:scale-105">
                <span className="text-lg font-medium">{item.title}</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="mb-1 font-semibold">{item.title}</h3>
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
