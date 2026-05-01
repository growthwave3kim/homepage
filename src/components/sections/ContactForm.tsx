"use client";

import { CheckCircle2, CheckIcon, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";

const SERVICE_OPTIONS = [
	{ id: "blog", label: "네이버 블로그" },
	{ id: "shortform", label: "숏폼 제작" },
	{ id: "both", label: "통합 패키지" },
] as const;

const PROFESSION_OPTIONS = [
	{ id: "lawyer", label: "변호사" },
	{ id: "oriental", label: "한의사" },
	{ id: "patent", label: "변리사" },
	{ id: "labor", label: "노무사" },
	{ id: "tax", label: "세무사" },
	{ id: "appraiser", label: "감정평가사" },
	{ id: "other", label: "기타" },
] as const;

export default function ContactForm() {
	const [services, setServices] = useState<string[]>([]);
	const [sent, setSent] = useState(false);

	function toggleService(id: string) {
		setServices((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
		if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
			e.preventDefault();
		}
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const subject = encodeURIComponent(
			`[상담 신청] ${fd.get("company") ?? ""} · ${fd.get("name") ?? ""}`,
		);
		const body = encodeURIComponent(
			[
				`회사/소속명: ${fd.get("company") ?? ""}`,
				`직군: ${fd.get("profession") ?? ""}`,
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
		<div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
			<p className="mb-1 font-semibold text-[#7c3aed] text-sm uppercase tracking-widest">
				상세 문의
			</p>
			<h3 className="mb-6 font-bold text-foreground text-xl">자세히 알려주세요</h3>
			<AnimatePresence mode="wait">
				{sent ? (
					<motion.div
						key="success"
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						className="flex flex-col items-center gap-3 py-12 text-center"
					>
						<div className="gradient-brand mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full">
							<CheckCircle2 className="h-8 w-8 text-white" />
						</div>
						<h3 className="font-bold text-foreground text-xl">신청이 완료되었습니다</h3>
						<p className="text-muted-foreground text-sm">영업일 1일 내로 직접 연락드리겠습니다.</p>
					</motion.div>
				) : (
					<motion.form
						key="form"
						onSubmit={handleSubmit}
						onKeyDown={handleKeyDown}
						className="space-y-5"
					>
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-1.5">
								<Label htmlFor="company">
									회사/소속명 <span className="font-normal text-red-400">*</span>
								</Label>
								<Input
									id="company"
									name="company"
									placeholder="예: OO 한의원, 홍길동 변호사"
									required
								/>
							</div>
							<div className="space-y-1.5">
								<Label htmlFor="profession">직군</Label>
								<div className="relative">
									<select
										id="profession"
										name="profession"
										className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm text-foreground ring-offset-background transition-colors hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
									>
										<option value="" className="text-muted-foreground">
											선택해주세요
										</option>
										{PROFESSION_OPTIONS.map((opt) => (
											<option key={opt.id} value={opt.label}>
												{opt.label}
											</option>
										))}
									</select>
									<ChevronDown
										className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-400"
										aria-hidden="true"
									/>
								</div>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-1.5">
								<Label htmlFor="name">
									담당자 이름 <span className="font-normal text-red-400">*</span>
								</Label>
								<Input id="name" name="name" placeholder="홍길동" required />
							</div>
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
						</div>

						<div className="space-y-1.5">
							<Label htmlFor="contact-email">이메일</Label>
							<Input id="contact-email" name="email" type="email" placeholder="name@example.com" />
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
								rows={3}
								placeholder="현재 마케팅 상황이나 궁금한 점을 자유롭게 적어주세요."
							/>
						</div>

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
								<span className="text-red-400">*</span> 개인정보 수집·이용에 동의합니다. 수집된
								정보는 상담 목적으로만 사용됩니다.
							</label>
						</div>

						<button
							type="submit"
							className="gradient-brand w-full rounded-2xl py-4 font-semibold text-base text-white shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90"
						>
							무료 상담 신청
						</button>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
}
