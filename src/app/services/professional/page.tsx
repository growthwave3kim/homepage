import type { Metadata } from "next";
import { AdRegulationGuide } from "@/components/sections/AdRegulationGuide";
import { Cases } from "@/components/sections/Cases";
import { PainPoints } from "@/components/sections/PainPoints";
import { PricingNote } from "@/components/sections/PricingNote";
import { ProfessionTabs } from "@/components/sections/ProfessionTabs";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "전문직 마케팅 | Growth Wave",
	description:
		"변호사·의사·한의사·수의사·노무사·세무사 등 전문직을 위한 마케팅. 광고 규정을 이해하고 수임·의뢰 전환을 설계합니다.",
};

export const ProfessionalServicePage = () => {
	return (
		<>
			<PageHero
				eyebrow="전문직 마케팅"
				title="전문직 마케팅은"
				titleHighlight="다릅니다"
				sub="광고 규정·신뢰·검색 의도가 모두 까다롭습니다. 규정을 알고 직군을 이해하는 팀이 콘텐츠를 설계합니다."
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="자주 묻는 질문"
				secondaryHref="/faq"
			/>

			<PainPoints />
			<WhyUs />
			<AdRegulationGuide />
			<ProfessionTabs />
			<Services />
			<Cases />
			<Testimonials />
			<PricingNote />
			<CTACard headline="무료 상담으로 시작하세요" sub="24시간 안으로 답변드립니다." />
		</>
	);
}

export default ProfessionalServicePage;
