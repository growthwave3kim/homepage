import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/shared/PageTransition";
import StickyCTA from "@/components/shared/StickyCTA";
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
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: [...siteConfig.keywords],
	authors: [...siteConfig.authors],
	creator: siteConfig.creator,
	openGraph: {
		type: "website",
		locale: siteConfig.locale,
		url: siteConfig.url,
		siteName: siteConfig.name,
		title: siteConfig.title,
		description: siteConfig.description,
		images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.title,
		description: siteConfig.description,
		images: ["/opengraph-image"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true, "max-image-preview": "large" },
	},
	alternates: {
		canonical: siteConfig.url,
	},
};

const DUMMY_TEL = "02-000-0000";

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "ProfessionalService",
	name: `${siteConfig.name} (${siteConfig.nameKo})`,
	description: siteConfig.description,
	url: siteConfig.url,
	...(siteConfig.contact.tel !== DUMMY_TEL && { telephone: siteConfig.contact.tel }),
	email: siteConfig.contact.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: siteConfig.contact.address,
		addressCountry: "KR",
	},
	serviceType: [
		"전문직 마케팅",
		"블로그 마케팅",
		"숏폼 마케팅",
		"변호사 마케팅",
		"의사 마케팅",
		"한의사 마케팅",
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
				<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
				<Header />
				<main className="flex-1">
					<PageTransition>{children}</PageTransition>
				</main>
				<Footer />
				<StickyCTA />
			</body>
		</html>
	);
}
