import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const JOURNEY = [
  {
    step: "01",
    label: "브랜드 인지",
    description: "네이버 검색에서\n브랜드를 처음 발견",
  },
  {
    step: "02",
    label: "블로그 발견",
    description: "키워드 상위 노출로\n콘텐츠 클릭",
  },
  {
    step: "03",
    label: "콘텐츠 소비",
    description: "전문적인 정보로\n체류 시간 증가",
  },
  {
    step: "04",
    label: "신뢰 형성",
    description: "반복 노출로\n브랜드 신뢰 구축",
  },
  {
    step: "05",
    label: "구매 결정",
    description: "자연스러운 전환으로\n구매 완료",
  },
];

export default function ServiceCustomerJourney() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Customer Journey"
          title="고객의 구매 여정"
          description="콘텐츠 마케팅은 고객이 브랜드를 발견하는 순간부터 구매까지 자연스럽게 이끕니다."
        />

        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-0">
          {JOURNEY.map((item, index) => (
            <div key={item.step} className="flex items-center lg:flex-1">
              <div className="flex flex-1 flex-col items-center rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-lg">
                <span className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Step {item.step}
                </span>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="mb-2 font-semibold">{item.label}</h3>
                <p className="whitespace-pre-line text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              {index < JOURNEY.length - 1 && (
                <ArrowRight className="mx-2 hidden h-5 w-5 shrink-0 text-muted-foreground/40 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-primary/5 p-6 text-center lg:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            네이버 검색 결과의{" "}
            <strong className="text-foreground">60% 이상이 블로그 콘텐츠</strong>입니다.
            <br />
            한 번 작성된 콘텐츠는 시간이 지나도 고객을 끌어오는{" "}
            <strong className="text-foreground">브랜드의 영구적인 자산</strong>이 됩니다.
          </p>
        </div>
      </div>
    </section>
  );
}
