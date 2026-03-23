import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer>
      {/* CTA 배너 */}
      <section className="relative overflow-hidden bg-[oklch(0.10_0.025_265)] py-20 lg:py-24">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.36_0.09_265/0.15),transparent_65%)] blur-[90px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center lg:px-8">
          <p className="mb-3 text-[11px] font-medium tracking-[0.4em] text-white/30 uppercase">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            브랜드의 성장, 지금 시작하세요
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/45">
            무료 상담을 통해 브랜드에 맞는 맞춤 전략을 제안드립니다.
          </p>
          <Link
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[oklch(0.12_0.025_265)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_oklch(0.98_0.01_250/0.20)]"
          >
            무료 상담 신청
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 푸터 본문 */}
      <div className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* 브랜드 */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <Image
                  src="/images/logo.png"
                  alt="GrowthWave"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
                <span className="text-lg font-bold tracking-tight">
                  GrowthWave
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                데이터와 크리에이티브로
                <br />
                브랜드의 성장을 디자인합니다
              </p>
              <div className="mt-6">
                <FooterSocial />
              </div>
            </div>

            {/* 링크 */}
            <div className="lg:col-span-4">
              <FooterLinks />
            </div>

            {/* 연락처 */}
            <div className="lg:col-span-4">
              <FooterContact />
            </div>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="border-t">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
              reserved. 대표: {COMPANY_INFO.representative}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                개인정보처리방침
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
