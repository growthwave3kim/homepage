import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "blog",
    title: "콘텐츠 마케팅",
    subtitle: "Content Marketing",
    description:
      "검색 결과 상위 노출을 통해 브랜드의 존재감을 만드는 핵심 채널. 네이버 검색 트래픽의 60% 이상이 블로그에서 발생합니다. 한 번 작성된 콘텐츠는 시간이 지나도 고객을 끌어오는 브랜드 자산이 됩니다.",
    icon: "pen-tool",
    href: "/services/blog",
    features: [
      "네이버 검색 최적화(SEO) 전략 설계",
      "브랜드 톤앤매너에 맞는 고품질 콘텐츠",
      "경쟁사 분석 기반 키워드 선정",
      "고객 여정 단계별 콘텐츠 맵핑",
      "10년 이상 경력의 전문 에디터",
      "1:1 전담 매니저 배정",
    ],
    stats: [
      { label: "운영 브랜드", value: "320+" },
      { label: "고객 만족도", value: "4.9" },
      { label: "누적 콘텐츠", value: "15,000+" },
      { label: "평균 노출 순위", value: "Top 3" },
    ],
    process: [
      {
        step: "01",
        title: "브랜드 진단",
        description: "현재 콘텐츠 현황과 검색 포지션 분석",
      },
      {
        step: "02",
        title: "전략 수립",
        description: "키워드 리서치 및 콘텐츠 로드맵 설계",
      },
      {
        step: "03",
        title: "콘텐츠 제작",
        description: "SEO 최적화된 고품질 콘텐츠 제작",
      },
      {
        step: "04",
        title: "발행 및 최적화",
        description: "콘텐츠 발행 후 노출 성과 모니터링",
      },
      {
        step: "05",
        title: "성과 리포팅",
        description: "KPI 분석 및 다음 전략 방향 제안",
      },
    ],
  },
  {
    id: "instagram",
    title: "소셜 미디어",
    subtitle: "Social Media Marketing",
    description:
      "비주얼 중심의 브랜드 스토리텔링으로 고객과의 접점을 만듭니다. 피드 디자인부터 릴스, 스토리까지 — 감각적인 콘텐츠로 브랜드 가치를 전달합니다.",
    icon: "instagram",
    href: "/services/instagram",
    features: [
      "브랜드 아이덴티티 기반 피드 디자인",
      "릴스 & 스토리 콘텐츠 전략",
      "기획, 촬영, 편집, 업로드 올인원",
      "시즌별·트렌드 기반 캠페인 기획",
      "메타 광고 통합 운영 및 최적화",
      "월간 인사이트 리포트 제공",
    ],
    stats: [
      { label: "총 도달", value: "250M+" },
      { label: "평균 참여율", value: "18.7%" },
      { label: "팔로워 성장", value: "+2,100" },
      { label: "광고 ROAS", value: "420%" },
    ],
    process: [
      {
        step: "01",
        title: "채널 분석",
        description: "현재 채널 상태 및 경쟁사 벤치마킹",
      },
      {
        step: "02",
        title: "콘텐츠 전략",
        description: "피드 컨셉, 톤앤매너, 콘텐츠 캘린더",
      },
      {
        step: "03",
        title: "비주얼 제작",
        description: "촬영·디자인 및 영상 편집",
      },
      {
        step: "04",
        title: "채널 운영",
        description: "게시물 관리 및 커뮤니티 매니지먼트",
      },
      {
        step: "05",
        title: "인사이트 분석",
        description: "데이터 기반 전략 고도화",
      },
    ],
  },
  {
    id: "influencer",
    title: "인플루언서 마케팅",
    subtitle: "Influencer Marketing",
    description:
      "소비자의 신뢰를 움직이는 가장 강력한 방법. 팔로워 수가 아닌 실질적 영향력을 분석하고, 브랜드에 최적화된 크리에이터와의 협업으로 자연스러운 구매 전환을 이끌어냅니다.",
    icon: "users",
    href: "/services/influencer",
    features: [
      "데이터 기반 인플루언서 매칭 시스템",
      "실시간 성과 추적 (CTR, CVR, ROAS)",
      "브랜드 적합도 기반 크리에이터 선별",
      "캠페인 가이드라인 및 품질 관리",
      "숏폼·롱폼 콘텐츠 믹스 전략",
      "투명한 정산 및 성과 리포팅",
    ],
    stats: [
      { label: "협업 브랜드", value: "480+" },
      { label: "평균 매출 증가", value: "310%" },
      { label: "누적 조회수", value: "5.2M+" },
      { label: "캠페인 성공률", value: "94%" },
    ],
    process: [
      {
        step: "01",
        title: "목표 설정",
        description: "캠페인 목적 및 KPI 정의",
      },
      {
        step: "02",
        title: "전략 설계",
        description: "타겟 분석 및 채널·포맷 전략 수립",
      },
      {
        step: "03",
        title: "크리에이터 매칭",
        description: "데이터 기반 최적 인플루언서 선정",
      },
      {
        step: "04",
        title: "콘텐츠 라이브",
        description: "가이드라인 기반 콘텐츠 제작 및 배포",
      },
      {
        step: "05",
        title: "성과 분석",
        description: "실시간 트래킹 및 성과 리포팅",
      },
    ],
  },
  {
    id: "homepage",
    title: "웹사이트 제작",
    subtitle: "Website Development",
    description:
      "브랜드의 첫인상이 결정되는 디지털 공간. 최신 기술 스택과 감각적인 디자인을 결합하여 신뢰감 있는 온라인 브랜드 경험을 만듭니다.",
    icon: "monitor",
    href: "/services/homepage",
    features: [
      "React / Next.js 기반 모던 웹 개발",
      "인터랙티브 모션 및 마이크로 애니메이션",
      "완벽한 반응형 디자인 (모바일 퍼스트)",
      "결제, 예약, 회원 시스템 연동",
      "SEO 최적화 및 퍼포먼스 튜닝",
      "런칭 후 6개월 무상 유지보수 포함",
    ],
    stats: [
      { label: "제작 프로젝트", value: "180+" },
      { label: "기술 스택", value: "20+" },
      { label: "무상 유지보수", value: "6개월" },
      { label: "고객 만족도", value: "98%" },
    ],
    process: [
      {
        step: "01",
        title: "요구사항 정의",
        description: "목적, 기능, 디자인 방향 상담",
      },
      {
        step: "02",
        title: "기능 명세",
        description: "상세 기능 설계 및 견적 산출",
      },
      {
        step: "03",
        title: "UX/UI 디자인",
        description: "와이어프레임 및 비주얼 디자인",
      },
      {
        step: "04",
        title: "개발",
        description: "프론트엔드 · 백엔드 개발 및 테스트",
      },
      {
        step: "05",
        title: "QA & 런칭",
        description: "최종 검수 후 배포 및 인수인계",
      },
    ],
  },
];

