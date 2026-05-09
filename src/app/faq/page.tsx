import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "FAQ | Growth Wave",
	description:
		"그로스웨이브 전문직 마케팅에 대한 자주 묻는 질문. 비용, 진행 방식, 광고 규정, 성과 측정 등을 정리했습니다.",
};

export const FAQPage = () => {
	return (
		<>
			<PageHero
				eyebrow="자주 묻는 질문"
				title="궁금한 점을"
				titleHighlight="모두 정리했습니다"
				sub="비용·기간·광고 규정·진행 방식까지 정리했습니다."
				ctaText="상담 신청"
				ctaHref="/contact"
				secondaryText="전문직 마케팅 보기"
				secondaryHref="/services/professional"
			/>
			<FAQ />
			<CTACard
				headline="답을 못 찾으셨나요?"
				sub="계약 압박 없음 · 영업일 1일 내 회신"
				buttonText="상담 신청"
			/>
		</>
	);
};

export default FAQPage;
