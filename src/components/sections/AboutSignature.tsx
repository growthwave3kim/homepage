import { Reveal } from "@/components/shared/Reveal";
import { SIGNATURE_POINTS } from "@/data/signature-points";

export const AboutSignature = () => {
	return (
		<section className="bg-white px-4 py-20 md:py-24">
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-14 text-center">
					<p className="mb-3 font-semibold text-[#7c3aed] text-sm uppercase tracking-[0.25em]">
						Our Method
					</p>
					<h2 className="font-bold text-3xl text-[#0a0a0a] tracking-tight md:text-5xl">
						처음부터 <span className="gradient-text">달랐습니다.</span>
					</h2>
					<p className="mx-auto mt-4 max-w-md break-keep text-slate-500 leading-relaxed">
						8년간 전문직 광고 규정만 봤습니다.
					</p>
				</Reveal>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{SIGNATURE_POINTS.map((pt, i) => (
						<Reveal key={pt.num} delay={i * 0.1}>
							<div className="group rounded-2xl border border-slate-200 p-6 transition-colors duration-200 hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/2">
								<p className="mb-4 select-none font-black text-5xl text-[#7c3aed]/30 leading-none">
									{pt.num}
								</p>
								<p className="mb-2 font-bold text-[#0a0a0a] text-base">{pt.title}</p>
								<p className="break-keep text-slate-600 text-sm leading-relaxed">{pt.body}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
};
