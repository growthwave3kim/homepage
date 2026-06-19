import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

// ─────────────────────────────────────────────────────────────────────────────
// ⚠️ TODO: 온케팅 실제 사이트 주소로 교체하세요.
const ONKETING_URL = "https://www.onketing.kr";
const ONKETING_NAME = "온케팅";
// ─────────────────────────────────────────────────────────────────────────────

export const NoticePage = () => {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 text-center">
			{/* 배경 장식 */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: "radial-gradient(60% 50% at 50% 35%, rgba(124,58,237,0.10), transparent 70%)",
				}}
			/>

			<p className="font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">Notice</p>

			<h1 className="mt-6 font-bold text-3xl text-foreground leading-tight tracking-tight sm:text-4xl md:text-5xl">
				그로스웨이브는
				<br />
				<span className="gradient-text">{ONKETING_NAME}</span>으로 이전했습니다.
			</h1>

			<p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg">
				그동안 그로스웨이브를 찾아주셔서 감사합니다.
				<br />
				이제 {ONKETING_NAME}에서 이어서 만나보실 수 있습니다.
			</p>

			<a
				href={ONKETING_URL}
				className="gradient-brand mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
			>
				{ONKETING_NAME} 바로가기
				<ArrowRight className="h-5 w-5" />
			</a>

			<footer className="mt-16 text-muted-foreground text-xs leading-relaxed">
				<p>
					{siteConfig.contact.businessName} · 사업자등록번호 {siteConfig.contact.businessNumber}
				</p>
				<p className="mt-1">기존 문의 관련 사항은 {ONKETING_NAME}으로 문의해 주세요.</p>
				<p className="mt-1">
					그로스웨이브로 접수된 개인정보의 열람·정정·삭제 요청은{" "}
					<a href={`mailto:${siteConfig.contact.email}`} className="underline">
						{siteConfig.contact.email}
					</a>{" "}
					로 연락해 주세요.
				</p>
			</footer>
		</main>
	);
};

export default NoticePage;