export const SERVICE_OVERVIEW = [
  {
    title: "콘텐츠 마케팅",
    description: "검색 상위 노출로 브랜드의 존재감을 만드는 채널",
    icon: "pen-tool",
  },
  {
    title: "소셜 미디어",
    description: "비주얼 스토리텔링으로 고객과의 접점을 확장",
    icon: "instagram",
  },
  {
    title: "인플루언서",
    description: "데이터 기반 크리에이터 매칭으로 구매 전환 유도",
    icon: "users",
  },
  {
    title: "웹사이트 제작",
    description: "브랜드의 신뢰를 완성하는 디지털 공간 구축",
    icon: "monitor",
  },
  {
    title: "퍼포먼스 광고",
    description: "정밀 타겟팅과 데이터 최적화로 ROAS 극대화",
    icon: "bar-chart",
  },
  {
    title: "통합 브랜딩",
    description: "채널 간 시너지를 극대화하는 맞춤형 성장 전략",
    icon: "layout",
  },
];

export const MARKETING_PROCESS = [
  {
    step: "01",
    title: "브랜드 진단",
    description: "현재 브랜드 현황과 시장 포지션을 정밀 분석합니다.",
  },
  {
    step: "02",
    title: "전략 설계",
    description: "데이터 기반의 맞춤형 마케팅 전략을 수립합니다.",
  },
  {
    step: "03",
    title: "크리에이티브 기획",
    description: "브랜드 아이덴티티에 맞는 콘텐츠를 기획합니다.",
  },
  {
    step: "04",
    title: "캠페인 실행",
    description: "전략에 따라 캠페인을 정밀하게 운영합니다.",
  },
  {
    step: "05",
    title: "성과 분석",
    description: "실시간 데이터를 기반으로 성과를 측정합니다.",
  },
  {
    step: "06",
    title: "전략 고도화",
    description: "분석 결과를 반영해 지속적으로 최적화합니다.",
  },
];
