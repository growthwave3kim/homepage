import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const BENEFITS = [
  {
    icon: Sparkles,
    num: "01",
    title: "첫 달 전략 컨설팅 무료",
    description:
      "브랜드 현황 진단부터 마케팅 로드맵 설계까지, 첫 달 전략 컨설팅을 무상으로 제공합니다.",
    color: "amber",
  },
  {
    icon: Shield,
    num: "02",
    title: "성과 보장 약정",
    description:
      "계약 전 KPI를 명확히 설정하고, 목표 미달 시 다음 달 비용을 조정합니다. 결과로 증명합니다.",
    color: "emerald",
  },
  {
    icon: Clock,
    num: "03",
    title: "2주 내 빠른 온보딩",
    description:
      "계약 후 2주 이내 첫 콘텐츠 발행. 긴 준비 기간 없이 바로 시장에서 존재감을 만듭니다.",
    color: "blue",
  },
];

const COLOR_MAP: Record<string, { icon: string; border: string; glow: string; bg: string }> = {
  amber: {
    icon: "text-amber-400",
    border: "border-amber-500/20",
    glow: "group-hover:shadow-[0_20px_40px_oklch(0.75_0.15_85/0.10)]",
    bg: "bg-amber-400/[0.06]",
  },
  emerald: {
    icon: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-[0_20px_40px_oklch(0.70_0.15_160/0.10)]",
    bg: "bg-emerald-400/[0.06]",
  },
  blue: {
    icon: "text-blue-400",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-[0_20px_40px_oklch(0.60_0.15_250/0.10)]",
    bg: "bg-blue-400/[0.06]",
  },
};

export default function EarlyBird() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-24 lg:py-32">
      {/* 배경 오브 */}
      <div className="absolute -left-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.20),transparent_65%)] blur-[90px]" />
      <div className="absolute -right-48 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,oklch(0.30_0.07_285/0.16),transparent_65%)] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* 헤더 */}
        <FadeIn direction="up">
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-400/[0.06] px-5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-medium tracking-[0.3em] text-amber-400/80 uppercase">
                Early Partner Offer
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              지금 시작하는 브랜드를 위한
              <br />
              <span className="text-gradient-gold">특별한 파트너십</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/40 lg:text-base">
              GrowthWave의 첫 번째 파트너가 되어주세요.
              <br className="hidden sm:block" />
              함께 성장하는 만큼, 특별한 조건으로 시작합니다.
            </p>
          </div>
        </FadeIn>

        {/* 카드 */}
        <div className="grid gap-5 md:grid-cols-3">
          {BENEFITS.map((b, i) => {
            const c = COLOR_MAP[b.color];
            return (
              <FadeIn key={b.title} delay={i * 100} direction="up">
                <div
                  className={`group relative flex flex-col gap-6 overflow-hidden rounded-2xl border ${c.border} bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05] ${c.glow}`}
                >
                  {/* 아이콘 */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <b.icon className={`h-7 w-7 ${c.icon}`} />
                  </div>

                  {/* 내용 */}
                  <div>
                    <h3 className="mb-2.5 text-lg font-bold text-white">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-white/45">{b.description}</p>
                  </div>

                  {/* 우측 하단 번호 */}
                  <span className="absolute bottom-4 right-6 select-none text-5xl font-black text-white/[0.03]">
                    {b.num}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* CTA */}
        <FadeIn direction="up" delay={400}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_oklch(0.98_0.01_250/0.20)]"
            >
              지금 상담 신청하기
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="text-[11px] tracking-widest text-white/20 uppercase">
              선착순 5개 브랜드 한정 · 별도 문의 시 조건 협의 가능
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
