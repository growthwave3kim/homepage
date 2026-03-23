"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X, Phone, Clock, MessageSquare, Mail, ArrowRight } from "lucide-react";
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
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 팝업 패널 */}
      <div
        className={cn(
          "w-80 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0",
        )}
      >
        {/* 상단 다크 헤더 */}
        <div className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] px-6 py-5">
          {/* 배경 오브 */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,oklch(0.45_0.15_230/0.25),transparent_70%)] blur-2xl" />
          <div className="absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.20),transparent_70%)] blur-xl" />

          <div className="relative flex items-start justify-between">
            <div>
              <p className="mb-0.5 text-[10px] font-medium tracking-[0.3em] text-white/30 uppercase">
                GrowthWave
              </p>
              <h3 className="text-xl font-bold text-white">빠른 상담</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/45">
                언제든지 편하게 문의해 주세요
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.08] text-white/50 transition-colors hover:bg-white/[0.15] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* 하단 콘텐츠 */}
        <div className="bg-background p-5 space-y-3">
          {/* 온라인 상담 */}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="group flex w-full items-center justify-between rounded-xl bg-[oklch(0.10_0.025_265)] px-5 py-4 text-sm font-semibold text-white transition-all hover:bg-[oklch(0.14_0.03_265)]"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <MessageSquare className="h-4 w-4" />
              </div>
              <span>온라인 상담 신청</span>
            </div>
            <ArrowRight className="h-4 w-4 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/80" />
          </Link>

          {/* 전화 */}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="group flex w-full items-center justify-between rounded-xl border border-border/60 bg-muted/30 px-5 py-4 transition-all hover:border-border hover:bg-muted/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">전화 문의</p>
                <p className="text-sm font-bold">{COMPANY_INFO.phone}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
          </a>

          {/* 이메일 */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="group flex w-full items-center justify-between rounded-xl border border-border/60 bg-muted/30 px-5 py-4 transition-all hover:border-border hover:bg-muted/60"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 text-primary">
                <Mail className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wide">이메일 문의</p>
                <p className="text-sm font-bold">{COMPANY_INFO.email}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-muted-foreground" />
          </a>

          {/* 운영 시간 */}
          <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{COMPANY_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* CONTACT 버튼 */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-[88px] w-[88px] items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary/15 duration-1000" />
        <span className="relative flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[oklch(0.10_0.025_265)] shadow-xl">
          <span className="text-[11px] font-bold tracking-widest text-white">
            CONTACT
          </span>
        </span>
      </button>
    </div>
  );
}
