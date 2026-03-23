import FadeIn from "@/components/shared/FadeIn";
import { MARKETING_PROCESS } from "@/data/services";

export default function MarketingProcess() {
  return (
    <section className="overflow-hidden bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-20 text-center">
            <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-muted-foreground uppercase">
              Process
            </p>
            <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
              마케팅 프로세스
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              체계적인 6단계 프로세스로 브랜드의 성장을 이끕니다.
            </p>
          </div>
        </FadeIn>

        {/* 타임라인 */}
        <div className="relative">
          {/* 연결선 (데스크탑) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {MARKETING_PROCESS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 70} direction="up">
                <div className="group relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* 스텝 원 */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-background shadow-sm transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-[0_0_0_4px_oklch(0.22_0.035_265/0.06)]">
                    <span className="text-sm font-bold text-primary">{step.step}</span>
                  </div>

                  {/* 내용 */}
                  <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* 하단 액센트 라인 */}
                  <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-full lg:w-full lg:opacity-0 lg:group-hover:opacity-100" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
