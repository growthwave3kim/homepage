import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { FAQCategoryNav } from "@/components/sections/FAQCategoryNav";
import { FAQContact } from "@/components/sections/FAQContact";
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
				title="비용·기간·규정·성과,"
				titleHighlight="여기서 정리"
				sub="전문직 대표분들이 실제로 가장 많이 물어보신 질문들입니다."
				ctaText="상담 신청"
				ctaHref="/contact"
			/>
			<FAQCategoryNav />
			<FAQ />
			<FAQContact />
			<CTACard headline="아직 고민되신다면." sub="계약 압박 없음 · 영업일 1일 내 회신" />
		</>
	);
};

export default FAQPage;
