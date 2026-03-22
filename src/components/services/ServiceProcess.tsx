import type { ProcessStep } from "@/types";
import SectionTitle from "@/components/shared/SectionTitle";
import ProcessSteps from "@/components/shared/ProcessSteps";

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          subtitle="Process"
          title="진행 프로세스"
          description="체계적인 프로세스로 최적의 결과를 만들어냅니다."
        />
        <ProcessSteps steps={steps} columns={steps.length <= 5 ? 5 : 6} />
      </div>
    </section>
  );
}
