import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
	const fontRegular = readFileSync(
		join(process.cwd(), "node_modules/pretendard/dist/public/static/Pretendard-Regular.otf"),
	);
	const fontBold = readFileSync(
		join(process.cwd(), "node_modules/pretendard/dist/public/static/Pretendard-Bold.otf"),
	);

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					backgroundColor: "#0a0a0a",
					padding: "72px 80px",
					position: "relative",
					fontFamily: "Pretendard",
				}}
			>
				{/* Purple orb */}
				<div
					style={{
						position: "absolute",
						top: -120,
						left: -120,
						width: 480,
						height: 480,
						borderRadius: "50%",
						background: "rgba(124,58,237,0.35)",
						filter: "blur(80px)",
						display: "flex",
					}}
				/>

				{/* Logo + URL */}
				<div style={{ display: "flex", alignItems: "center", marginBottom: "auto" }}>
					<span
						style={{
							color: "#ffffff",
							fontSize: 28,
							fontWeight: 700,
							letterSpacing: "-0.02em",
							fontFamily: "Pretendard",
						}}
					>
						Growth Wave
					</span>
					<span
						style={{
							color: "rgba(255,255,255,0.3)",
							fontSize: 16,
							marginLeft: 16,
							fontFamily: "Pretendard",
						}}
					>
						growthwave.co.kr
					</span>
				</div>

				{/* Main */}
				<div style={{ display: "flex", flexDirection: "column", marginBottom: 48 }}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							backgroundColor: "rgba(124,58,237,0.15)",
							border: "1px solid rgba(124,58,237,0.35)",
							borderRadius: 100,
							padding: "8px 18px",
							marginBottom: 28,
							width: "fit-content",
						}}
					>
						<span
							style={{ color: "#a78bfa", fontSize: 18, fontWeight: 600, fontFamily: "Pretendard" }}
						>
							전문직 12개 직군 · 광고 위반 0건
						</span>
					</div>

					<span
						style={{
							color: "#ffffff",
							fontSize: 66,
							fontWeight: 700,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							fontFamily: "Pretendard",
						}}
					>
						전문직 마케팅은
					</span>
					<span
						style={{
							color: "#7c3aed",
							fontSize: 66,
							fontWeight: 700,
							lineHeight: 1.15,
							letterSpacing: "-0.03em",
							fontFamily: "Pretendard",
						}}
					>
						달라야 합니다
					</span>
				</div>

				{/* Bottom bar */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingTop: 28,
						borderTop: "1px solid rgba(255,255,255,0.08)",
					}}
				>
					<span
						style={{
							color: "rgba(255,255,255,0.4)",
							fontSize: 20,
							fontFamily: "Pretendard",
						}}
					>
						변호사 · 의사 · 한의사 · 수의사 · 노무사 · 세무사
					</span>
					<span
						style={{
							color: "rgba(255,255,255,0.25)",
							fontSize: 17,
							fontFamily: "Pretendard",
						}}
					>
						전문직 마케팅 대행사
					</span>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{ name: "Pretendard", data: fontRegular, weight: 400 },
				{ name: "Pretendard", data: fontBold, weight: 700 },
			],
		},
	);
}
