import SectionTitle from "@/components/shared/SectionTitle";

export default function VisionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Our Vision"
          title="성장의 기준을 바꾸다"
        />

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
            GrowthWave는 트렌드를 따르는 것이 아닌,{" "}
            <strong className="text-foreground">
              새로운 성장의 기준을 만들어가는 파트너
            </strong>
            입니다. 데이터와 크리에이티브의 교차점에서 브랜드의 지속 가능한 성장을 설계합니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "320+",
              label: "운영 브랜드",
              description: "다양한 업종에서 검증된 마케팅 성과",
            },
            {
              number: "4.9",
              label: "고객 만족도",
              description: "투명한 소통과 체계적인 성과 관리",
            },
            {
              number: "6년+",
              label: "평균 경력",
              description: "실전 경험이 풍부한 전문가 팀",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-primary lg:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-lg font-semibold">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
