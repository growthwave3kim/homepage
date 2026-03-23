import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, BarChart3, Users } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "GrowthWave의 포트폴리오를 준비 중입니다.",
};

const STRENGTHS = [
  {
    icon: Target,
    num: "01",
    title: "투명한 성과 공유",
    desc: "모든 KPI와 성과 데이터를 실시간으로 공유합니다. 숨기는 것 없이 함께 봅니다.",
  },
  {
    icon: BarChart3,
    num: "02",
    title: "데이터 기반 최적화",
    desc: "감이 아닌 데이터로 전략을 수정하고, 비용 낭비 없이 효율을 극대화합니다.",
  },
  {
    icon: Users,
    num: "03",
    title: "장기적 파트너십",
    desc: "단기 계약보다 지속적인 성장을 함께 그려나가는 파트너가 되겠습니다.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* 히어로 */}
      <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-24 lg:py-32">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.25),transparent_65%)] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <FadeIn direction="up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-[11px] font-medium tracking-[0.4em] text-white/45 uppercase">
                Coming Soon
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              포트폴리오 준비 중
            </h1>
            <p className="mb-10 text-base leading-relaxed text-white/45">
              GrowthWave는 지금 막 시작하는 마케팅 에이전시입니다.
              <br className="hidden sm:block" />
              첫 번째 파트너와 함께 멋진 성과를 만들어가겠습니다.
            </p>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_oklch(0.98_0.01_250/0.20)]"
            >
              첫 번째 파트너 되기
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            subtitle="Our Promise"
            title="함께 만들어갈 성과"
            description="첫 번째 클라이언트의 성과가 GrowthWave의 첫 번째 포트폴리오가 됩니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STRENGTHS.map((item, i) => (
              <FadeIn key={item.num} delay={i * 100} direction="up">
                <div className="card-premium group relative overflow-hidden rounded-2xl p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
