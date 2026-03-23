"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import CountUp from "@/components/shared/CountUp";

const MARQUEE_BRANDS = [
  "CONTENT MARKETING",
  "SOCIAL MEDIA",
  "INFLUENCER",
  "WEBSITE",
  "PERFORMANCE",
  "BRANDING",
  "DATA DRIVEN",
  "CREATIVE",
  "GROWTH HACKING",
  "SEO",
  "ROAS",
  "DIGITAL MARKETING",
];

const STATS = [
  { end: 4, suffix: "가지", decimals: 0, label: "핵심 서비스" },
  { end: 2, suffix: "주", decimals: 0, label: "온보딩 기간" },
  { end: 6, suffix: "년+", decimals: 0, label: "대표 평균 경력" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const cls = (delay: number) =>
    `transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`;

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[oklch(0.10_0.025_265)]">
      {/* ─── 그라디언트 오브 ─── */}
      <div className="animate-float absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.36_0.09_265/0.38),transparent_65%)] blur-[90px]" />
      <div className="animate-float-d1 absolute -bottom-40 -right-32 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.30_0.07_280/0.32),transparent_65%)] blur-[90px]" />
      <div className="animate-float-d2 absolute right-1/4 top-1/3 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.45_0.05_250/0.22),transparent_65%)] blur-[70px]" />

      {/* ─── 격자 오버레이 ─── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* ─── 하단 페이드 ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[oklch(0.10_0.025_265)] to-transparent" />

      {/* ─── 메인 콘텐츠 ─── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pb-40 pt-20 text-center">
        {/* 배지 */}
        <div
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-sm"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(16px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium tracking-[0.35em] text-white/50 uppercase">
            Digital Growth Partner
          </span>
        </div>

        {/* 헤드라인 */}
        <h1
          className="mb-6 text-5xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl lg:text-[72px]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(28px)",
            transition: "opacity 0.7s ease 0.12s, transform 0.7s ease 0.12s",
          }}
        >
          브랜드의 성장을
          <br />
          <span
            className="animate-shimmer bg-gradient-to-r from-white via-blue-100 via-50% to-white/60 bg-[length:300%_auto] bg-clip-text text-transparent"
          >
            디자인합니다
          </span>
        </h1>

        {/* 구분선 */}
        <div
          className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.7s ease 0.22s",
          }}
        />

        {/* 설명 */}
        <p
          className="mb-12 text-base leading-relaxed text-white/45 md:text-lg"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.32s, transform 0.7s ease 0.32s",
          }}
        >
          데이터 기반의 전략과 크리에이티브로
          <br className="hidden sm:block" />
          브랜드의 지속 가능한 성장을 만들어갑니다.
        </p>

        {/* CTA 버튼 */}
        <div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s",
          }}
        >
          <Link href="/#contact">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_48px_12px_oklch(0.8_0.03_250/0.25)]">
              <span className="relative z-10 flex items-center gap-2">
                프로젝트 문의
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </Link>
          <Link href="/services">
            <button className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white/75 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] hover:text-white">
              서비스 둘러보기
            </button>
          </Link>
        </div>

        {/* 통계 */}
        <div
          className="mt-20 flex justify-center border-t border-white/[0.07] pt-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 px-8 text-center ${i < STATS.length - 1 ? "border-r border-white/[0.07]" : ""}`}
            >
              <p className="whitespace-nowrap text-3xl font-bold text-white lg:text-4xl">
                <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
              </p>
              <p className="mt-2 text-[10px] font-medium tracking-[0.3em] text-white/30 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 마퀴 ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden border-t border-white/[0.05] py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((brand, i) => (
            <span
              key={i}
              className="mx-10 text-[10px] font-medium tracking-[0.4em] text-white/18 uppercase"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* ─── 스크롤 인디케이터 ─── */}
      <button
        onClick={() => document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/20 transition-colors hover:text-white/50"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.35em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
}
