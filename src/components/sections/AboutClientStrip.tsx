"use client";

import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/shared/Reveal";
import { CLIENT_DISCIPLINES } from "@/data/client-disciplines";

const DisciplineChip = ({ name, caption }: { name: string; caption: string }) => (
	<div className="mx-3 flex flex-col items-center gap-1 rounded-2xl border border-slate-200 bg-white px-6 py-4 transition-all duration-200 hover:scale-105 hover:border-[#7c3aed]/40 hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)]">
		<span className="font-bold text-[#0a0a0a] text-base">{name}</span>
		<span className="font-mono text-slate-400 text-[10px] tracking-wide">{caption}</span>
	</div>
);

export const AboutClientStrip = () => {
	return (
		<section className="overflow-hidden bg-slate-50 py-20 md:py-24">
			<div className="mb-12 px-4">
				<Reveal className="text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Disciplines
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						<span className="gradient-text">12개</span> 전문직 직군
					</h2>
					<p className="mx-auto mt-4 max-w-md break-keep text-slate-500 leading-relaxed">
						각 직군의 광고 규정과 검색 의도를 직접 학습한 팀
					</p>
				</Reveal>
			</div>

			<Marquee speed={40} gradient={false} pauseOnHover>
				{CLIENT_DISCIPLINES.map((d) => (
					<DisciplineChip key={d.name} name={d.name} caption={d.caption} />
				))}
			</Marquee>
		</section>
	);
};
