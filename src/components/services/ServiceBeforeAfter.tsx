import SectionTitle from "@/components/shared/SectionTitle";
import { TrendingUp } from "lucide-react";

const METRICS = [
  {
    label: "총 도달",
    before: "125,000",
    after: "458,000",
    growth: "+266%",
  },
  {
    label: "평균 참여율",
    before: "8.2%",
    after: "35.2%",
    growth: "+329%",
  },
  {
    label: "월 신규 팔로워",
    before: "450명",
    after: "1,980명",
    growth: "+340%",
  },
  {
    label: "전환율",
    before: "3.5%",
    after: "14.5%",
    growth: "+314%",
  },
];

export default function ServiceBeforeAfter() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Performance"
          title="실제 운영 성과"
          description="GrowthWave와 함께한 브랜드의 실제 6개월 성과 데이터입니다."
        />

        <div className="overflow-hidden rounded-2xl border">
          {/* 헤더 */}
          <div className="grid grid-cols-4 bg-primary text-primary-foreground">
            <div className="px-6 py-4 text-sm font-semibold">지표</div>
            <div className="px-6 py-4 text-center text-sm font-semibold">운영 전</div>
            <div className="px-6 py-4 text-center text-sm font-semibold">6개월 후</div>
            <div className="px-6 py-4 text-center text-sm font-semibold">성장률</div>
          </div>

          {/* 데이터 행 */}
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`grid grid-cols-4 transition-colors hover:bg-muted/30 ${
                index % 2 === 0 ? "bg-card" : "bg-muted/10"
              }`}
            >
              <div className="px-6 py-4 text-sm font-medium">{metric.label}</div>
              <div className="px-6 py-4 text-center text-sm text-muted-foreground">
                {metric.before}
              </div>
              <div className="px-6 py-4 text-center text-sm font-semibold">
                {metric.after}
              </div>
              <div className="flex items-center justify-center gap-1 px-6 py-4">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">{metric.growth}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          * 2024년 실제 운영 클라이언트 평균 데이터 기준
        </p>
      </div>
    </section>
  );
}
