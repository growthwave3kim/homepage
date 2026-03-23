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
      from: "oklch(0.14 0.06 260)",
      to: "oklch(0.10 0.04 270)",
      orb1: "oklch(0.36_0.12_255/0.4)",
      orb2: "oklch(0.28_0.08_280/0.3)",
      tag: "bg-blue-500/20 text-blue-300",
    },
    tags: ["SEO 전략 설계", "네이버 블로그", "키워드 리서치", "전문 에디터 팀"],
  },
  {
    num: "02",
    title: "소셜 미디어",
    subtitle: "Social Media Marketing",
    description:
      "인스타그램·유튜브 채널을 브랜드의 강력한 마케팅 자산으로 만듭니다. 전담 매니저와 META 광고 통합 운영으로 ROAS를 극대화합니다.",
    href: "/services/instagram",
    visual: {
      from: "oklch(0.12 0.06 290)",
      to: "oklch(0.09 0.04 310)",
      orb1: "oklch(0.36_0.14_295/0.4)",
      orb2: "oklch(0.28_0.10_320/0.3)",
      tag: "bg-violet-500/20 text-violet-300",
    },
    tags: ["전담 매니저 1:1", "콘텐츠 기획·제작", "META 광고", "실시간 트래킹"],
  },
  {
    num: "03",
    title: "인플루언서 마케팅",
    subtitle: "Influencer Marketing",
    description:
      "팔로워 수가 아닌 실제 영향력 데이터로 선별합니다. 브랜드 타겟과 인플루언서 오디언스를 정밀 매칭해 낭비 없는 캠페인을 실행합니다.",
    href: "/services/influencer",
    visual: {
      from: "oklch(0.13 0.07 15)",
      to: "oklch(0.09 0.04 30)",
      orb1: "oklch(0.38_0.14_10/0.4)",
      orb2: "oklch(0.30_0.10_35/0.3)",
      tag: "bg-rose-500/20 text-rose-300",
    },
    tags: ["데이터 기반 선별", "숏폼·롱폼 믹스", "CTR·ROAS 트래킹", "투명한 리포팅"],
  },
  {
    num: "04",
    title: "웹사이트 제작",
    subtitle: "Website Development",
    description:
      "브랜드의 첫 인상을 결정하는 공간. 단순 제작을 넘어 전환율 최적화와 SEO를 동시에 고려한 프리미엄 웹사이트를 설계합니다.",
    href: "/services/homepage",
    visual: {
      from: "oklch(0.12 0.03 250)",
      to: "oklch(0.09 0.02 260)",
      orb1: "oklch(0.32_0.06_250/0.4)",
      orb2: "oklch(0.24_0.04_265/0.3)",
      tag: "bg-slate-500/20 text-slate-300",
    },
    tags: ["기획·디자인·개발", "반응형 SEO", "브랜드 아이덴티티", "이커머스 연동"],
  },
];

export default function ServiceShowcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-20 flex flex-col items-start gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
                Our Services
              </p>
              <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
                어떤 성장이
                <br />
                필요하신가요?
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:text-base">
              브랜드의 목표에 맞는 최적의 채널과 전략으로
              <br className="hidden lg:block" />
              지속 가능한 성장을 설계합니다.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.num} delay={i * 80} direction="up">
              <Link href={svc.href} className="group block">
                <div className="grid overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-500 hover:border-border hover:shadow-[0_24px_80px_oklch(0.22_0.035_265/0.09)] lg:grid-cols-5">
                  {/* 비주얼 패널 */}
                  <div
                    className={`relative order-1 h-56 overflow-hidden lg:col-span-2 lg:h-auto ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    style={{
                      background: `linear-gradient(135deg, ${svc.visual.from}, ${svc.visual.to})`,
                    }}
                  >
                    {/* 격자 패턴 */}
                    <div
                      className="absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    {/* 그라디언트 오브 */}
                    <div
                      className="absolute -left-16 -top-16 h-64 w-64 rounded-full blur-[60px] transition-transform duration-700 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${svc.visual.orb1}, transparent 65%)`,
                      }}
                    />
                    <div
                      className="absolute -bottom-16 -right-8 h-48 w-48 rounded-full blur-[50px] transition-transform duration-700 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${svc.visual.orb2}, transparent 65%)`,
                      }}
                    />
                    {/* 번호 워터마크 */}
                    <span className="absolute right-5 top-4 select-none font-black text-white/[0.05] text-[100px] leading-none lg:text-[140px]">
                      {svc.num}
                    </span>
                    {/* 태그 목록 */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-wide ${svc.visual.tag} backdrop-blur-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 텍스트 패널 */}
                  <div
                    className={`order-2 flex flex-col justify-between p-8 lg:col-span-3 lg:p-12 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div>
                      <div className="mb-6 flex items-center gap-4">
                        <span className="text-4xl font-black text-primary/10 lg:text-5xl">
                          {svc.num}
                        </span>
                        <div className="h-px flex-1 bg-border/60" />
                        <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                          {svc.subtitle}
                        </span>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold lg:text-3xl">{svc.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                        {svc.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                      서비스 자세히 보기
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
