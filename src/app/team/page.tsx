import type { Metadata } from "next";
import { TeamCrews } from "@/components/sections/TeamCrews";
import { TeamMemberFeature } from "@/components/sections/TeamMemberFeature";
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
				ctaText="무료 상담 신청"
				ctaHref="/contact"
				secondaryText="서비스 살펴보기"
				secondaryHref="/services/professional"
			/>
			<TeamMemberFeature />
			<TeamCrews />
			<TeamValues />
			<CTACard
				headline="이 팀과 함께 시작하세요"
				sub="첫 상담 무료 · 계약 압박 없음 · 영업일 1일 내 회신"
			/>
		</>
	);
}

export default TeamPage;
