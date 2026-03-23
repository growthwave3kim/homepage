import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

/* 실제 팀 사진이 생기면 src를 교체하세요 */
const PHOTOS = [
  { id: 1, gradient: "from-slate-700 to-slate-600", label: "팀 워크숍" },
  { id: 2, gradient: "from-zinc-700 to-neutral-600", label: "브랜드 캠페인" },
  { id: 3, gradient: "from-stone-700 to-stone-600", label: "팀 미팅" },
  { id: 4, gradient: "from-neutral-800 to-zinc-700", label: "오피스 데이" },
  { id: 5, gradient: "from-slate-800 to-slate-600", label: "팀 회식" },
];

export default function CultureSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 텍스트 */}
          <FadeIn direction="left">
            <p className="mb-4 text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
              Our Culture
            </p>
            <h2 className="mb-8 text-4xl font-black leading-tight tracking-tight lg:text-5xl">
              OUR
              <br />
              CULTURE
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>서로의 아이디어가 자유롭게 오가고,</p>
              <p>좋은 에너지가 퍼질 때 더 멋진 결과가 만들어진다고 믿어요.</p>
              <p>
                GrowthWave는 함께 웃고 함께 배우며 팀 전체가 성장하는
                마케팅 파트너입니다.
              </p>
              <p>함께 만드는 긍정적인 변화, 지금부터 시작해볼까요?</p>
            </div>
            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:gap-4 hover:shadow-lg"
            >
              팀 소개 보기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>

          {/* 사진 그리드 */}
          <FadeIn direction="right">
            <div className="grid grid-cols-3 gap-3">
              {/* 큰 카드 */}
              <div
                className={`col-span-2 row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br ${PHOTOS[0].gradient} aspect-square`}
              >
                <div className="flex h-full items-end p-5">
                  <span className="text-xs font-medium text-white/50">
                    {PHOTOS[0].label}
                  </span>
                </div>
              </div>
              {/* 나머지 카드들 */}
              {PHOTOS.slice(1).map((photo) => (
                <div
                  key={photo.id}
                  className={`overflow-hidden rounded-xl bg-gradient-to-br ${photo.gradient} aspect-square`}
                >
                  <div className="flex h-full items-end p-3">
                    <span className="text-[10px] font-medium text-white/40">
                      {photo.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              * 사진은 준비 중입니다
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
