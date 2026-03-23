import { Instagram } from "lucide-react";
import { COMPANY_INFO } from "@/data/navigation";

function NaverBlogIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845Z" />
    </svg>
  );
}

export default function FooterSocial() {
  return (
    <div className="flex items-center gap-3">
      <a
        href={COMPANY_INFO.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={COMPANY_INFO.socials.blog}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
        aria-label="네이버 블로그"
      >
        <NaverBlogIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
