import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

const MESSAGE_PARAGRAPHS = [
	"한신대 정보통신학부를 졸업하고 광고 대행사 'T'사에서 퍼포먼스 마케터로 일했습니다. CPC를 낮추고 ROAS를 올리는 일을 매일 했습니다. 숫자는 빠르게 움직였습니다.",
	"한 가지가 계속 걸렸습니다. 광고비가 끊기면 의뢰도 같이 끊깁니다. 이 구조로는 고객사에 자산이 남지 않았습니다.",
	"2024년에 직접 회사를 만들었습니다. 화장품 브랜드 대상 마케팅 플랫폼 '그로힘'으로 시작해, 같은 해 중소벤처기업부 예비창업 패키지 우수 기업과 강원창조경제혁신센터 G스타트업 최우수에 선정됐습니다. 2025년에는 중앙대학교 캠퍼스타운에 입주했습니다.",
	"그 사이 세무사·노무사 의뢰가 들어왔습니다. 그 일을 맡으면서 알았습니다. 전문직 마케팅은 일반 광고와 다른 게임이었습니다. 광고법은 매년 바뀌고, 검색 의도는 직군마다 다릅니다. 변호사법·의료법·세무사법을 모르고 만든 콘텐츠는 의뢰로 이어지지 않습니다.",
	"그로스웨이브는 그 자리에 만들었습니다. 6개 직군의 광고 규정을 직접 검토하고, 검색 의도에 맞춘 콘텐츠를 만듭니다. 보고는 노출 수가 아니라 상담 신청 수로 합니다.",
	"규모는 작습니다. 그래서 모든 의뢰를 직접 봅니다. 첫 상담은 무료입니다. 판단은 직접 하시면 됩니다.",
];

const EXPERTISE = ["퍼포먼스 마케팅", "AI 영상 활용", "브랜드 마케팅"];

export default function AboutCEOMessage() {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-5xl">
				<Reveal>
					<div className="flex flex-col items-start gap-12 md:flex-row md:gap-16">
						{/* Photo */}
						<div className="shrink-0">
							<div className="relative h-64 w-52 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:h-80 md:w-64">
								<Image
									src="/images/team/taehoon-kim.png"
									alt="김태훈 대표"
									fill
									className="object-cover object-top"
									sizes="(max-width: 768px) 208px, 256px"
								/>
							</div>
						</div>

						{/* Message */}
						<div className="flex flex-col">
							<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
								CEO Message
							</p>
							<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
								퍼포먼스 마케팅으로 시작했습니다.
							</h2>
							<div className="mb-8 flex flex-wrap gap-2">
								{EXPERTISE.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-[#7c3aed]/20 bg-[#7c3aed]/8 px-3 py-1 font-semibold text-[#7c3aed] text-xs"
									>
										{tag}
									</span>
								))}
							</div>
							<div className="space-y-4">
								{MESSAGE_PARAGRAPHS.map((para) => (
									<p key={para} className="text-slate-700 leading-relaxed">
										{para}
									</p>
								))}
							</div>
							<p className="mt-8 font-semibold text-slate-500 text-sm tracking-wide">
								― 김태훈 / 그로스웨이브 대표
							</p>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
