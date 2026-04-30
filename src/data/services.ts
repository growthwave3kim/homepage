import type { Service } from "@/types";

export const SERVICES: Service[] = [
	{
		index: "01",
		category: "Blog Marketing",
		title: "검색하는 의뢰인을 만나는 가장 빠른 길",
		description:
			"의뢰인은 법적 문제를 마주쳤을 때 가장 먼저 검색합니다. 그 순간 당신의 이름이 보여야 합니다. 법률 특화 키워드 분석과 검색 의도 기반 콘텐츠로 상위 노출을 설계합니다.",
		steps: [
			{ step: 1, label: "키워드 분석" },
			{ step: 2, label: "콘텐츠 기획" },
			{ step: 3, label: "발행" },
			{ step: 4, label: "상위노출" },
			{ step: 5, label: "상담 전환" },
		],
	},
	{
		index: "02",
		category: "Short-form Marketing",
		title: "변호사도 콘텐츠 시대입니다",
		description:
			"인스타그램 릴스, 유튜브 쇼츠, 틱톡을 통해 변호사 개인의 전문성을 자연스럽게 알립니다. 멀티 채널 배포로 더 많은 의뢰인에게 닿고, 퍼스널 브랜드를 구축합니다.",
		steps: [
			{ step: 1, label: "기획" },
			{ step: 2, label: "촬영" },
			{ step: 3, label: "편집" },
			{ step: 4, label: "업로드" },
			{ step: 5, label: "분석" },
		],
	},
];
