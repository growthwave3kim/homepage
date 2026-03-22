import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "서비스", href: "/services" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "FAQ", href: "/faq" },
];

export const COMPANY_INFO = {
  name: "GrowthWave",
  nameEn: "GrowthWave",
  representative: "김도현",
  address: "서울특별시 강남구 테헤란로 427 위워크타워 12층",
  phone: "02-6952-0837",
  email: "hello@growthwave.kr",
  hours: "평일 10:00 - 19:00 (주말/공휴일 휴무)",
  businessNumber: "492-87-02531",
  socials: {
    instagram: "https://www.instagram.com/growthwave.kr",
    blog: "https://blog.naver.com/growthwave",
  },
};
