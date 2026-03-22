import type { Metadata } from "next";
import VisionSection from "@/components/about/VisionSection";
import CeoMessage from "@/components/about/CeoMessage";
import TeamSection from "@/components/about/TeamSection/TeamSection";
import OrgChart from "@/components/about/OrgChart";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "GrowthWave는 데이터와 크리에이티브의 교차점에서 브랜드의 지속 가능한 성장을 설계합니다.",
};

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <VisionSection />
      <CeoMessage />
      <TeamSection />
      <OrgChart />
    </div>
  );
}
