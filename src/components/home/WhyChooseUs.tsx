import { BarChart3, Lightbulb, TrendingUp } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const REASONS = [
  {
    icon: BarChart3,
    title: "데이터 드리븐",
    description:
      "감이 아닌 데이터로 의사결정합니다. 정밀한 분석과 실시간 트래킹으로 마케팅 성과를 극대화합니다.",
  },
  {
    icon: Lightbulb,
    title: "크리에이티브 퍼스트",
    description:
      "차별화된 브랜드 경험을 설계합니다. 트렌드를 따르는 것이 아닌, 새로운 기준을 만들어갑니다.",
  },
  {
    icon: TrendingUp,
    title: "지속 가능한 성장",
    description:
      "단기 성과가 아닌 장기적인 브랜드 자산을 구축합니다. 전략적 파트너십으로 함께 성장합니다.",
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

        <div className="grid gap-8 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
