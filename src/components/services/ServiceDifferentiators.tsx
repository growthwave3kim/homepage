import SectionTitle from "@/components/shared/SectionTitle";
import FadeIn from "@/components/shared/FadeIn";
import { Clock, CalendarDays, Megaphone } from "lucide-react";

const ITEMS = [
  {
    icon: Clock,
    title: "전담 매니저 1:1 배정",
    description:
      "브랜드 전담 매니저가 배정되어 채널 기획부터 발행, 댓글 관리까지 직접 운영합니다. 커뮤니케이션 비용을 최소화합니다.",
    gradient: "from-blue-950 to-indigo-900",
  },
  {
    icon: CalendarDays,
    title: "시즌별 이벤트 콘텐츠",
    description:
      "기념일, 시즌 트렌드에 맞는 이벤트 콘텐츠를 기획합니다. 브랜드가 살아있다는 것을 고객에게 지속적으로 전달합니다.",
    gradient: "from-violet-950 to-purple-900",
  },
  {
    icon: Megaphone,
    title: "META 광고 통합 운영",
    description:
      "인스타그램 운영과 META 광고를 동시에 진행합니다. 유기적 성장과 유료 광고의 시너지로 ROAS를 극대화합니다.",
    gradient: "from-slate-900 to-blue-950",
  },
];

export default function ServiceDifferentiators() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Why Us"
          title="GrowthWave만의 차별점"
          description="단순 콘텐츠 제작이 아닌, 브랜드 채널을 함께 키워나갑니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 120} direction="up">
              <div className="group relative overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_64px_oklch(0.22_0.035_265/0.12)]">
                <div
                  className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${item.gradient} overflow-hidden`}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(oklch(0.9 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0 0) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-7 w-7 text-white/90" />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/40 transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
