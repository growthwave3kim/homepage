import type { Metadata } from "next";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactProcess } from "@/components/sections/ContactProcess";
import { ContactTrust } from "@/components/sections/ContactTrust";
import { CTACard } from "@/components/shared/CTACard";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
	title: "상담 신청 | Growth Wave",
	description: "그로스웨이브에 전문직 마케팅을 문의하세요. 영업일 1일 내 회신드립니다.",
};

export const ContactPage = () => {
	return (
		<>
			<PageHero
				eyebrow="상담 신청"
				title="어떤 의뢰 흐름을 원하시는지"
				titleHighlight="부터 듣겠습니다"
				sub="영업일 1일 내 회신 · 계약 압박 없음"
				ctaText="폼 바로 작성"
				ctaHref="#contact-form"
			/>

			<ContactProcess />

			{/* 폼 */}
			<section id="contact-form" className="bg-white px-4 py-16 md:py-20">
				<div className="mx-auto max-w-2xl">
					<div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_4px_32px_rgba(15,23,42,0.08)] sm:p-10">
						<ContactForm />
					</div>
				</div>
			</section>

			<ContactTrust />
			<ContactFAQ />
			<CTACard headline="아직 고민되신다면." sub="계약 압박 없음 · 영업일 1일 내 회신" />
		</>
	);
};

export default ContactPage;
