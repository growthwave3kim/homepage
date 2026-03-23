"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, Clock, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* 팝업 패널 */}
      <div
        className={cn(
          "w-72 overflow-hidden rounded-2xl border bg-background shadow-2xl transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <span className="text-sm font-semibold">GrowthWave</span>
          <button
            onClick={() => setOpen(false)}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-muted/80"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* 본문 */}
        <div className="p-5">
          <h3 className="mb-1 text-lg font-bold">빠른 상담</h3>
          <p className="mb-5 text-sm text-muted-foreground">
            온라인 상담 신청 또는 전화로 문의하세요
          </p>

          {/* 빠른 상담 버튼 */}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageSquare className="h-4 w-4" />
            빠른 상담 하러 가기
          </Link>

          {/* 전화 문의 */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="mb-3 flex w-full flex-col items-center rounded-xl border px-4 py-3.5 transition-colors hover:bg-muted"
          >
            <span className="mb-1 text-xs text-muted-foreground">전화 문의</span>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-base font-bold">{COMPANY_INFO.phone}</span>
            </div>
          </a>

          {/* 운영 시간 */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{COMPANY_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* CONTACT 버튼 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-[88px] w-[88px] items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
      >
        {/* 핑 애니메이션 */}
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/15 duration-1000" />
        {/* 본체 */}
        <span className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary shadow-xl">
          <span className="text-[11px] font-bold tracking-widest text-primary-foreground">
            CONTACT
          </span>
        </span>
      </button>
    </div>
  );
}
