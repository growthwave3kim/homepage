import type { Metadata } from "next";
import AboutCEOMessage from "@/components/sections/AboutCEOMessage";
import AboutCEOTimeline from "@/components/sections/AboutCEOTimeline";
import AESlogan from "@/components/sections/AESlogan";
import Comparison from "@/components/sections/Comparison";
import OrgChart from "@/components/sections/OrgChart";
import CTACard from "@/components/shared/CTACard";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "회사소개 | Growth Wave",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 그로스웨이브. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
};

export default function AboutPage() {
	return (
		<>
			<PageHero
				eyebrow="회사소개"
				title="전문직 마케팅만"
				titleHighlight="집중합니다"
				sub="광고 규정·신뢰·검색 의도가 까다로운 전문직의 마케팅은 다릅니다. 규정을 알고, 직군을 알고, 의뢰 구조를 이해하는 팀이 필요합니다."
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="회사소개서 요청"
				secondaryHref="/contact?subject=회사소개서"
			/>

			<AESlogan />
			<AboutCEOMessage />
			<AboutCEOTimeline />

			{/* Mission */}
			<section className="bg-white px-4 py-16">
				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Mission
					</p>
					<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
						전문직 광고 규정을 직접 검토하는 마케팅 팀
					</h2>
					<p className="text-muted-foreground leading-relaxed">
						대부분의 마케팅 대행사는 전문직 광고 규정을 모릅니다. 그 결과 광고비는 나가지만 의뢰는
						늘지 않습니다.
						<br className="hidden sm:block" />
						그로스웨이브는 변호사법·의료법·세무사법 등 직군별 광고 규정을 직접 검토하고, 의뢰인이
						찾아오는 콘텐츠를 설계합니다.
					</p>
				</div>
			</section>

			<OrgChart />
			<Comparison />
			<CTACard headline="무료 상담으로 시작하세요" sub="24시간 안으로 답변드립니다." />
		</>
	);
}
