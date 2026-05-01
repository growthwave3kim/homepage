import { CheckCircle2, Mail, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import QuickContactForm from "@/components/sections/QuickContactForm";
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
				<div className="mx-auto max-w-5xl">
					{/* Trust badges */}
					<div className="mb-10 flex flex-wrap items-center justify-center gap-6">
						{TRUST_BADGES.map((badge) => (
							<div key={badge} className="flex items-center gap-2">
								<CheckCircle2 className="h-5 w-5 text-[#7c3aed]" />
								<span className="font-medium text-foreground text-sm">{badge}</span>
							</div>
						))}
					</div>

					{/* Dual form guide */}
					<p className="mb-8 text-center text-muted-foreground text-sm leading-relaxed">
						단 3줄로도 상담이 가능하십니다. 저희 서비스도 똑같습니다.
						<br />
						고생하실 필요 없이 저희가 알아서 다 진행해 드립니다.
					</p>

					{/* Dual form */}
					<div className="grid items-start gap-8 md:grid-cols-2">
						{/* Left: quick form + contact channels */}
						<div className="flex flex-col gap-6">
							<QuickContactForm />
							<div className="space-y-3 rounded-2xl border border-slate-100 bg-slate-50 px-6 py-5">
								<p className="font-medium text-foreground text-sm">직접 연락하기</p>
								{siteConfig.contact.tel !== "02-000-0000" && (
									<a
										href={`tel:${siteConfig.contact.tel}`}
										className="flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground"
									>
										<Phone className="h-4 w-4 text-[#7c3aed]" />
										{siteConfig.contact.tel}
									</a>
								)}
								<a
									href={`mailto:${siteConfig.contact.email}`}
									className="flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground"
								>
									<Mail className="h-4 w-4 text-[#7c3aed]" />
									{siteConfig.contact.email}
								</a>
							</div>
						</div>

						{/* Right: detailed form */}
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	);
}
