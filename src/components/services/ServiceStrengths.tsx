import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";
import { BarChart2, Activity, Target, Layers } from "lucide-react";

const STRENGTHS = [
  {
    icon: BarChart2,
    title: "실질적 영향력 분석",
    description:
      "팔로워 수가 아닌 실제 참여율, 오디언스 적합도, 과거 협업 성과를 종합 분석하여 진짜 영향력 있는 크리에이터를 선별합니다.",
  },
  {
    icon: Activity,
    title: "실시간 성과 트래킹",
    description:
      "캠페인 진행 중 CTR, CVR, ROAS를 실시간으로 모니터링하고 즉각 최적화합니다. 성과 데이터는 투명하게 공유됩니다.",
  },
  {
    icon: Target,
    title: "검증된 오디언스 매칭",
    description:
      "브랜드의 타겟 고객층과 인플루언서의 팔로워 데모그래픽을 정밀 매칭하여 광고 낭비 없는 정확한 타겟팅을 실현합니다.",
  },
  {
    icon: Layers,
    title: "숏폼·롱폼 믹스 전략",
    description:
      "릴스, 유튜브 쇼츠 등 숏폼과 유튜브 리뷰 등 롱폼을 전략적으로 조합하여 인지부터 구매 전환까지 커버합니다.",
  },
];

export default function ServiceStrengths() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Our Strengths"
          title="GrowthWave 인플루언서의 강점"
          description="데이터로 선별하고, 전략으로 실행합니다."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {STRENGTHS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100} direction="up">
              <div className="group card-premium flex gap-5 rounded-2xl p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
