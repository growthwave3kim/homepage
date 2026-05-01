"use client";

import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";

export default function QuickContactForm() {
	const [sent, setSent] = useState(false);

	function handleKeyDown(e: React.KeyboardEvent<HTMLFormElement>) {
		if (e.key === "Enter" && (e.target as HTMLElement).tagName !== "TEXTAREA") {
			e.preventDefault();
		}
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const subject = encodeURIComponent(`[빠른 문의] ${fd.get("name") ?? ""}`);
		const body = encodeURIComponent(
			[
				`이름: ${fd.get("name") ?? ""}`,
				`연락처: ${fd.get("tel") ?? ""}`,
				`\n문의 내용:\n${fd.get("message") ?? ""}`,
			].join("\n"),
		);
		window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
		setSent(true);
	}

	return (
		<div className="rounded-2xl border border-[#7c3aed]/20 bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
			<p className="mb-1 font-semibold text-[#7c3aed] text-sm uppercase tracking-widest">
				빠른 문의
			</p>
			<h3 className="mb-6 font-bold text-foreground text-xl">3줄로 바로 문의하기</h3>
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
						<p className="font-bold text-foreground text-xl">접수되었습니다</p>
						<p className="text-muted-foreground text-sm">영업일 1일 내 연락드립니다.</p>
					</motion.div>
				) : (
					<motion.form
						key="form"
						onSubmit={handleSubmit}
						onKeyDown={handleKeyDown}
						className="space-y-4"
					>
						<div className="space-y-1.5">
							<Label htmlFor="quick-name">
								이름 <span className="font-normal text-destructive">*</span>
							</Label>
							<Input id="quick-name" name="name" placeholder="홍길동" required />
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="quick-tel">
								연락처 <span className="font-normal text-destructive">*</span>
							</Label>
							<Input id="quick-tel" name="tel" type="tel" placeholder="010-0000-0000" required />
						</div>
						<div className="space-y-1.5">
							<Label htmlFor="quick-message">
								문의 내용 <span className="font-normal text-destructive">*</span>
							</Label>
							<Input
								id="quick-message"
								name="message"
								placeholder="예: 변호사 블로그 마케팅 문의드립니다"
								required
							/>
						</div>
						<button
							type="submit"
							className="gradient-brand w-full rounded-2xl py-3.5 font-semibold text-sm text-white shadow-[0_4px_20px_rgba(124,58,237,0.25)] transition-opacity hover:opacity-90"
						>
							바로 문의하기
						</button>
						<p className="text-center text-muted-foreground text-xs">
							영업일 1일 내 회신 · 계약 압박 없음
						</p>
					</motion.form>
				)}
			</AnimatePresence>
		</div>
	);
}
