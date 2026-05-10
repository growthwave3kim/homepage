import type { Metadata } from "next";
import { AdRegulationGuide } from "@/components/sections/AdRegulationGuide";
import { RegulationBeforeAfter } from "@/components/sections/RegulationBeforeAfter";
import { RegulationProcess } from "@/components/sections/RegulationProcess";
import { RegulationStats } from "@/components/sections/RegulationStats";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

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

export const RegulationPage = () => {
	return (
		<>
			<PageHero
				eyebrow="광고 규정 가이드"
				title="직군별 광고 규정을"
				titleHighlight="직접 검토합니다"
				sub="변호사법·의료법·세무사법 등 6개 직군 규정 — 발행 전 항목별 체크."
				ctaText="상담 신청"
				ctaHref="/contact"
				secondaryText="서비스 살펴보기"
				secondaryHref="/services/professional"
			>
				<p className="font-mono text-slate-400 text-xs tracking-[0.2em]">
					검토 누적 200+건 · 위반 0건 · 6개 직군 전담
				</p>
			</PageHero>

			<RegulationStats />
			<AdRegulationGuide />
			<RegulationBeforeAfter />
			<RegulationProcess />
			<CTACard
				variant="gradient"
				headline="지금 운영 중인 채널, 규정 위반 항목 무료로 확인."
				sub="30분 무료 진단 · 광고 규정 위반 항목 즉시 확인"
				buttonText="무료 진단 신청"
			/>
		</>
	);
};

export default RegulationPage;
