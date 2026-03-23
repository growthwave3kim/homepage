import SectionTitle from "@/components/shared/SectionTitle";
import CountUp from "@/components/shared/CountUp";
import FadeIn from "@/components/shared/FadeIn";

const STATS = [
  {
    end: 320,
    suffix: "+",
    label: "운영 브랜드",
    description: "다양한 업종에서 검증된 마케팅 성과",
  },
  {
    end: 4.9,
    suffix: "",
    decimals: 1,
    label: "고객 만족도",
    description: "투명한 소통과 체계적인 성과 관리",
  },
  {
    end: 6,
    suffix: "년+",
    label: "평균 경력",
    description: "실전 경험이 풍부한 전문가 팀",
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
