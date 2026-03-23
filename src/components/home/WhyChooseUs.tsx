"use client";

import { useRef } from "react";
import { BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const REASONS = [
  {
    num: "01",
    icon: BarChart3,
    title: "데이터 드리븐",
    description:
      "감이 아닌 데이터로 의사결정합니다. 실시간 트래킹과 정밀한 분석으로 마케팅 효율을 극대화하고 낭비를 없앱니다.",
    accent: "from-blue-500/20 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "크리에이티브 퍼스트",
    description:
      "트렌드를 따르는 것이 아닌, 새로운 기준을 만듭니다. 브랜드의 본질을 꿰뚫는 차별화된 크리에이티브로 시장에서 존재감을 만듭니다.",
    accent: "from-violet-500/20 to-purple-500/10",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "지속 가능한 성장",
    description:
      "단기 성과가 아닌 장기적 브랜드 자산을 구축합니다. 전략적 파트너십으로 함께 성장하는 것이 GrowthWave의 핵심 철학입니다.",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-24 lg:py-32"
    >
      {/* 배경 오브 */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.15),transparent_65%)] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* 헤더 */}
        <FadeIn direction="up">
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-white/30 uppercase">
              Why GrowthWave
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl">
              성장의 기준을
              <br />
              <span className="text-gradient-gold">다시 정의합니다</span>
            </h2>
          </div>
        </FadeIn>

        {/* 카드 목록 */}
        <div className="space-y-4">
          {REASONS.map((reason, i) => (
            <FadeIn key={reason.num} delay={i * 100} direction="up">
              <div className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05] lg:flex-row lg:items-center lg:gap-12 lg:p-10">
                {/* 그라디언트 배경 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${reason.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* 번호 */}
                <span className="relative shrink-0 bg-gradient-to-br from-white/40 to-white/10 bg-clip-text text-6xl font-black text-transparent lg:text-8xl">
                  {reason.num}
                </span>

                {/* 구분선 (데스크탑) */}
                <div className="hidden h-16 w-px bg-white/[0.08] lg:block" />

                {/* 아이콘 + 내용 */}
                <div className="relative flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${reason.iconBg} transition-transform duration-500 group-hover:scale-110`}
                  >
                    <reason.icon className={`h-7 w-7 ${reason.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white lg:text-2xl">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50 lg:text-base">
                      {reason.description}
                    </p>
                  </div>
                </div>

                {/* 우측 화살표 */}
                <div className="relative hidden shrink-0 items-center justify-center lg:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.05]">
                    <svg
                      className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
