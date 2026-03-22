import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { COMPANY_INFO } from "@/data/navigation";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              GrowthWave
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              데이터와 크리에이티브로
              <br />
              브랜드의 성장을 디자인합니다
            </p>
            <div className="mt-6">
              <FooterSocial />
            </div>
          </div>

          <div className="lg:col-span-1">
            <FooterLinks />
          </div>

          <div className="lg:col-span-2">
            <FooterContact />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved. 대표: {COMPANY_INFO.representative}
          </p>
          <div className="flex gap-4">
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
    </footer>
  );
}
