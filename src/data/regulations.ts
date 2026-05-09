export type Regulation = {
	profession: string;
	slug: string;
	law: string;
	rule: string;
	allowed: string[];
	prohibited: string[];
};

export const REGULATIONS: Regulation[] = [
	{
		profession: "변호사",
		slug: "lawyer",
		law: "변호사법 §23",
		rule: "변호사 광고에 관한 규정",
		allowed: ["법률 서비스 분야·전문 영역 소개", "연락처·사무소 위치 안내", "학력·경력·논문 게재"],
		prohibited: ["수임 사건 성공률·결과 보장 표현", "다른 변호사와의 비교 광고", "허위·과장 표현"],
	},
	{
		profession: "의사",
		slug: "doctor",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["진료 과목·전문 분야 안내", "의료진 학력·경력 소개", "의료기관 시설·장비 소개"],
		prohibited: [
			"치료 효과·완치 보장 표현",
			"환자 후기·경험담 (사전 심의 없이)",
			"다른 의료기관과의 비교 광고",
		],
	},
	{
		profession: "한의사",
		slug: "hanbang",
		law: "의료법 §56",
		rule: "의료광고 심의위원회",
		allowed: ["한방 진료 과목·치료법 안내", "의료진 경력·학력 소개", "시설·장비 현황 안내"],
		prohibited: ["효능 과장·치료 결과 보장", "특정 질환 완치 표현", "비교 광고 (사전 심의 없이)"],
	},
	{
		profession: "수의사",
		slug: "vet",
		law: "수의사법 §12",
		rule: "수의사 광고 기준",
		allowed: ["진료 과목·전문 분야 소개", "의료진 경력·학력 안내", "진료 시간·위치 안내"],
		prohibited: ["치료 결과 보장 표현", "의약품·시술 효능 과장", "허위·과장 광고"],
	},
	{
		profession: "노무사",
		slug: "labor",
		law: "공인노무사법",
		rule: "광고 기준",
		allowed: ["취급 업무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["사건 처리 결과 표방", "타 노무사와의 비교 광고", "수임료 허위 표시"],
	},
	{
		profession: "세무사",
		slug: "tax",
		law: "세무사법 §22의2",
		rule: "세무사 광고 기준",
		allowed: ["취급 세무 분야 소개", "학력·경력·자격 안내", "사무소 위치·연락처 안내"],
		prohibited: ["성공 실적·절세 수치 보장", "다른 세무사와의 비교 광고", "수수료 허위 표시"],
	},
];
