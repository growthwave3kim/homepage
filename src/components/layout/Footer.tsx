import Logo from "@/components/shared/Logo";
import WaveDivider from "@/components/shared/WaveDivider";
import { siteConfig } from "@/config/site";

const isDummyTel = siteConfig.contact.tel === "02-000-0000";
const isDummyBizNum = siteConfig.contact.businessNumber === "000-00-00000";

export default function Footer() {
	return (
		<footer className="bg-[#0f172a] text-white">
			<WaveDivider fillColor="#0f172a" />
			<div className="mx-auto max-w-7xl px-4 pt-16 pb-10 lg:px-8">
				<div className="grid gap-10 md:grid-cols-2">
					{/* Left */}
					<div>
						<Logo variant="light" className="mb-3" />
						<p className="max-w-xs text-slate-400 text-sm leading-relaxed">
							전문직 6개 직군 전용 마케팅 파트너. 의뢰인이 먼저 찾아오는 구조를 만듭니다.
						</p>
						<div className="mt-5 flex gap-3">
							<button
								type="button"
								aria-label="네이버 블로그"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs transition-colors hover:bg-white/20"
							>
								N
							</button>
							<button
								type="button"
								aria-label="인스타그램"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs transition-colors hover:bg-white/20"
							>
								IG
							</button>
							<button
								type="button"
								aria-label="유튜브"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs transition-colors hover:bg-white/20"
							>
								YT
							</button>
							<button
								type="button"
								aria-label="카카오톡"
								className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white text-xs transition-colors hover:bg-white/20"
							>
								KT
							</button>
						</div>
					</div>

					{/* Right */}
					<div className="space-y-1.5 text-slate-400 text-sm md:text-right">
						<p>
							<span className="text-slate-300">회사명</span> {siteConfig.contact.businessName}
						</p>
						{!isDummyBizNum && (
						<p>
							<span className="text-slate-300">사업자등록번호</span>{" "}
							{siteConfig.contact.businessNumber}
						</p>
					)}
						<p>
							<span className="text-slate-300">주소</span> {siteConfig.contact.address}
						</p>
					{!isDummyTel && (
						<p>
							<span className="text-slate-300">TEL</span> {siteConfig.contact.tel}
						</p>
					)}
						<p>
							<span className="text-slate-300">EMAIL</span> {siteConfig.contact.email}
						</p>
					</div>
				</div>

				<div className="mt-10 border-white/10 border-t pt-6 text-center text-slate-600 text-xs">
					Copyright © 2026 Growth Wave. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
