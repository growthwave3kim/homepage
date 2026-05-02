import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} | 전문직 마케팅 대행사`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "linear-gradient(135deg, #7c3aed 0%, #4338ca 50%, #1e3a8a 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "sans-serif",
				position: "relative",
			}}
		>
			{/* Wave decor */}
			<div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: 80,
					background: "rgba(255,255,255,0.06)",
					clipPath: "ellipse(55% 100% at 50% 100%)",
				}}
			/>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 20,
					padding: "0 80px",
					textAlign: "center",
				}}
			>
				<div
					style={{
						fontSize: 14,
						fontWeight: 600,
						color: "rgba(255,255,255,0.6)",
						letterSpacing: "0.3em",
						textTransform: "uppercase",
					}}
				>
					변호사·의사·한의사 등 전문직 마케팅
				</div>

				<div
					style={{
						fontSize: 80,
						fontWeight: 800,
						color: "#ffffff",
						letterSpacing: "-0.02em",
						lineHeight: 1,
					}}
				>
					{siteConfig.name}
				</div>

				<div
					style={{
						fontSize: 22,
						fontWeight: 400,
						color: "rgba(255,255,255,0.7)",
						maxWidth: 650,
						lineHeight: 1.5,
					}}
				>
					{siteConfig.description}
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 36,
					fontSize: 14,
					color: "rgba(255,255,255,0.35)",
					letterSpacing: "0.05em",
				}}
			>
				{siteConfig.url.replace("https://", "")}
			</div>
		</div>,
		{ ...size },
	);
}
