import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "포트폴리오",
  description: "GrowthWave의 포트폴리오를 준비 중입니다.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-28 lg:py-36">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.25),transparent_65%)] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
              Coming Soon
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            포트폴리오 준비 중
          </h1>
          <p className="mb-10 text-base leading-relaxed text-white/45">
            GrowthWave는 지금 막 시작하는 마케팅 에이전시입니다.
            <br className="hidden sm:block" />
            첫 번째 파트너와 함께 멋진 성과를 만들어가겠습니다.
          </p>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all hover:scale-105"
          >
            첫 번째 파트너 되기
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            subtitle="Our Promise"
            title="함께 만들어갈 성과"
            description="첫 번째 클라이언트의 성과가 GrowthWave의 첫 번째 포트폴리오가 됩니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { num: "01", title: "투명한 성과 공유", desc: "모든 KPI와 성과 데이터를 실시간으로 공유합니다. 숨기는 것 없이 함께 봅니다." },
              { num: "02", title: "데이터 기반 최적화", desc: "감이 아닌 데이터로 전략을 수정하고, 비용 낭비 없이 효율을 극대화합니다." },
              { num: "03", title: "장기적 파트너십", desc: "단기 계약보다 지속적인 성장을 함께 그려나가는 파트너가 되겠습니다." },
            ].map((item) => (
              <div key={item.num} className="card-premium rounded-2xl p-8">
                <p className="mb-4 text-4xl font-black text-primary/10">{item.num}</p>
                <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
