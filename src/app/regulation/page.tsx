import type { Metadata } from "next";
import AdRegulationGuide from "@/components/sections/AdRegulationGuide";
import CTACard from "@/components/shared/CTACard";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "전문직 광고 규정 가이드 | Growth Wave",
	description:
		"변호사법·의료법·세무사법·수의사법·공인노무사법 등 6개 직군 광고 규정을 직접 검토하여 정리했습니다. 가능한 표현과 금지된 표현을 확인하세요.",
	keywords: [
		"전문직 광고 규정",
		"변호사 광고 규정",
		"의사 광고 규정",
		"한의사 광고 규정",
		"수의사 광고 규정",
		"노무사 광고 규정",
		"세무사 광고 규정",
		"의료광고 심의",
	],
};

export default function RegulationPage() {
	return (
		<>
			<PageHero
				eyebrow="광고 규정 가이드"
				title="직군별 광고 규정을"
				titleHighlight="직접 검토합니다"
				sub="변호사법·의료법·세무사법 등 6개 직군 광고 규정을 직접 검토하여 정리했습니다. 모든 콘텐츠는 발행 전 해당 규정을 확인하고 제작합니다."
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="서비스 살펴보기"
				secondaryHref="/services/professional"
			/>

			<AdRegulationGuide />

			<CTACard
				headline="직군별 콘텐츠 검토가 필요하다면"
				sub="광고 규정을 지키면서 의뢰를 만드는 방법, 상담에서 직접 안내드립니다."
			/>
		</>
	);
}
