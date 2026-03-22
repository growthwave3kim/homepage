import type { FaqItem } from "@/types";

export const FAQ_CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "general", label: "일반" },
  { id: "service", label: "서비스" },
  { id: "pricing", label: "비용" },
  { id: "process", label: "진행 과정" },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "1",
    question: "마케팅 상담은 어떻게 진행되나요?",
    answer:
      "홈페이지 내 견적문의 폼을 작성해주시거나, 전화(02-6952-0837) 또는 이메일(hello@growthwave.kr)로 연락주시면 됩니다. 전담 매니저가 배정되어 브랜드 현황을 파악한 후 맞춤 전략을 제안드립니다.",
    category: "general",
  },
  {
    id: "2",
    question: "최소 계약 기간이 있나요?",
    answer:
      "서비스에 따라 다릅니다. 콘텐츠 마케팅과 소셜 미디어 운영은 최소 3개월, 인플루언서 마케팅은 캠페인 단위로 진행됩니다. 웹사이트 제작은 프로젝트 단위로 진행되며, 상세한 일정은 상담 시 안내드립니다.",
    category: "process",
  },
  {
    id: "3",
    question: "예산은 어느 정도가 필요한가요?",
    answer:
      "브랜드 규모와 목표에 따라 맞춤 견적을 제공합니다. 콘텐츠·소셜 미디어 운영은 월 150만원대부터, 웹사이트 제작은 프로젝트 규모에 따라 상이합니다. 정확한 견적은 무료 상담을 통해 안내드립니다.",
    category: "pricing",
  },
  {
    id: "4",
    question: "콘텐츠 제작도 대행해주시나요?",
    answer:
      "네, 기획부터 촬영, 편집, 발행까지 전 과정을 원스톱으로 대행합니다. 전문 에디터와 디자이너가 브랜드 톤앤매너에 맞는 고품질 콘텐츠를 제작합니다.",
    category: "service",
  },
  {
    id: "5",
    question: "성과 리포트는 어떻게 받을 수 있나요?",
    answer:
      "월간 성과 리포트를 정기적으로 제공합니다. 노출, 도달, 참여율, 전환율 등 핵심 KPI를 포함한 분석 리포트와 함께 다음 달 전략 방향도 함께 안내드립니다.",
    category: "service",
  },
  {
    id: "6",
    question: "중도 해지가 가능한가요?",
    answer:
      "계약 조건에 따라 중도 해지가 가능합니다. 이미 진행된 작업에 대한 비용은 정산이 필요할 수 있으며, 자세한 사항은 계약 시 안내드립니다.",
    category: "pricing",
  },
  {
    id: "7",
    question: "웹사이트 제작 후 유지보수는 어떻게 되나요?",
    answer:
      "런칭 후 6개월간 무상 유지보수를 제공합니다. 이후에는 월간 유지보수 계약을 통해 지속적인 관리가 가능합니다. SSL 갱신, 보안 패치, 기능 업데이트 등이 포함됩니다.",
    category: "service",
  },
  {
    id: "8",
    question: "다른 에이전시와 무엇이 다른가요?",
    answer:
      "GrowthWave는 단순 실행이 아닌 전략적 파트너십을 추구합니다. 데이터 기반의 정밀한 전략 설계, 전담 매니저 1:1 배정, 투명한 성과 리포팅을 통해 브랜드의 실질적인 성장을 이끌어냅니다.",
    category: "general",
  },
];
