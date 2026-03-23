import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import FloatingContact from "@/components/shared/FloatingContact";
import SplashScreen from "@/components/shared/SplashScreen";
import CustomCursor from "@/components/shared/CustomCursor";
import QueryProvider from "@/providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GrowthWave | 통합 마케팅 에이전시",
    template: "%s | GrowthWave",
  },
  description:
    "데이터 기반의 전략과 크리에이티브로 브랜드의 지속 가능한 성장을 디자인합니다.",
  keywords: [
    "마케팅 에이전시",
    "콘텐츠 마케팅",
    "소셜 미디어 마케팅",
    "인플루언서 마케팅",
    "웹사이트 제작",
    "퍼포먼스 마케팅",
    "GrowthWave",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "GrowthWave",
    title: "GrowthWave | 통합 마케팅 에이전시",
    description:
      "데이터 기반의 전략과 크리에이티브로 브랜드의 지속 가능한 성장을 디자인합니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QueryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <FloatingContact />
          <SplashScreen />
          <CustomCursor />
        </QueryProvider>
      </body>
    </html>
  );
}
