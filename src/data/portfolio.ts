import type { PortfolioItem } from "@/types";

export const PORTFOLIO_CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "brand", label: "브랜드 마케팅" },
  { id: "viral", label: "퍼포먼스" },
  { id: "homepage", label: "웹사이트" },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "MAISON BLANC",
    category: "homepage",
    description: "프리미엄 라이프스타일 브랜드 웹사이트",
    image: "/images/portfolio/maison-blanc.jpg",
    tags: ["브랜드 사이트", "Next.js", "모션 디자인"],
  },
  {
    id: "2",
    title: "ATELIER NOIR",
    category: "homepage",
    description: "패션 하우스 디지털 쇼룸",
    image: "/images/portfolio/atelier-noir.jpg",
    tags: ["패션", "이커머스", "반응형"],
  },
  {
    id: "3",
    title: "VERRE",
    category: "homepage",
    description: "프리미엄 주얼리 브랜드 사이트",
    image: "/images/portfolio/verre.jpg",
    tags: ["주얼리", "럭셔리", "3D 인터랙션"],
  },
  {
    id: "4",
    title: "ONUL",
    category: "homepage",
    description: "감성 카페 브랜드 온라인 스토어",
    image: "/images/portfolio/onul.jpg",
    tags: ["F&B", "이커머스", "예약 시스템"],
  },
  {
    id: "5",
    title: "루미에르 뷰티",
    category: "brand",
    description: "뷰티 브랜드 콘텐츠 마케팅 & SEO",
    image: "/images/portfolio/lumiere.jpg",
    tags: ["뷰티", "콘텐츠", "SEO"],
  },
  {
    id: "6",
    title: "커넥트 패션",
    category: "brand",
    description: "패션 브랜드 소셜 미디어 통합 운영",
    image: "/images/portfolio/connect-fashion.jpg",
    tags: ["패션", "인스타그램", "메타 광고"],
  },
  {
    id: "7",
    title: "그린테이블",
    category: "viral",
    description: "F&B 브랜드 인플루언서 캠페인",
    image: "/images/portfolio/green-table.jpg",
    tags: ["F&B", "인플루언서", "퍼포먼스"],
  },
  {
    id: "8",
    title: "무브먼트",
    category: "viral",
    description: "피트니스 브랜드 바이럴 캠페인",
    image: "/images/portfolio/movement.jpg",
    tags: ["피트니스", "바이럴", "숏폼"],
  },
  {
    id: "9",
    title: "닥터플랜",
    category: "brand",
    description: "헬스케어 브랜드 통합 디지털 마케팅",
    image: "/images/portfolio/dr-plan.jpg",
    tags: ["헬스케어", "통합마케팅", "퍼포먼스"],
  },
];
