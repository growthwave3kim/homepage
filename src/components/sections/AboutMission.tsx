import { Reveal } from "@/components/shared/Reveal";

export const AboutMission = () => {
	return (
		<section className="bg-white px-4 py-16">
			<div className="mx-auto max-w-3xl text-center">
				<Reveal direction="scale">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Mission
					</p>
					<h2 className="mb-6 font-bold text-2xl text-foreground leading-tight tracking-tight md:text-3xl">
						전문직 광고 규정을 직접 검토하는 마케팅 팀
					</h2>
					<p className="break-keep text-muted-foreground leading-relaxed">
						변호사·의사·세무사 등 12개 직군 각각의 광고 허용 범위를 직접 검토합니다.
						<br className="hidden sm:block" />
						규정을 통과한 콘텐츠로, 의뢰인이 먼저 찾아오는 구조를 만듭니다.
					</p>
				</Reveal>
			</div>
		</section>
	);
};
