"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  const scrollToContent = () => {
    const el = document.getElementById("why-us");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[oklch(0.13_0.02_260)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.02_260)]/80 via-[oklch(0.13_0.02_260)]/50 to-[oklch(0.13_0.02_260)]/90" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.13_0.02_260)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-6 text-xs font-medium tracking-[0.4em] text-white/50 uppercase">
          Digital Growth Partner
        </p>
        <h1 className="mb-8 text-4xl leading-[1.15] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          브랜드의 성장을
          <br />
          디자인합니다
        </h1>
        <div className="mx-auto mb-10 h-px w-16 bg-white/20" />
        <p className="mb-10 text-base leading-relaxed text-white/60 md:text-lg">
          데이터 기반의 전략과 크리에이티브로
          <br className="hidden sm:block" />
          브랜드의 지속 가능한 성장을 만들어갑니다.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/#contact">
            <Button size="lg" className="min-w-[160px]">
              프로젝트 문의
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="min-w-[160px] border-white/20 bg-transparent text-white hover:bg-white/5"
            >
              서비스 둘러보기
            </Button>
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40 transition-colors hover:text-white/70"
        aria-label="아래로 스크롤"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </button>
    </section>
  );
}
