import type { ProcessStep } from "@/types";
import FadeIn from "@/components/shared/FadeIn";

interface ProcessStepsProps {
  steps: ProcessStep[];
  columns?: 3 | 5 | 6;
}

export default function ProcessSteps({
  steps,
  columns = 6,
}: ProcessStepsProps) {
  const gridCols = {
    3: "lg:grid-cols-3",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-3",
  };

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${gridCols[columns]}`}>
      {steps.map((step, i) => (
        <FadeIn key={step.step} delay={i * 70} direction="up">
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_16px_48px_oklch(0.22_0.035_265/0.09)]">
            {/* 배경 숫자 */}
            <span className="absolute right-4 top-2 select-none text-6xl font-black text-primary/[0.06]">
              {step.step}
            </span>

            {/* 번호 뱃지 */}
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
              {step.step}
            </div>

            <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>

            {/* 하단 라인 */}
            <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/30 transition-all duration-500 group-hover:w-full" />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
