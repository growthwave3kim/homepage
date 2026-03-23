import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "첫 달 전략 컨설팅 무료",
    description: "브랜드 현황 진단부터 마케팅 로드맵 설계까지, 첫 달 전략 컨설팅을 무상으로 제공합니다.",
  },
  {
    icon: Shield,
    title: "성과 보장 약정",
    description: "계약 전 KPI를 명확히 설정하고, 목표 미달 시 다음 달 비용을 조정합니다. 결과로 증명합니다.",
  },
  {
    icon: Clock,
    title: "빠른 온보딩 2주 내 시작",
    description: "계약 후 2주 이내 첫 콘텐츠 발행. 긴 준비 기간 없이 바로 시장에서 존재감을 만듭니다.",
  },
];

export default function EarlyBird() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-20 lg:py-28">
      {/* 배경 오브 */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.25),transparent_65%)] blur-[80px]" />
      <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.30_0.07_280/0.20),transparent_65%)] blur-[70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="text-xs font-medium tracking-widest text-white/60 uppercase">
                Early Partner Offer
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
              지금 시작하는 브랜드를 위한
              <br />
              <span className="text-gradient-gold">특별한 파트너십</span>
            </h2>
            <p className="mt-4 text-base text-white/45">
              GrowthWave의 첫 번째 파트너가 되어주세요.
              <br className="hidden sm:block" />
              함께 성장하는 만큼, 특별한 조건으로 시작합니다.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          {BENEFITS.map((b, i) => (
            <FadeIn key={b.title} delay={i * 120} direction="up">
              <div className="group flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.07]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
                  <b.icon className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-white">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{b.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={400}>
          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all hover:scale-105 hover:shadow-[0_0_40px_oklch(0.9_0.02_250/0.25)]"
            >
              지금 상담 신청하기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-xs text-white/25">
              선착순 5개 브랜드 한정 · 별도 문의 시 조건 협의 가능
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
