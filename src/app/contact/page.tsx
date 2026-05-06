import { CheckCircle2, Mail } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
	title: "문의하기 | Growth Wave",
	description:
		"그로스웨이브에 전문직 마케팅을 문의하세요. 첫 상담 무료, 영업일 1일 내 회신드립니다.",
};

const TRUST_BADGES = ["첫 상담 무료", "계약 압박 없음", "영업일 1일 내 회신"] as const;

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-white pt-20">
			{/* Page header */}
			<div className="px-4 py-16 text-center">
				<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
					문의하기
				</p>
				<h1 className="mb-4 font-bold text-4xl text-foreground leading-tight tracking-tight md:text-5xl">
					상담은 언제나, 당연히 무료입니다.
				</h1>
				<p className="text-lg text-muted-foreground">
					부담없이 연락 주시면 1일 내로 빠르게 연락드리겠습니다.
				</p>
			</div>

			<section className="px-4 pb-24">
				<div className="mx-auto max-w-2xl">
					{/* Trust badges */}
					<div className="mb-10 flex flex-wrap items-center justify-center gap-6">
						{TRUST_BADGES.map((badge) => (
							<div key={badge} className="flex items-center gap-2">
								<CheckCircle2 className="h-5 w-5 text-[#7c3aed]" />
								<span className="font-medium text-foreground text-sm">{badge}</span>
							</div>
						))}
					</div>

					<ContactForm />

					{/* Direct contact */}
					<div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
						<Mail className="h-4 w-4 text-[#7c3aed]" />
						<a
							href={`mailto:${siteConfig.contact.email}`}
							className="transition-colors hover:text-foreground"
						>
							{siteConfig.contact.email}
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
