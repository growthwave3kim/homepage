import type { Metadata } from "next";
import { TeamCrews } from "@/components/sections/TeamCrews";
import { TeamHero } from "@/components/sections/TeamHero";
import { TeamMemberFeature } from "@/components/sections/TeamMemberFeature";
import { TeamPrinciples } from "@/components/sections/TeamPrinciples";
import { TeamScene } from "@/components/sections/TeamScene";
import { TeamStats } from "@/components/sections/TeamStats";
import { CTACard } from "@/components/shared/CTACard";

export const metadata: Metadata = {
	title: "팀 | Growth Wave",
	description:
		"규정·전략·기획·발행을 한 팀이 끝까지 책임집니다. 12개 직군 전담, 위반 0건의 인하우스 팀을 소개합니다.",
	keywords: [
		"그로스웨이브 팀",
		"전문직 마케팅 팀",
		"인하우스 콘텐츠 팀",
		"광고 규정 검수",
		"변호사 마케팅 팀",
		"의료 마케팅 팀",
	],
};

export const TeamPage = () => (
	<>
		<TeamHero />
		<TeamStats />
		<TeamMemberFeature />
		<TeamPrinciples />
		<TeamCrews />
		<TeamScene />
		<CTACard
			variant="gradient"
			headline="팀이 직접 검토합니다."
			sub="첫 미팅에서 직군·채널·법령 조항까지 같이 봅니다."
			buttonText="상담 신청"
		/>
	</>
);

export default TeamPage;
