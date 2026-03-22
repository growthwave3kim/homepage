"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";
import { cn } from "@/lib/utils";
import FaqSearch from "./FaqSearch";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FaqList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <FaqSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FAQ_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
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

      {filteredFaqs.length > 0 ? (
        <Accordion className="mx-auto max-w-3xl">
          {filteredFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="py-16 text-center">
          <p className="mb-2 text-muted-foreground">
            해당 카테고리에 등록된 FAQ가 없습니다.
          </p>
          <p className="mb-6 text-sm text-muted-foreground">
            찾으시는 질문이 없으신가요?
          </p>
          <Link href="/#contact">
            <Button variant="outline">문의하기</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
