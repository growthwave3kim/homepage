import type { Metadata } from "next";
import { AboutCEOMessage } from "@/components/sections/AboutCEOMessage";
import { AboutCEOTimeline } from "@/components/sections/AboutCEOTimeline";
import { AboutClientStrip } from "@/components/sections/AboutClientStrip";
import { AboutFoundingStory } from "@/components/sections/AboutFoundingStory";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutMidCTA } from "@/components/sections/AboutMidCTA";
import { AboutMission } from "@/components/sections/AboutMission";
import { AboutTrustCounter } from "@/components/sections/AboutTrustCounter";
import { AESlogan } from "@/components/sections/AESlogan";
import { Comparison } from "@/components/sections/Comparison";
import { OrgChart } from "@/components/sections/OrgChart";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "회사소개 | Growth Wave",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 그로스웨이브. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
};

export const AboutPage = () => {
	return (
		<>
			{/* 1. 풀스크린 다크 Hero */}
			<AboutHero />

			{/* 2. 창업 스토리 */}
			<AboutFoundingStory />

			{/* 3. 신뢰 카운터 (adresult 차용 — 4축 숫자) */}
			<AboutTrustCounter />

			{/* 4. 직군 Marquee */}
			<AboutClientStrip />

			{/* 5. 슬로건 (다크) */}
			<AESlogan />

			{/* 6. CEO 메시지 */}
			<AboutCEOMessage />

			{/* 7. CEO 타임라인 */}
			<AboutCEOTimeline />

			{/* 8. 미션 */}
			<AboutMission />

			{/* 9. 조직도 */}
			<OrgChart />

			{/* 10. 비교 */}
			<Comparison />

			{/* 11. 중간 CTA (다채널) */}
			<AboutMidCTA />

			{/* 12. 최종 CTA */}
			<CTACard
				variant="gradient"
				headline="전문직 마케팅, 우리에게 맡기세요."
				sub="30분 무료 진단 · 광고 규정 위반 항목 즉시 확인"
				buttonText="상담 신청"
			/>
		</>
	);
};

export default AboutPage;
