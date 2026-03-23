import { Star, Quote } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";
import CountUp from "@/components/shared/CountUp";

const REVIEWS = [
  {
    name: "김**",
    company: "뷰티 브랜드",
    rating: 5,
    text: "전략부터 실행까지 모두 맡겼는데, 3개월 만에 월 매출이 2배 넘게 올랐습니다. 데이터 기반으로 움직여주셔서 신뢰가 갔어요.",
  },
  {
    name: "이**",
    company: "F&B 스타트업",
    rating: 5,
    text: "인플루언서 섭외부터 콘텐츠 방향, 성과 리포트까지 투명하게 공유해주셔서 너무 좋았습니다. 재계약은 당연한 선택이었어요.",
  },
  {
    name: "박**",
    company: "라이프스타일 브랜드",
    rating: 5,
    text: "홈페이지 제작도 마케팅도 한 곳에서 해결했습니다. 일관된 브랜드 톤이 유지되니 고객 반응이 확실히 달라졌어요.",
  },
];

export default function ServiceReviews() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-20 lg:py-28">
      {/* 배경 오브 */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.30_0.07_265/0.25),transparent_65%)] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* 헤더 */}
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <p className="text-[11px] font-medium tracking-[0.4em] text-white/30 uppercase">
              Client Reviews
            </p>
            <div className="flex items-end gap-4">
              <span className="text-6xl font-bold text-white lg:text-7xl">
                <CountUp end={4.9} decimals={1} />
              </span>
              <div className="mb-2">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-white/30">12,400+ 누적 리뷰</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 리뷰 카드 */}
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <FadeIn key={review.name} delay={i * 120} direction="up">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.07]">
                {/* 인용 마크 */}
                <Quote className="mb-4 h-7 w-7 text-white/15" />

                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/45">
                  {review.text}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white/80">
                      {review.name}
                    </p>
                    <p className="text-xs text-white/30">{review.company}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* 하단 라인 */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-white/20 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
