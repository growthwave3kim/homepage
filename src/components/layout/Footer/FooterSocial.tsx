"use client";

import { Instagram } from "lucide-react";

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
  const handleSocial = (name: string) => {
    alert(`${name} 채널은 준비 중입니다.`);
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => handleSocial("Instagram")}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleSocial("네이버 블로그")}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        aria-label="네이버 블로그"
      >
        <NaverBlogIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
