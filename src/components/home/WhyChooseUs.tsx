import { BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

const REASONS = [
  {
    icon: BarChart3,
    title: "데이터 드리븐",
    description:
      "감이 아닌 데이터로 의사결정합니다. 정밀한 분석과 실시간 트래킹으로 마케팅 성과를 극대화합니다.",
    gradient: "from-blue-950 to-indigo-900",
  },
  {
    icon: Lightbulb,
    title: "크리에이티브 퍼스트",
    description:
      "차별화된 브랜드 경험을 설계합니다. 트렌드를 따르는 것이 아닌, 새로운 기준을 만들어갑니다.",
    gradient: "from-violet-950 to-purple-900",
  },
  {
    icon: TrendingUp,
    title: "지속 가능한 성장",
    description:
      "단기 성과가 아닌 장기적인 브랜드 자산을 구축합니다. 전략적 파트너십으로 함께 성장합니다.",
    gradient: "from-slate-900 to-blue-950",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Why GrowthWave"
          title="성장의 기준을 바꾸다"
          description="GrowthWave는 데이터와 크리에이티브의 교차점에서 브랜드의 성장을 설계합니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {REASONS.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 120} direction="up">
              <div className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_64px_oklch(0.22_0.035_265/0.12)]">
                {/* 상단 그라디언트 패널 */}
                <div
                  className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${reason.gradient} overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    <reason.icon className="h-8 w-8 text-white/90" />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>

                {/* 하단 호버 라인 */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
