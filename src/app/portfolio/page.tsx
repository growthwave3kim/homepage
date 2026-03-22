import type { Metadata } from "next";
import SectionTitle from "@/components/shared/SectionTitle";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "포트폴리오",
  description:
    "GrowthWave의 성공적인 마케팅 사례를 확인하세요. 320개 이상의 브랜드와 함께한 성과.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            subtitle="Portfolio"
            title="포트폴리오"
            description="데이터와 크리에이티브가 만든 성과를 확인하세요."
          />
          <PortfolioGrid />
        </div>
      </section>
    </div>
  );
}
