import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/config/site";

const pretendard = localFont({
	src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
	variable: "--font-pretendard",
	display: "swap",
	weight: "45 920",
	adjustFontFallback: "Arial",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: "온케팅으로 이전했습니다 | 그로스웨이브",
	description: "그로스웨이브는 온케팅으로 이전했습니다. 온케팅에서 이어서 만나보실 수 있습니다.",
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: "온케팅으로 이전했습니다 | 그로스웨이브",
		description: "그로스웨이브는 온케팅으로 이전했습니다. 온케팅에서 이어서 만나보실 수 있습니다.",
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: siteConfig.url,
	},
	// GSC·네이버 서치어드바이저 소유확인은 유지 — 추후 온케팅으로 301 이전/색인 제거 시 필요
	verification: {
		google: "UWjs_RkjrB3REQAKEWuywkJi3_X6bphhaIyz1_cnulU",
		other: {
			"naver-site-verification": "269c8d8086205fbe30edc1db42f7623790ec544e",
		},
	},
};

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="ko"
			className={`${pretendard.variable} ${inter.variable} h-full`}
			suppressHydrationWarning
		>
			<body
				className="flex min-h-full flex-col bg-background text-foreground antialiased"
				suppressHydrationWarning
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
