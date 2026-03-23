import SectionTitle from "@/components/shared/SectionTitle";

const PROJECTS = [
  {
    title: "MAISON BLANC",
    category: "프리미엄 라이프스타일",
    description:
      "고급 라이프스타일 브랜드의 디지털 아이덴티티 구축. 인터랙티브 모션과 섬세한 UI로 브랜드 프리미엄 감성을 온라인에서 재현했습니다.",
    tags: ["Next.js", "GSAP", "모션 디자인"],
    gradient: "from-slate-700 to-slate-500",
  },
  {
    title: "ATELIER NOIR",
    category: "패션 하우스",
    description:
      "패션 하우스의 디지털 쇼룸. 시즌별 컬렉션을 온라인에서 경험할 수 있도록 몰입감 있는 비주얼과 이커머스 기능을 결합했습니다.",
    tags: ["이커머스", "반응형", "결제 연동"],
    gradient: "from-zinc-800 to-zinc-600",
  },
  {
    title: "VERRE",
    category: "주얼리 브랜드",
    description:
      "프리미엄 주얼리의 정교함을 디지털로 표현. 제품 3D 뷰어와 맞춤 상담 예약 시스템으로 온라인 구매 전환을 극대화했습니다.",
    tags: ["3D 인터랙션", "예약 시스템", "럭셔리"],
    gradient: "from-stone-700 to-stone-500",
  },
  {
    title: "ONUL",
    category: "F&B 브랜드",
    description:
      "감성 카페 브랜드의 온라인 스토어. 원두 구독 서비스, 오프라인 예약, 브랜드 스토리를 하나의 경험으로 통합했습니다.",
    tags: ["구독 서비스", "예약", "F&B"],
    gradient: "from-amber-900 to-amber-700",
  },
];

export default function ServiceProjectShowcase() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Selected Works"
          title="주요 프로젝트"
          description="GrowthWave가 만든 브랜드 디지털 경험을 확인하세요."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-xl"
            >
              {/* 썸네일 */}
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-7">
                  <p className="mb-1 text-xs font-medium tracking-widest text-white/50 uppercase">
                    {project.category}
                  </p>
                  <p className="text-2xl font-bold text-white">{project.title}</p>
                </div>
              </div>
              {/* 내용 */}
              <div className="p-6">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
