import { Reveal } from "@/components/shared/Reveal";

export const AboutMission = () => {
	return (
		<section className="bg-white px-4 py-16">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal>
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Mission
					</p>
					<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
						전문직 광고 규정을 직접 검토하는 마케팅 팀
					</h2>
					<p className="break-keep text-muted-foreground leading-relaxed">
						대부분의 마케팅 대행사는 전문직 광고 규정을 모릅니다. 그 결과 광고비는 나가지만 의뢰는
						늘지 않습니다.
						<br className="hidden sm:block" />
						그로스웨이브는 변호사법·의료법·세무사법 등 직군별 광고 규정을 직접 검토하고, 의뢰인이
						찾아오는 콘텐츠를 설계합니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
