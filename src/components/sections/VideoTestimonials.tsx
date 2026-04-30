import { Play } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

const VIDEO_PLACEHOLDERS = [
	{ specialty: "상속·가사 전문", label: "K 변호사" },
	{ specialty: "형사 전문", label: "P 변호사" },
	{ specialty: "이혼·가사 전문", label: "L 변호사" },
] as const;

export default function VideoTestimonials() {
	return (
		<section className="bg-slate-50 px-4 py-24">
			<div className="mx-auto max-w-7xl">
				<Reveal>
					<SectionHeading
						eyebrow="Video Reviews"
						title="변호사 후기 영상"
						sub="실제 클라이언트의 목소리를 직접 들어보세요"
						className="mb-16"
					/>
				</Reveal>

				<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{VIDEO_PLACEHOLDERS.map((item, i) => (
						<Reveal key={item.label} delay={i * 0.1}>
							<div className="group relative flex aspect-video cursor-default items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50 to-slate-50">
								<div className="flex flex-col items-center gap-3 text-center">
									<div className="gradient-brand flex h-14 w-14 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(124,58,237,0.3)] transition-transform group-hover:scale-110">
										<Play className="ml-1 h-6 w-6 fill-white text-white" />
									</div>
									<div>
										<p className="font-semibold text-foreground text-sm">{item.label}</p>
										<p className="text-muted-foreground text-xs">{item.specialty}</p>
									</div>
								</div>
							</div>
						</Reveal>
					))}
				</div>

				<Reveal delay={0.4}>
					<p className="mt-6 text-center text-muted-foreground text-xs">
						영상 콘텐츠는 클라이언트 동의 후 순차적으로 공개됩니다
					</p>
				</Reveal>
			</div>
		</section>
	);
}
