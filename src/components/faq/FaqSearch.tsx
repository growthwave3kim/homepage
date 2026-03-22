"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FaqSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FaqSearch({
  searchQuery,
  onSearchChange,
}: FaqSearchProps) {
  return (
    <div className="relative mx-auto mb-10 max-w-lg">
      <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="질문을 검색해보세요"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
