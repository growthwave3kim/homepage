import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const SERVICES = [
  {
    num: "01",
    title: "콘텐츠 마케팅",
    subtitle: "Content Marketing",
    description:
      "검색 상위 노출을 통해 브랜드 존재감을 만드는 핵심 채널. 한 번 작성된 콘텐츠는 시간이 지나도 고객을 끌어오는 브랜드 자산이 됩니다.",
    href: "/services/blog",
    visual: {
      bg: "from-blue-950 via-indigo-900 to-slate-800",
      lines: ["SEO 전략 설계", "네이버 블로그 · 카카오채널", "10년+ 전문 에디터 팀", "키워드 리서치 → 발행 → 트래킹"],
    },
  },
  {
    num: "02",
    title: "소셜 미디어",
    subtitle: "Social Media Marketing",
    description:
      "인스타그램·유튜브 채널을 브랜드의 강력한 마케팅 자산으로 만듭니다. 전담 매니저와 META 광고 통합 운영으로 ROAS를 극대화합니다.",
    href: "/services/instagram",
    visual: {
      bg: "from-violet-950 via-purple-900 to-pink-900",
      lines: ["전담 매니저 1:1 배정", "콘텐츠 기획 · 제작 · 발행", "META 광고 통합 운영", "실시간 성과 트래킹"],
    },
  },
  {
    num: "03",
    title: "인플루언서 마케팅",
    subtitle: "Influencer Marketing",
    description:
      "팔로워 수가 아닌 실제 영향력 데이터로 선별합니다. 브랜드 타겟과 인플루언서 오디언스를 정밀 매칭해 낭비 없는 캠페인을 실행합니다.",
    href: "/services/influencer",
    visual: {
      bg: "from-rose-950 via-pink-900 to-orange-900",
      lines: ["데이터 기반 크리에이터 선별", "숏폼 · 롱폼 믹스 전략", "CTR · CVR · ROAS 트래킹", "투명한 성과 리포팅"],
    },
  },
  {
    num: "04",
    title: "웹사이트 제작",
    subtitle: "Website Development",
    description:
      "브랜드의 첫 인상을 결정하는 공간. 단순 제작을 넘어 전환율 최적화와 SEO를 동시에 고려한 프리미엄 웹사이트를 설계합니다.",
    href: "/services/homepage",
    visual: {
      bg: "from-slate-900 via-zinc-800 to-stone-800",
      lines: ["전략 · 기획 · 디자인 · 개발", "반응형 · SEO 최적화", "브랜드 아이덴티티 반영", "이커머스 · 예약 시스템 연동"],
    },
  },
];

export default function ServiceShowcase() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-16 flex flex-col gap-2">
            <p className="text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
              Our Services
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              어떤 성장이 필요하신가요?
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 80} direction="up">
              <div className="group grid overflow-hidden rounded-2xl border bg-card transition-all duration-500 hover:shadow-[0_20px_60px_oklch(0.22_0.035_265/0.10)] lg:grid-cols-2">
                {/* 텍스트 */}
                <div className={`flex flex-col justify-between p-8 lg:p-12 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div>
                    <p className="mb-4 text-5xl font-bold text-primary/15 lg:text-6xl">{svc.num}</p>
                    <p className="mb-1 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                      {svc.subtitle}
                    </p>
                    <h3 className="mb-4 text-2xl font-bold lg:text-3xl">{svc.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{svc.description}</p>
                  </div>
                  <Link
                    href={svc.href}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
                  >
                    자세히 보기
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* 비주얼 */}
                <div className={`relative overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`flex h-64 flex-col justify-end bg-gradient-to-br ${svc.visual.bg} p-8 lg:h-full lg:min-h-[280px]`}>
                    {/* 격자 */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    {/* 숫자 워터마크 */}
                    <span className="absolute right-6 top-4 text-8xl font-black text-white/[0.04] select-none lg:text-9xl">
                      {svc.num}
                    </span>
                    {/* 기능 리스트 */}
                    <div className="relative space-y-2">
                      {svc.visual.lines.map((line) => (
                        <div key={line} className="flex items-center gap-2">
                          <span className="h-px w-4 bg-white/40" />
                          <span className="text-xs font-medium text-white/70">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
