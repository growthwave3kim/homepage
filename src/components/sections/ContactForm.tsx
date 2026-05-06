"use client";

import { CheckCircle2, CheckIcon, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const SOURCE_OPTIONS = [
	{ id: "instagram", label: "인스타그램" },
	{ id: "naver", label: "네이버 검색" },
	{ id: "referral", label: "지인 소개" },
	{ id: "blog", label: "블로그" },
	{ id: "other", label: "기타" },
] as const;

const PROFESSION_OPTIONS = [
	{ id: "lawyer", label: "변호사" },
	{ id: "doctor", label: "의사" },
	{ id: "oriental", label: "한의사" },
	{ id: "vet", label: "수의사" },
	{ id: "labor", label: "노무사" },
	{ id: "tax", label: "세무사" },

	{ id: "other", label: "기타" },
] as const;

export default function ContactForm() {
	const [source, setSource] = useState("");
	const [sent, setSent] = useState(false);
	const [profession, setProfession] = useState("");
	const [professionOpen, setProfessionOpen] = useState(false);
	const professionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function handleOutside(e: MouseEvent) {
			if (professionRef.current && !professionRef.current.contains(e.target as Node)) {
				setProfessionOpen(false);
			}
		}
		if (professionOpen) document.addEventListener("mousedown", handleOutside);
		return () => document.removeEventListener("mousedown", handleOutside);
	}, [professionOpen]);

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
				`유입 경로: ${source || "미선택"}`,
				`\n문의 내용:\n${fd.get("message") ?? ""}`,
			].join("\n"),
		);
		window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
		setSent(true);
	}

	return (
		<div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
			<p className="mb-1 font-semibold text-[#7c3aed] text-sm uppercase tracking-widest">
				상세 문의
			</p>
			<h2 className="mb-6 font-bold text-foreground text-xl">자세히 알려주세요</h2>
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
						<h2 className="font-bold text-foreground text-xl">신청이 완료되었습니다</h2>
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
									회사/소속명 <span className="font-normal text-destructive">*</span>
								</Label>
								<Input
									id="company"
									name="company"
									placeholder="예: OO 한의원, 홍길동 변호사"
									required
								/>
							</div>
							<div className="space-y-1.5">
								<Label>직군</Label>
								<div ref={professionRef} className="relative">
									<input type="hidden" name="profession" value={profession} />
									<button
										type="button"
										onClick={() => setProfessionOpen((v) => !v)}
										className={cn(
											"flex h-12 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm transition-colors",
											professionOpen
												? "border-[#7c3aed] ring-2 ring-[#7c3aed]/20"
												: "border-input hover:border-slate-400",
											profession ? "text-foreground" : "text-muted-foreground",
										)}
									>
										<span>{profession || "선택해주세요"}</span>
										<ChevronDown
											className={cn(
												"h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200",
												professionOpen && "rotate-180",
											)}
											aria-hidden="true"
										/>
									</button>
									<AnimatePresence>
										{professionOpen && (
											<motion.ul
												initial={{ opacity: 0, y: -6 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -6 }}
												transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
												className="absolute top-full right-0 left-0 z-50 mt-1 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
											>
												{PROFESSION_OPTIONS.map((opt) => (
													<li key={opt.id}>
														<button
															type="button"
															onClick={() => {
																setProfession(opt.label);
																setProfessionOpen(false);
															}}
															className={cn(
																"flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm transition-colors hover:bg-slate-50",
																profession === opt.label
																	? "font-semibold text-[#7c3aed]"
																	: "text-foreground",
															)}
														>
															<span className="flex h-4 w-4 shrink-0 items-center justify-center">
																{profession === opt.label && (
																	<CheckIcon className="h-3.5 w-3.5 text-[#7c3aed]" />
																)}
															</span>
															{opt.label}
														</button>
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								</div>
							</div>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<div className="space-y-1.5">
								<Label htmlFor="name">
									담당자 이름 <span className="font-normal text-destructive">*</span>
								</Label>
								<Input id="name" name="name" placeholder="홍길동" required />
							</div>
							<div className="space-y-1.5">
								<Label htmlFor="contact-tel">
									연락처 <span className="font-normal text-destructive">*</span>
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

						{/* Source selection pills */}
						<div className="space-y-2">
							<Label>유입 경로</Label>
							<div className="flex flex-wrap gap-2">
								{SOURCE_OPTIONS.map((opt) => (
									<button
										key={opt.id}
										type="button"
										onClick={() => setSource(opt.label)}
										className={cn(
											"flex items-center gap-1.5 rounded-full border px-4 py-2 font-medium text-sm transition-all",
											source === opt.label
												? "gradient-brand border-transparent text-white"
												: "border-slate-200 text-slate-500 hover:border-[#7c3aed]/40 hover:text-[#7c3aed]",
										)}
									>
										{source === opt.label && <CheckIcon className="h-3.5 w-3.5" />}
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
								<span className="text-destructive">*</span> 개인정보 수집·이용에 동의합니다. 수집된
								정보는 상담 목적으로만 사용됩니다.
							</label>
						</div>

						<button
							type="submit"
							className="gradient-brand w-full rounded-2xl py-3.5 font-semibold text-base text-white shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90"
						>
							무료 상담 신청
						</button>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
}
