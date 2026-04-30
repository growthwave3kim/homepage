"use client";

import { CheckCircle2, CheckIcon, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const TRUST_BADGES = ["첫 상담 무료", "진행 의무 없음", "영업일 1일 내 회신"] as const;

const SERVICE_OPTIONS = [
	{ id: "blog", label: "네이버 블로그" },
	{ id: "shortform", label: "숏폼 제작" },
	{ id: "both", label: "통합 패키지" },
] as const;

export default function Contact() {
	const [services, setServices] = useState<string[]>([]);
	const [sent, setSent] = useState(false);

	function toggleService(id: string) {
		setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const subject = encodeURIComponent(
			`[상담 신청] ${fd.get("firm") ?? ""} · ${fd.get("name") ?? ""}`,
		);
		const body = encodeURIComponent(
			[
				`법무법인명: ${fd.get("firm") ?? ""}`,
				`담당자: ${fd.get("name") ?? ""}`,
				`연락처: ${fd.get("tel") ?? ""}`,
				`이메일: ${fd.get("email") ?? ""}`,
				`관심 서비스: ${services.length ? services.join(", ") : "미선택"}`,
				`\n문의 내용:\n${fd.get("message") ?? ""}`,
			].join("\n"),
		);
		window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
		setSent(true);
	}

	return (
		<section id="contact" className="bg-slate-50 px-4 py-24">
			<div className="mx-auto max-w-7xl">
				<div className="grid items-start gap-16 lg:grid-cols-2">
					{/* Left: Copy + trust signals */}
					<Reveal>
						<SectionHeading
							eyebrow="Contact"
							title="변호사 마케팅, 무료 상담부터 시작하세요"
							sub="법무법인 50곳의 마케팅을 만든 팀이 직접 답변드립니다"
							align="left"
							className="mb-10"
						/>
						<ul className="mb-10 space-y-4">
							{TRUST_BADGES.map((badge) => (
								<li key={badge} className="flex items-center gap-3">
									<CheckCircle2 className="h-5 w-5 shrink-0 text-[#7c3aed]" />
									<span className="font-medium text-foreground">{badge}</span>
								</li>
							))}
						</ul>
						<div className="space-y-3 border-slate-200 border-t pt-8">
							<a
								href={`tel:${siteConfig.contact.tel}`}
								className="flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground"
							>
								<Phone className="h-4 w-4 text-[#7c3aed]" />
								{siteConfig.contact.tel}
							</a>
							<a
								href={`mailto:${siteConfig.contact.email}`}
								className="flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground"
							>
								<Mail className="h-4 w-4 text-[#7c3aed]" />
								{siteConfig.contact.email}
							</a>
							{/* TODO: 카카오톡 채널 ID 발급 후 href 교체 */}
							<a
								href="https://pf.kakao.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground"
							>
								<MessageCircle className="h-4 w-4 text-[#7c3aed]" />
								카카오톡 채널 상담
							</a>
						</div>
					</Reveal>

					{/* Right: Form */}
					<Reveal delay={0.15}>
						<AnimatePresence mode="wait">
							{sent ? (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.96 }}
									animate={{ opacity: 1, scale: 1 }}
									className="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
								>
									<div className="gradient-brand mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
										<CheckCircle2 className="h-8 w-8 text-white" />
									</div>
									<h3 className="mb-2 font-bold text-foreground text-xl">신청이 완료되었습니다</h3>
									<p className="text-muted-foreground text-sm">
										영업일 1일 내로 직접 연락드리겠습니다.
									</p>
								</motion.div>
							) : (
								<motion.form
									key="form"
									onSubmit={handleSubmit}
									className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]"
								>
									<div className="space-y-5">
										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-1.5">
												<Label htmlFor="firm">
													법무법인명 <span className="font-normal text-red-400">*</span>
												</Label>
												<Input id="firm" name="firm" placeholder="예: 법무법인 그로스" required />
											</div>
											<div className="space-y-1.5">
												<Label htmlFor="name">
													담당자 이름 <span className="font-normal text-red-400">*</span>
												</Label>
												<Input id="name" name="name" placeholder="홍길동" required />
											</div>
										</div>

										<div className="grid gap-4 sm:grid-cols-2">
											<div className="space-y-1.5">
												<Label htmlFor="contact-tel">
													연락처 <span className="font-normal text-red-400">*</span>
												</Label>
												<Input
													id="contact-tel"
													name="tel"
													type="tel"
													placeholder="010-0000-0000"
													required
												/>
											</div>
											<div className="space-y-1.5">
												<Label htmlFor="contact-email">
													이메일 <span className="font-normal text-red-400">*</span>
												</Label>
												<Input
													id="contact-email"
													name="email"
													type="email"
													placeholder="name@law.com"
													required
												/>
											</div>
										</div>

										{/* Service selection pills */}
										<div className="space-y-2">
											<Label>관심 서비스</Label>
											<div className="flex flex-wrap gap-2">
												{SERVICE_OPTIONS.map((opt) => (
													<button
														key={opt.id}
														type="button"
														onClick={() => toggleService(opt.id)}
														className={`flex items-center gap-1.5 rounded-full border px-4 py-2 font-medium text-sm transition-all ${
															services.includes(opt.id)
																? "gradient-brand border-transparent text-white"
																: "border-slate-200 text-slate-500 hover:border-[#7c3aed]/40 hover:text-[#7c3aed]"
														}`}
													>
														{services.includes(opt.id) && <CheckIcon className="h-3.5 w-3.5" />}
														{opt.label}
													</button>
												))}
											</div>
										</div>

										<div className="space-y-1.5">
											<Label htmlFor="message">문의 내용</Label>
											<Textarea
												id="message"
												name="message"
												rows={4}
												placeholder="현재 마케팅 상황이나 궁금한 점을 자유롭게 적어주세요."
											/>
										</div>

										{/* Privacy consent */}
										<div className="flex items-start gap-3">
											<input
												id="privacy"
												name="privacy"
												type="checkbox"
												required
												className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#7c3aed]"
											/>
											<label
												htmlFor="privacy"
												className="cursor-pointer text-muted-foreground text-xs leading-relaxed"
											>
												<span className="text-red-400">*</span> 개인정보 수집·이용에 동의합니다.
												수집된 정보는 상담 목적으로만 사용됩니다.
											</label>
										</div>

										<button
											type="submit"
											className="gradient-brand w-full rounded-2xl py-4 font-semibold text-base text-white shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90"
										>
											무료 상담 신청 →
										</button>
									</div>
								</motion.form>
							)}
						</AnimatePresence>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
