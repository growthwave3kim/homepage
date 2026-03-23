import Link from "next/link";
import { BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const REASONS = [
  {
    num: "01",
    icon: BarChart3,
    title: "데이터 드리븐",
    description:
      "감이 아닌 데이터로 의사결정합니다. 실시간 트래킹과 정밀한 분석으로 마케팅 효율을 극대화하고 낭비를 없앱니다.",
    href: "/services",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
    borderHover: "hover:border-blue-500/30",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "크리에이티브 퍼스트",
    description:
      "트렌드를 따르는 것이 아닌, 새로운 기준을 만듭니다. 브랜드의 본질을 꿰뚫는 차별화된 크리에이티브로 시장에서 존재감을 만듭니다.",
    href: "/about",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    borderHover: "hover:border-violet-500/30",
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "지속 가능한 성장",
    description:
      "단기 성과가 아닌 장기적 브랜드 자산을 구축합니다. 전략적 파트너십으로 함께 성장하는 것이 GrowthWave의 핵심 철학입니다.",
    href: "/about",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/30",
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
              <Link href={reason.href} className="group block">
                <div
                  className={`relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 transition-all duration-300 hover:bg-white/[0.06] lg:flex-row lg:items-center lg:gap-12 lg:p-10 ${reason.borderHover}`}
                >
                  {/* 번호 */}
                  <span className="shrink-0 bg-gradient-to-br from-white/35 to-white/08 bg-clip-text text-6xl font-black text-transparent lg:text-8xl">
                    {reason.num}
                  </span>

                  {/* 구분선 (데스크탑) */}
                  <div className="hidden h-16 w-px bg-white/[0.08] lg:block" />

                  {/* 아이콘 + 내용 */}
                  <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${reason.iconBg}`}
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

                  {/* 우측 화살표 → 자세히 보기 */}
                  <div className="hidden shrink-0 items-center gap-2 text-xs font-medium text-white/30 transition-all duration-300 group-hover:text-white/70 lg:flex">
                    자세히 보기
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
