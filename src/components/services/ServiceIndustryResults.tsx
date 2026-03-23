import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";

const RESULTS = [
  {
    industry: "패션",
    metric: "350%",
    label: "매출 증가",
    description: "인플루언서 캠페인 후 3개월 내 매출 3.5배 성장",
    gradient: "from-rose-900 to-pink-800",
  },
  {
    industry: "뷰티",
    metric: "#1",
    label: "카테고리 랭킹",
    description: "뷰티 카테고리 키워드 검색 순위 1위 달성",
    gradient: "from-pink-900 to-fuchsia-800",
  },
  {
    industry: "F&B",
    metric: "완판",
    label: "재고 소진",
    description: "인플루언서 포스팅 10분 만에 전 상품 품절",
    gradient: "from-amber-900 to-orange-800",
  },
  {
    industry: "테크",
    metric: "2M+",
    label: "누적 조회수",
    description: "제품 리뷰 콘텐츠 총 200만 뷰 달성",
    gradient: "from-slate-800 to-blue-900",
  },
];

export default function ServiceIndustryResults() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Results"
          title="업종별 캠페인 성과"
          description="다양한 업종에서 검증된 인플루언서 마케팅 성과입니다."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((result, i) => (
            <FadeIn key={result.industry} delay={i * 100} direction="up">
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${result.gradient} p-7 text-white transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative">
                  <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-white/50 uppercase">
                    {result.industry}
                  </p>
                  <p className="mb-1 text-5xl font-bold leading-none">
                    {result.metric}
                  </p>
                  <p className="mb-5 text-sm font-medium text-white/70">
                    {result.label}
                  </p>
                  <p className="text-xs leading-relaxed text-white/50">
                    {result.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/30 transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
