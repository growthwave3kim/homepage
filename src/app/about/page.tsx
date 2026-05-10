import type { Metadata } from "next";
import { AboutCEOMessage } from "@/components/sections/AboutCEOMessage";
import { AboutCEOTimeline } from "@/components/sections/AboutCEOTimeline";
import { AboutFoundingStory } from "@/components/sections/AboutFoundingStory";
import { AESlogan } from "@/components/sections/AESlogan";
import { Comparison } from "@/components/sections/Comparison";
import { OrgChart } from "@/components/sections/OrgChart";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "회사소개 | Growth Wave",
	description:
		"변호사·의사·한의사·수의사·노무사 등 전문직 마케팅에 집중하는 그로스웨이브. 광고 규정을 이해하는 팀이 직접 콘텐츠를 설계합니다.",
};

export const AboutPage = () => {
	return (
		<>
			<PageHero
				eyebrow="회사소개"
				title="전문직 마케팅만"
				titleHighlight="집중합니다"
				sub="광고 규정·신뢰·검색 의도가 다른 직군은, 같은 톤으로 마케팅할 수 없습니다."
				ctaText="상담 신청"
				ctaHref="/contact"
				secondaryText="회사소개서 요청"
				secondaryHref="/contact?subject=회사소개서"
			>
				<p className="font-mono text-slate-400 text-xs tracking-[0.2em]">
					전문직 12개 직군 · 광고 위반 0건 · 재계약율 90%+
				</p>
			</PageHero>

			<AboutFoundingStory />
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
					<p className="break-keep text-muted-foreground leading-relaxed">
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
