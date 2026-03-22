"use client";

import { cn } from "@/lib/utils";
import { PORTFOLIO_CATEGORIES } from "@/data/portfolio";

interface PortfolioFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function PortfolioFilter({
  activeCategory,
  onCategoryChange,
}: PortfolioFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap justify-center gap-2">
      {PORTFOLIO_CATEGORIES.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "rounded-full px-5 py-2 text-sm font-medium transition-all",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted text-muted-foreground hover:bg-muted/80",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
