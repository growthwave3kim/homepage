import SectionTitle from "@/components/shared/SectionTitle";
import CountUp from "@/components/shared/CountUp";
import FadeIn from "@/components/shared/FadeIn";

const STATS = [
  {
    end: 4,
    suffix: "가지",
    decimals: 0,
    label: "핵심 서비스",
    description: "콘텐츠 · 소셜 · 인플루언서 · 웹사이트",
  },
  {
    end: 6,
    suffix: "년+",
    decimals: 0,
    label: "대표 평균 경력",
    description: "디지털 마케팅 실전 경험 보유",
  },
  {
    end: 2,
    suffix: "주",
    decimals: 0,
    label: "온보딩 기간",
    description: "계약 후 2주 이내 첫 콘텐츠 발행",
  },
];

export default function VisionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle subtitle="Our Vision" title="성장의 기준을 바꾸다" />

        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              GrowthWave는 트렌드를 따르는 것이 아닌,{" "}
              <strong className="text-foreground">
                새로운 성장의 기준을 만들어가는 파트너
              </strong>
              입니다. 데이터와 크리에이티브의 교차점에서 브랜드의 지속 가능한
              성장을 설계합니다.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 120} direction="up">
              <div className="card-premium group relative overflow-hidden rounded-2xl p-8 text-center">
                {/* 배경 그라디언트 */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <p className="text-5xl font-bold text-primary lg:text-6xl">
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-3 text-base font-semibold">{stat.label}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {stat.description}
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
