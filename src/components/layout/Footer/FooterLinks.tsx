import Link from "next/link";

const QUICK_LINKS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스소개", href: "/services" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

const SERVICE_LINKS = [
  { label: "콘텐츠 마케팅", href: "/services/blog" },
  { label: "소셜 미디어", href: "/services/instagram" },
  { label: "인플루언서", href: "/services/influencer" },
  { label: "웹사이트 제작", href: "/services/homepage" },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="mb-4 text-sm font-semibold text-foreground">
          바로가기
        </h3>
        <ul className="space-y-3">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mb-4 text-sm font-semibold text-foreground">서비스</h3>
        <ul className="space-y-3">
          {SERVICE_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
