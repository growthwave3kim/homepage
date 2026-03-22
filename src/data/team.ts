import type { TeamMember } from "@/types";

export const CEO = {
  name: "김도현",
  role: "대표이사 · Founder",
  message:
    "GrowthWave는 브랜드가 시장에서 고유한 존재감을 가질 수 있도록 돕습니다. 데이터와 크리에이티브의 교차점에서 가장 효과적인 성장 전략을 설계하고, 클라이언트와 함께 성장하는 파트너가 되겠습니다.",
  philosophy: [
    "데이터 드리븐 의사결정",
    "크리에이티브 우선주의",
    "지속 가능한 성장 설계",
  ],
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "이서연",
    role: "Creative Director",
    title: "PRO",
    quote: "좋은 브랜딩은 말하지 않아도 느껴지는 것입니다.",
    description:
      "콘텐츠 전략, 브랜드 디자인, 캠페인 크리에이티브 등 평균 6년 이상의 경력을 보유한 크리에이티브 디렉터입니다.",
  },
  {
    name: "박준혁",
    role: "Performance Marketer",
    title: "PRO",
    quote: "숫자가 말하게 하되, 스토리로 설득합니다.",
    description:
      "퍼포먼스 광고, 데이터 분석, 그로스 해킹 등 다양한 실전 경험을 갖춘 퍼포먼스 마케터입니다.",
  },
];

export const ORG_STRUCTURE = {
  ceo: "대표이사",
  departments: [
    {
      name: "전략사업본부",
      teams: ["브랜드 전략팀", "퍼포먼스 마케팅팀", "데이터 분석팀"],
    },
    {
      name: "크리에이티브본부",
      teams: ["콘텐츠 제작팀", "디자인팀", "영상 제작팀"],
    },
  ],
};
