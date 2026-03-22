import type { ProcessStep } from "@/types";

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
    6: "lg:grid-cols-6",
  };

  return (
    <div className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 ${gridCols[columns]}`}>
      {steps.map((step, index) => (
        <div
          key={step.step}
          className="group relative rounded-2xl border bg-card p-6 transition-all hover:shadow-lg"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {step.step}
            </span>
            {index < steps.length - 1 && (
              <div className="hidden h-px flex-1 bg-border lg:block" />
            )}
          </div>
          <h3 className="mb-2 text-base font-semibold">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
