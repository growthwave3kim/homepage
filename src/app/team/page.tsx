import type { Metadata } from "next";
import { TeamCrews } from "@/components/sections/TeamCrews";
import { TeamMemberFeature } from "@/components/sections/TeamMemberFeature";
import { TeamPhilosophy } from "@/components/sections/TeamPhilosophy";
import { TeamValues } from "@/components/sections/TeamValues";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "팀 | Growth Wave",
	description:
		"그로스웨이브 팀. 전문직 광고 규정과 검색 의도를 이해하는 사람들이 직접 콘텐츠를 만듭니다.",
};

export const TeamPage = () => {
	return (
		<>
			<PageHero
				eyebrow="팀 소개"
				title="규정을 아는 사람들이"
				titleHighlight="직접 만듭니다"
				sub="운영 외주가 아니라 전략·기획·발행을 한 팀이 끝까지 책임집니다."
				ctaText="상담 신청"
				ctaHref="/contact"
				secondaryText="서비스 살펴보기"
				secondaryHref="/services/professional"
			>
				<p className="font-mono text-slate-400 text-xs tracking-[0.2em]">
					12개 직군 전담 · 위반 0건 · 외주 없는 인하우스 팀
				</p>
			</PageHero>

			<TeamMemberFeature />
			<TeamPhilosophy />
			<TeamCrews />
			<TeamValues />
			<CTACard
				variant="gradient"
				headline="이 팀과 함께 시작하세요."
				sub="30분 무료 진단 · 영업일 1일 내 회신"
				buttonText="상담 신청"
			/>
		</>
	);
};

export default TeamPage;
