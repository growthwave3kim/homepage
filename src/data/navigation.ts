import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "회사소개",
    href: "/about",
    children: [
      { label: "CEO 인사말", href: "/about" },
      { label: "팀 소개", href: "/about#team" },
    ],
  },
  {
    label: "서비스",
    href: "/services",
    children: [
      { label: "콘텐츠 마케팅", href: "/services/blog" },
      { label: "소셜 미디어", href: "/services/instagram" },
      { label: "인플루언서 마케팅", href: "/services/influencer" },
      { label: "웹사이트 제작", href: "/services/homepage" },
    ],
  },
  { label: "FAQ", href: "/faq" },
];

export const COMPANY_INFO = {
  name: "GrowthWave",
  nameEn: "GrowthWave",
  representative: "김성민",
  address: "서울특별시 강남구 테헤란로 427 위워크타워 12층",
  phone: "010-8415-3244",
  email: "asdn568907@naver.com",
  hours: "평일 10:00 - 19:00 (주말/공휴일 휴무)",
  businessNumber: "492-87-02531",
  socials: {
    instagram: "https://www.instagram.com/growthwave.kr",
    blog: "https://blog.naver.com/growthwave",
  },
};
